## flushSync

react 提供了一个可以同步刷新 DOM 的 API：`flushSync`。

```js
  import { flushSync } from 'react-dom';
 
  flushSync(() => {
    setSomething(123);  // 任意的更新，此处的更新会同步执行。
  });
  //  到了这一行，dom已经更新完成
```

## 使用场景

`flushSync` 的使用场景为：**与第三方集成使用。**，因为它可以保证在下一行 dom 得到了刷新。

> 如果仅使用 reactAPI, flushSync 是完全可以避免使用的。并且使用 flushSync 会造成严重的性能损耗 


## 示例

浏览器 onbeforeprintAPI 允许您在打印对话框打开之前立即更改页面。这对于应用自定义打印样式非常有用，可以让文档更好地显示以进行打印。

不使用 flushSync，我们要满足在打印前修改某状态的需求，仅靠react是无法做到的，因为react的useState是异步的。不过我们有两种解决办法:

1. 绕开 react, 直接操作 dom。 坏处是这样很不 react，而且会影响到原本使用state的逻辑
2. 转变思路：当状态修改为指定值的时候，触发打印。坏处是会有一些需求达不到。

本次示例为第二种方式，示例如下：

```js
import { useState, useEffect } from 'react';
 
export default function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);
 
  useEffect(() => {
    function handleAfterPrint() {
      setIsPrinting(false);
    }
 
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);
 
  useEffect(() => {
    if (isPrinting) {
      window.print()
    }
  }, [isPrinting])
 
  return (
    <>
      <h1>isPrinting: {isPrinting ? 'yes' : 'no'}</h1>
      <button onClick={() => setIsPrinting(true)}>
        Print
      </button>
    </>
  );
}
```

而使用 flushSync，我们就可以满足在打印前修改某状态的需求，示例如下：

```js
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
 
export default function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);
   
  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      })
    }
    
    function handleAfterPrint() {
      setIsPrinting(false);
    }
 
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);
   
  return (
    <>
      <h1>isPrinting: {isPrinting ? 'yes' : 'no'}</h1>
      <button onClick={() => window.print()}>
        Print
      </button>
    </>
  );
}
```
