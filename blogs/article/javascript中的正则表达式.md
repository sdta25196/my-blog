## 正则中的引擎

正则表达式分为三种引擎：
* Traditional NFA(传统型NFA): 非确定性有限状态自动机， 拥有忽略优先的功能。
* DFA : 确定性有限状态自动机，永远都是匹配优先。
* POSIX NFA ： 主要指符合POSIX标准的NFA引擎，它的特点主要是提供longest-leftmost匹配，也就是在找到最左侧最长匹配之前，它将继续回溯。同DFA一样，忽略优先量词对于POSIX NFA同样是没有意义的。

JavaScript 中的正则表达式使用的是传统型NFA引擎

**引擎验证方式如下：**

用 `/nfa|nfa not/` 去匹配 `nfa not`

* 如果匹配结果是 `nfa`，那这个就是Traditional NFA(传统型NFA)

* 如果匹配结果是 `nfa not`，那有可能是 POSIX NFA 也可能是 DFA

此时需要继续判断是 POSIX NFA 还是 DFA，`/X(.+)+X/` 去匹配 `==XX=============================`,如果执行时间较长则为NFA, 否则是DFA（我电脑跑了八十多秒）

因为NFA的回溯机制，这里会触发大量的回溯，所以NFA会非常慢。

在JS中执行`"nfa not".match(/nfa|nfa not/)`, 得到 `nfa`。由此得知js使用传统型NFA引擎

## 正则的规则与边界

正则通用规则（最左最长原则）:

1. 最左：开始位置靠先的匹配文本优于开始位置靠后的匹配文本

2. 最长：标准匹配量词匹配优先(*、?、+、{min,max})


**边界**

1. 大多数系统中的正则无法匹配任意深度的嵌套结构

2. 在某些场景下，并不能完全依赖正则\单个正则来完成全部工作

无法做到：

* 匹配一个数，可以是负数，小数，整数。这个需求需要了解到具体的待匹配文字。否则总是会出现一些不期望的匹配

* isasia正则匹配ia, 如果有ia匹配ia，没有就匹配isa。 因为最左原则，如果最左匹配到了isa，就不会匹配字符串中的ia了

## 匹配优先和忽略优先

忽略优先匹配最短，匹配优先匹配最长

支持尽量匹配更短的`isassa`这时候使用正则  `i.*?a`  来优先匹配isa，而不是isassa

使用忽略优先匹配标签`<b>ccc</b>`可使用`<b>.*?<\/b>`，来防止匹配到多个连续的b标签，但是不能防止匹配嵌套的b标签

### 正则表达式引擎，默认是匹配优先（贪婪匹配）

先看下面这个正则：

```js
let reg = /".+"/g;
 
let str = 'a "witch" and her "broom" is one';
 
console.log( str.match(reg) ); //"witch" and her "broom"
```
 
我们期望匹配两个双引号中的单词`"witch" `和`"broom"`，但实际上确实匹配到了`"witch" and her "broom"`

正则表达式默认贪婪，所以此处先匹配到一个`"`，然后的`.+`会一直匹配到str结尾处，然后再回溯去匹配`"`，所以最终匹配不符合预期

### 开启忽略优先（惰性匹配）

我们只需要在量词后面添加 `?`即可开启惰性和匹配，例如：`+?`、`*?`、`??`

```js
let reg = /".+?"/g;

let str = 'a "witch" and her "broom" is one';

console.log( str.match(reg) ); // witch, broom
```

### 惰性匹配的替代方案

使用非`^`来匹配

```js
let reg = /"[^"]+"/g;

let str = 'a "witch" and her "broom" is one';

console.log( str.match(reg) ); // witch, broom
```

### 替代方案与惰性匹配分别的适用场景

下面例子中我们想要匹配 `<a href="link1" class="doc">`，使用惰性匹配就可能出错

**使用惰性匹配，不是预期的效果**

匹配正确 `"<a href=\"link1\" class=\"doc\">", "<a href=\"link2\" class=\"doc\">"`

```js
let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let reg = /<a href=".*?" class="doc">/g; 
console.log( str.match(reg) ); 
```

范围扩大的话，就会匹配错误 `"<a href=\"link1\" class=\"wrong\">... <p style=\"\" class=\"doc\">"`

```js
let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let reg = /<a href=".*?" class="doc">/g; 
console.log( str.match(reg) );  
```

**使用替代方案，正确匹配**

没有匹配项，是正确的

```js
let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let reg = /<a href="[^"]*" class="doc">/g;
console.log( str.match(reg) );
```

## 占有优先

多数引擎没有实现占有优先，和匹配优先差不多

## 回溯

正则拥有的有多种可能性越多，就越多的造成回溯。回溯会造成性能的下降

例如前面提到的用`/X(.+)+X/` 去匹配 `==XX=============================`，就是因为大量的回溯带来的性能问题。

> 通常我们通过减少可能性、环视来防止回溯

## 环视、断言、零宽断言

环式结构不匹配任何字符，只匹配特定位置，类似`$ \b ^`

顺序肯定环视： `x(?=y)`	匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。

例如，/Jack(?=Sprat)/会匹配到'Jack'仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。

逆序肯定环视： `(?<=y)x`	匹配'x'仅当'x'前面是'y'.这种叫做后行断言。

例如，/(?<=Jack)Sprat/会匹配到' Sprat '仅仅当它前面是' Jack '。/(?<=Jack|Tom)Sprat/匹配‘Sprat ’仅仅当它前面是'Jack'或者是‘Tom’。但是‘Jack’和‘Tom’都不是匹配结果的一部分。

顺序否定环视： `x(?!y)` 仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。

例如，仅仅当这个数字后面没有跟小数点的时候，/\d+(?!\.)/ 匹配一个数字。正则表达式/\d+(?!\.)/.exec("3.141") 匹配‘141’而不是‘3.141’

逆序否定环视： `(?<!y)x` 仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。

例如，仅仅当这个数字前面没有负号的时候，/(?<!-)\d+/ 匹配一个数字。
* /(?<!-)\d+/.exec('3') 匹配到 "3".
* /(?<!-)\d+/.exec('-3') 因为这个数字前有负号，所以没有匹配到。

## lastIndex 

sticky 标志和 global 标志的不同点

如果正则表达式有粘性 y 标志，下一次匹配一定在 lastIndex 位置开始；

如果正则表达式有全局 g 标志，下一次匹配可能在 lastIndex 位置开始，也可能在这个位置的后面开始。

global因为lastIndex带来的坑

```js
let str = '#foo#'
let regex = /foo/g
regex.test(str) //true
regex.test(str) //false
```

sticky 的一个使用场景是，我们可以指定从字符串的什么位置开始进行匹配：

```js
  let str = '#foo#'
  let regex = /foo/y
 
  regex.lastIndex = 1
  regex.test(str)      // true
  regex.lastIndex = 5
  regex.test(str)      // false (lastIndex is taken into account with sticky flag)
  regex.lastIndex      // 0 (reset after match failure)
```

## 优化

* 正则的优化方式之一就是减少回溯

* 匹配字符串前后空格，最快的方法是两个正则。`/^\s+/` 、`/\s+$/` ， 如果把这两个正则和起来写是不对的，并且效率底下


* 使用正则匹配再替换字符串，比直接替换字符串更慢。

```js
function a(h){
    if(h.startsWith('http://')) return h.replace('http://','https://')
    if(h.startsWith('https://')) return h.replace('https://','http://')
    return h
}

function a1(h){
    return h.replace(/http(s?):\/\//,(_, isHttps)=>{
        return isHttps ? 'http://':'https://'
    })
}

```

1 先迈好使得腿，把更容易匹配到更多内容的部分放到前面，可以有效减少回溯，减少多选分之

2 多选结构会造成大量回溯[a|b|c|d|e] 应该写成[a-e]

3 使用非捕获括号来节约时间，并且不滥用括号

4 真正使用正则之前，先进行预判断和预处理。例如正则要求字符串长度的话，可以先判断长度。正则要求包含某字符，也可以先处理字符串。

6 提取公共字符串 th(?:is|at)  比(?:this|that)效率高


## demo

联想搜索
```js
function searchLink(keyword) {
  // 模拟后端返回数据
  let list = ['abc', 'ab', 'a', 'bcd', 'edf', 'abd'];
  let reg = new RegExp(keyword, 'i');
  return list.filter(item => reg.test(item))
}
```

包含中文
```js
function hasCn(str) {
  let reg = /[\u4e00-\u9fff]/g // \u9fa5 是8.0版本的事情了。未来 \u9fff 也会不够用。
  return reg.test(str)
}

function hasCn1(str) {
  let reg = /\p{sc=Han}/gu  // 启用unicode支持，匹配书写系统为中文的字符。Han 代表中文。
  return reg.test(str)
}
```

删除url中空的参数。
```js
const trimParmas = (parmaStr) => {
  return parmaStr.replace(/((\w*?)=&|(&\w*?=)$)/g, '')
}

```

删除标签中的内容
```js
function trimTag(tagName, htmlStr) {
  let reg = new RegExp(`<${tagName}(\\s.*)*>(\\n|.)*<\\/${tagName}>`, "g")
  return htmlStr.replace(reg, '')
}
```

匹配字符串中第一个不是2的数字
```js
'xxaa21321'.match(/[^\D2]/)
```