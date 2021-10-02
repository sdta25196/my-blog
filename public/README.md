***
toPrimitive 对象的原始值转换哦。
有[Symbol.toPrimitive] 的时候走[Symbol.toPrimitive]
没有的时候:
hint为 string的时候走toString 或者 valueof
hint为 number|defualt的时候走valueof 或者 tostring

***
正则表达式有NFA DFA POSIX NFA三种引擎，JS是用的NFA

***
事件冒泡是微软定义的，
事件捕获是网景定义的，
ECMA规范吸纳了两种模式，addEventListener 默认使用冒泡，第三个参数传true就是用捕获，false，也使用冒泡

***
Accept and embrace all experiences

接受和拥抱所有经历

***
trust your intuition

相信你的直觉

***
动态规划(dp) 是求解最优化的递推问题！

***
幂等性：对同一个系统，使用同样的条件，一次请求和重复的多次请求对系统资源的影响是一致的

***
Too many of us are not living our dreams because we are living our fears.

太多的人没有活在自己的梦想中，因为我们活在自己的恐惧中。  

***
如果你走得足够远，其实就再也没办法回去了。当你回到故乡，原来的一切都已经消失了。

不过，这也不算什么，归根结底，旅程才是你的故事中最重要的部分。

***
三种Array判断

```js
  let arr = []
  Array.isArray(arr)  // true
  Object.prototype.toString.call(arr) === "[object Array]" // true
  arr.constructor === Array // true
```
***
多路复用 - 使多路信号在一个信道中进行通信，就叫做多路复用，主要是可以有效利用资源
