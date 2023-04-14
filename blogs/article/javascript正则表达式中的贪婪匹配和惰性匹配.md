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