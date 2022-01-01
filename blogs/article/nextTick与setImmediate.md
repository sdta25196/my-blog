## nextTick 
  node中事件循环进行一次完整的行程时，我们都将其称为一个`tick`。

  当将一个函数传给 `process.nextTick()` 时，则指示引擎在当前操作结束（在下一个事件循环tick开始之前）时调用此函数：
  
  ```js
    process.nextTick(() => {
      // todo...
    })
  ```

  本质上，这是一个`插队操作`,它告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。

  Node.js 提供了一个 process.maxTickDepth (默认 1000)。用来限制程序中由于`nextTick`操作可能带来的死循环操作。

  ```js
    let counts = 0;

    function wait (mstime) {
      let date = Date.now();
      while (Date.now() - date < mstime) {
        // do nothing
      }
    }

    function nextTick () {
      process.nextTick(() => {
        wait(20);
        console.log('nextTick');
        nextTick();
      });
    }

    const lastTime = Date.now();

    setTimeout(() => {
      console.log('timers', Date.now() - lastTime + 'ms');
    }, 0);

    nextTick();
  ```
  此时永远无法跳到timer阶段去执行setTimeout里面的回调方法, 因为在进入timers阶段前有不断的nextTick插入执行. 除非执行了1000次到了执行上限，所以上面这个案例会不断地打印出nextTick字符串

## setImmediate
  
  当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 setImmediate() 函数：

  ```js
    setImmediate(() => {
      // todo...
    })
  ```

  作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。

## nextTick与setImmediate与setTimeout

  setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？

  传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

  延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 **执行顺序取决于各种因素**，但是它们都会在事件循环的下一个迭代中运行。

  > 较真setTimeout与setImmediate的执行顺序是没有意义的，我们编写程序的时候，不应当对异步程序的执行时间有所期待，我们应该把异步程序改写成同步程序，多使用promise\generator