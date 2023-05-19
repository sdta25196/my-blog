## 正则表达式引擎，默认是贪婪模式

先看下面这个正则：

```js
let reg = /".+"/g;
 
let str = 'a "witch" and her "broom" is one';
 
console.log( str.match(reg) ); //"witch" and her "broom"
```
 
我们期望匹配两个双引号中的单词`"witch" `和`"broom"`，但实际上确实匹配到了`"witch" and her "broom"`

正则表达式默认贪婪，所以此处先匹配到一个`"`，然后的`.+`会一直匹配到str结尾处，然后再回溯去匹配`"`，所以最终匹配不符合预期

## 开启惰性匹配

我们只需要在量词后面添加 `?`即可开启惰性和匹配，例如：`+?`、`*?`、`??`

```js
let reg = /".+?"/g;

let str = 'a "witch" and her "broom" is one';

console.log( str.match(reg) ); // witch, broom
```

## 惰性匹配的替代方案

使用非`^`来匹配

```js
let reg = /"[^"]+"/g;

let str = 'a "witch" and her "broom" is one';

console.log( str.match(reg) ); // witch, broom
```

## 替代方案与惰性匹配分别的适用场景

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



----------------------------------------------------------------

## 引擎

正则表达式分为三种引擎：
* Traditional NFA(传统型NFA): 非确定性有限状态自动机， 拥有忽略优先的功能。
* DFA : 确定性有限状态自动机，永远都是匹配优先。
* POSIX NFA ： 主要指符合POSIX标准的NFA引擎，它的特点主要是提供longest-leftmost匹配，也就是在找到最左侧最长匹配之前，它将继续回溯。同DFA一样，忽略优先量词对于POSIX NFA同样是没有意义的。

JavaScript 中的正则表达式使用的是传统型NFA引擎

**验证方式如下：**

用 `/nfa|nfa not/` 去匹配 `nfa not`

* 如果匹配结果是 `nfa`，那这个就是Traditional NFA(传统型NFA)

* 如果匹配结果是 `nfa not`，那有可能是 POSIX NFA 也可能是 DFA

此时需要继续判断是 POSIX NFA 还是 DFA，`/X(.+)+X/` 去匹配 `==XX=============================`,如果执行时间较长则为NFA, 否则是DFA（我电脑跑了八十多秒）

因为NFA的回溯机制，这里会触发大量的回溯，所以NFA会非常慢。

在JS中执行`"nfa not".match(/nfa|nfa not/)`, 得到 `nfa`。由此得知js使用传统型NFA引擎

## 规则与边界

正则通用规则（最左最长原则）:

1. 最左：开始位置靠先的匹配文本优于开始位置靠后的匹配文本

2. 最长：标准匹配量词匹配优先(*、?、+、{min,max})


**边界**

1. 大多数系统中的正则无法匹配任意深度的嵌套结构

2. 在某些场景下，并不能完全依赖正则来完成全部工作

匹配一个数。可以是负数，小数，整数。这个需求也做不到，因为他需要了解到具体的待匹配文字。否则总是会出现一些不期望的匹配 _?[0_9]*\.?[0_9]* 会匹配到字符前的空白符。_?[0_9]+(\.[0_9]*)?|\.[0_9]+ 也会被日期2004.3.4匹配进来

isasia正则匹配ia, 如果有ia匹配ia没有就匹配isa。

某些场景下，不依赖单个正则完成全部工作才是对的

## 匹配优先和忽略优先

忽略优先匹配最短，匹配优先匹配最长

但是支持尽量匹配更短的i…a这时候使用正则  i.*?a  来优先匹配isa，而不是isasia


使用忽略优先匹配标签<B>ccc<B>可使用<b>.*?</b>，来防止匹配到多个连续的<b>，但是不能防止匹配嵌套的<b>
但是使用环视就可以，<b>(?!</?b>.)*</b>，环式结构不匹配任何字符，只匹配特定位置，类似$\b^


## 占有优先

多数引擎没有实现占有优先，和匹配优先差不多

## 回溯

## 环视


## lastIndex 

sticky 标志和 global 标志的不同点
如果正则表达式有粘性 y 标志，下一次匹配一定在 lastIndex 位置开始；如果正则表达式有全局 g 标志，下一次匹配可能在 lastIndex 位置开始，也可能在这个位置的后面开始。


sticky 我一个使用场景是，我们可以指定从字符串的什么位置开始进行匹配：

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

正则的优化方式之一就是减少回溯


效率： 匹配字符串前后空格，最快的方法是两个正则。`/^\s+/` 、  `/\s+$/`  这两个正则和起来写是不对的，并且效率底下

使用正则匹配再替换字符串，比直接替换字符串更慢。

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

5 开头字符串的判断，要匹配active，可以先判断字符串是否是a开头

6 提取公共字符串 th(?:is|at)  比(?:this|that)效率高
----------------------------------------------------------------