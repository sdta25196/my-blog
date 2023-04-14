## 使用队列实现一个异步任务依次执行

先简单实现一个队列，利用队列 + Promise 来实现对任务的依次执行

首先搞一个队列：

```js
	class Queue {
	  constructor() {
	    this.arr = [];
	    this.head = 0;
	    this.tail = 0;
	  }
	
	  push(x) {
	    this.arr.push(x);
	    this.tail++;
	  }
	
	  top() {
	    return this.arr[this.head];
	  }
	  pop() {
	    this.head++
	  }
	
	  getAll() {
	    return this.arr.slice(this.head, this.tail)
	  }
	
	  size() {
	    return this.head == this.tail
	  }
	}
```

把异步任务依次加入到队列中：

```js
	async function fn() {
	  let q = new Queue()
	  for (let i = 0; i < 5; i++) {
	    q.push(() => {
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          console.log(i);
	          resolve();
	        }, 2000)
	      })
	    })
	  }
	  while (!q.size()) {
	    let c = q.top();
	    await c();
	    q.pop();
	  }
	}
	fn() // 每隔两秒输出0-4
```

## 使用普通for循环也可以简单实现

这是个ifee，以下两条要注意；
  * 不是用r() 会卡在第一次输出之后就不动了
  * 不使用await 会在一秒后一次输出全部

```js
	  + async function () {
	    for (let i = 0; i < 5; i++) {
	      await new Promise((r, j) => {
	        setTimeout(() => {
	          console.log(i);
	          r();
	        }, 1000)
	      })
	    }
	  }()
	  
  ```
