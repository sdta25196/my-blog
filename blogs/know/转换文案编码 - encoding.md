## encoding

encoding是iconv-lite的简单包装器，用于将字符串从一种编码转换为另一种编码。

## 安装
通过 npm 安装

npm install encoding

## 用法

需要模块 `var encoding = require("encoding");`

使用 `encoding.convert()` 转换

```js
var resultBuffer = encoding.convert(text, toCharset, fromCharset);
```

* text是要转换的 Buffer 或 String
* toCharset是要转换字符串的字符集
* fromCharset（可选，默认为 UTF-8）是源字符集

转换的输出始终是 Buffer 对象。

## 例子

```js
var result = encoding.convert("ÕÄÖÜ", "Latin_1");
console.log(result); //<Buffer d5 c4 d6 dc>
```