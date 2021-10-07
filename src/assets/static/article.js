
  const article = [{
          hash: "5352edda262a4744f26b12b6a8e1c6a2d0b0f7d8",
          fileName: "Event Loop - 事件循环详解.md",
          title: "Event Loop - 事件循环详解",
          filePath: "/blogs/article/",
          date: "2021-10-5 16:24:20",
          description: "## 事件循环@@@  @@@事件循环就是 JavaScript在 **引擎等待任务**、**执行任务**、**进入休眠状态等待更多任务**这几个状态之间转换的无限循环。@@@@@@JavaScript 引擎大多数时候不执行任何操作，它仅在脚本/处理程序/事件激活时执行",
        },{
          hash: "7c3e158bc1801f229b1772e7b2814417b3d29352",
          fileName: "GC-垃圾回收机制.md",
          title: "GC-垃圾回收机制",
          filePath: "/blogs/article/",
          date: "2021-10-7 15:49:44",
          description: "## 垃圾回收@@@@@@  c一类的语言拥有底层的内存管理原语`malloc()`和`free()`，@@@  而像javascript这样的高级语言，会自动释放内存，这一过程就是**内存垃圾回收**@@@  ",
        },{
          hash: "9cfd3375c912cd25a0f0be10d7da0e46fb69a31f",
          fileName: "html渲染原理及其优化思路.md",
          title: "html渲染原理及其优化思路",
          filePath: "/blogs/article/",
          date: "2021-10-7 15:33:29",
          description: "## 关键渲染路径@@@![progressive page rendering](assets/progressive-rendering.png)@@@@@@@@@项目轻量的时候问题不大，但是当项目变大，变复杂的时候，一个页面加载变慢的时候，就可以采取手动去控制组件渲染顺序的方式来保证一部分关键渲染路径是优先渲染的",
        },{
          hash: "e7cc98671cbf11d9fa71d00f6a730f97a1595f8c",
          fileName: "v8引擎执行机制.md",
          title: "v8引擎执行机制",
          filePath: "/blogs/article/",
          date: "2021-10-3 15:09:39",
          description: "## 引擎执行机制@@@@@@  SourceCode -> Abstract Syntax Tree -> Bytecode -> Binary@@@@@@  引擎中通常拥有parser（解析器）、Ignition（解释器）、TurboFan（编译器）、GC(垃圾回收器)",
        },{
          hash: "b6f974b29d2f6a46d7996a6d31dd71979f7f6c86",
          fileName: "前端模块化的前世今生.md",
          title: "前端模块化的前世今生",
          filePath: "/blogs/article/",
          date: "2021-9-9 15:00:55",
          description: "@@@# 话说从前.. ... ... ..@@@***@@@@@@## 我们定义各种各样的全局函数",
        },{
          hash: "1f15b620e5c3cbdaad2bb76465da2427bd55bfef",
          fileName: "前端监控方案.md",
          title: "前端监控方案",
          filePath: "/blogs/article/",
          date: "2021-9-8 16:39:20",
          description: "* `window.addEventListener('error')`@@@  * error 可以监听所有同步、异步的运行时错误，但无法监听语法、接口、资源加载错误。@@@* `window.addEventListener('unhandledrejection')`@@@  * unhandledrejection 可以监听到 Promise 中抛出的，未被 .catch 捕获的错误。@@@* react还可以使用`Error Boundaries`",
        },{
          hash: "be8b87c706ad9efe185699f8c2d4f4093c6b47c0",
          fileName: "对称加密与非对称加密.md",
          title: "对称加密与非对称加密",
          filePath: "/blogs/article/",
          date: "2021-9-26 10:12:32",
          description: "## 对称加密@@@@@@在对称加密算法中，加密和解密使用的**密钥是相同的**。加密和解密使用的是同一个密钥。@@@@@@优点：算法公开，计算量小，加密速度快，效率高。",
        },{
          hash: "b27dffe3d9efc59c5bc620eae4489ac05fe51c31",
          fileName: "解释型语言与编译型语言.md",
          title: "解释型语言与编译型语言",
          filePath: "/blogs/article/",
          date: "2021-9-14 14:14:34",
          description: "# 解释型语言与编译型语言概念与对比@@@@@@## 编译执行（直接执行）@@@@@@> c语言使用命令行 `gcc x.c` 编译出a.out文件，然后执行 `./a.out`即可运行，这是编译执行，编译后的文件可以直接执行",
        }]
  export default article
  