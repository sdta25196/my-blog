
const article = [{
        hash: "57c659b7138984f5915ca44ae3028194382d2929",
        fileName: "c373d97cc3380774f8c8dfbe0d7760acde8c7b7b",
        title: "8个JavaScript代码片段",
        filePath: "/blogs/article/",
        date: "2021/10/23 下午6:03:09",
        description: "8个JavaScript代码片段@@@@@@## 获取文件后缀名@@@使用场景：上传文件判断后缀名@@@",
        outline: ["## 获取文件后缀名","## 复制内容到剪贴板","## 休眠多少毫秒","## 生成随机字符串","## 简单的深拷贝","## 数组去重","## 对象转化为FormData对象","## 保留到小数点以后n位"],
      },{
        hash: "5e11f13d369db73c0cf9d848115a6a03563ad502",
        fileName: "68f85cdeb258a15044b3236917b43f46344439e6",
        title: "Event Loop - 事件循环详解",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 事件循环@@@  @@@事件循环的本质就是JavaScript引擎在 **等待任务**、**执行任务**、**进入休眠状态等待更多任务**这几个状态之间转换的无限循环。@@@@@@> 出现任务 —— 引擎处理它们 —— 等待更多任务（即休眠，几乎不消耗 CPU 资源）—— 出现新的任务",
        outline: ["## 事件循环","## 浏览器中的宏任务","## 浏览器中的微任务","## 总结 & 补充"],
      },{
        hash: "7c3e158bc1801f229b1772e7b2814417b3d29352",
        fileName: "01314109be59f26a60126c86b50940a7ace8e1ae",
        title: "GC-垃圾回收机制",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 垃圾回收@@@@@@  c一类的语言拥有底层的内存管理原语`malloc()`和`free()`，@@@  而像javascript这样的高级语言，会自动释放内存，这一过程就是**内存垃圾回收**@@@  ",
        outline: ["## 垃圾回收","## 内存生命周期","## JavaScript 中的分配内存","## JavaScript 中的使用内存","## JavaScript 中的释放内存","## 万物都有其两面性","## 四种常见的javascript内存泄露","## 管理内存的方式"],
      },{
        hash: "a7aae09ef121b027b2f13f2a3bb8f8d33b399252",
        fileName: "b1033978ebd32f49f8b4a6f46e4ca7c8689f71f8",
        title: "html渲染原理及其优化思路",
        filePath: "/blogs/article/",
        date: "2021/10/7 下午3:19:22",
        description: "## HTML的解析过程@@@@@@![7tz9q1ngpp](assets/7tz9q1ngpp/../7tz9q1ngpp.jpg)@@@@@@网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型，比如 content-type 的值是“text/html”，那么浏览器就会判断这是一个 HTML 类型的文件，然后为该请求选择或者创建一个渲染进程，渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据“喂”给 HTML 解析器。你可以把这个管道想象成一个“水管”，网络进程接收到的字节流像水一样倒进这个“水管”，而“水管”的另外一端是渲染进程的 HTML 解析器，它会动态接收字节流，并将其解析为 DOM。如下图",
        outline: ["## HTML的解析过程","### dom的解析","### CSS的解析","### 渲染树","#### 渲染步骤","###  回流与重绘","#### reflow与repaint的时机","### CSS的渲染阻塞","## 关键渲染路径","### 关键路径渲染和阻塞渲染","### css具体如何阻塞资源的","### JavaScript具体如何阻塞资源的","### 改变脚本加载次序defer与async","## 优化的思路","## 排查优化点、衡量网站的性能的方法","## 补充&概念","## 整体大纲"],
      },{
        hash: "30c66611bd5220833f9d4515305b9072c5310ce9",
        fileName: "2eb8add3da46383c06f244240c573a2584e75229",
        title: "HTTP的缓存策略",
        filePath: "/blogs/article/",
        date: "2021/11/14 上午12:34:37",
        description: "## http1.0 使用强制缓存@@@@@@expires 强制缓存，单位是毫秒，如果客户端跟服务端时间不一致的情况下，会出现bug，前台无法感知@@@@@@```javascript",
        outline: ["## http1.0 使用强制缓存","## http1.1 使用强制缓存与协商缓存"],
      },{
        hash: "94a61599773f2e2be83c2902f677dc59ad58afe1",
        fileName: "e553ea06471fe07060b076f880662ac13bf35766",
        title: "react远程组件事件",
        filePath: "/blogs/article/",
        date: "2021/12/18 下午12:21:21",
        description: "## react项目加载远程组件@@@@@@  react项目使用远程组件的解决方案，可用来做微前端架构，也可用来解决部分模块的多端公用问题。@@@@@@  目前，我把远程加载组件技术用来解决公司多端使用，且需求易变的功能模块，需多端处理+上线的问题。",
        outline: ["## react项目加载远程组件","## 原理","## 流程","## 打包组件示例","## 远程组件使用示例","## 更多"],
      },{
        hash: "5d5442986ec2ea250227324cb9e0682881147996",
        fileName: "8ade966aa30edb50a36c20f7cbfdeda1d902c914",
        title: "v8引擎执行机制",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 引擎执行机制@@@@@@  SourceCode -> Abstract Syntax Tree -> Bytecode -> Binary@@@@@@  引擎中通常拥有parser（解析器）、Ignition（解释器）、TurboFan（编译器）、GC(垃圾回收器)",
        outline: ["## 引擎执行机制","## Parser 和 Pre-Parser"],
      },{
        hash: "1e18b8542e6cad31e784789ee739cae101b797fe",
        fileName: "7b4b998cd2db77a3542d94dc2820f06c4ea5aaa6",
        title: "windows系统盘空间优化",
        filePath: "/blogs/article/",
        date: "2021/11/14 上午12:33:02",
        description: "常见的winowsC盘清理方式，一般就是如下几种@@@	1. 第三方工具@@@	2. 磁盘清理@@@	3. C盘扩容@@@	4. 换个硬盘",
        outline: ["## （link）软连接！","## 重点：此方法是可以重复使用的，C盘永远不怕满了。"],
      },{
        hash: "9ceb6545d00595d657e960bd83c44053cace3f01",
        fileName: "e18e36287ec8d3f5886372b367953c0570a258fa",
        title: "前端模块化的前世今生",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 前端为什么要用模块@@@@@@* 减少全局变量，有效避免命名污染@@@* 更好的分离和按需加载@@@* 提高复用性和可维护性",
        outline: ["## 前端为什么要用模块","## 模块之初","### 定义各种各样的全局函数","### 使用命名空间 ","### 使用自执行函数（闭包）","### 使用自执行函数添加参数（添加依赖）","### 以上定义模块的方式，有缺陷","## CommonJS","## AMD","## CMD","## es6模块","## ESM 与 CommonJS区别","## 总结"],
      },{
        hash: "46a8a514f2075791250cd8391191b6671fae3f1f",
        fileName: "3f1d9f52f42f367b46fdd80475363d138abdd4bb",
        title: "前端监控方案",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 前端监控方案@@@@@@下面两个API配合使用，收集大部分错误信息@@@@@@  * `window.addEventListener('error')`",
        outline: ["## 前端监控方案","## react内置监控方案"],
      },{
        hash: "a81d0a671ff38d7bb99af7b21aa289d2a4a1c405",
        fileName: "6c2bc4ffbc7f92ab2a23ae31f3a14b5a06f61e4c",
        title: "堆空间和栈空间",
        filePath: "/blogs/article/",
        date: "2021/10/11 下午2:13:37",
        description: "## js的内存空间@@@@@@在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。@@@![7tz9q1ngpp](assets/4.png)@@@",
        outline: ["## js的内存空间","## 栈空间和堆空间","## 又是闭包"],
      },{
        hash: "be8b87c706ad9efe185699f8c2d4f4093c6b47c0",
        fileName: "3dae20f9d98bb4462216dd64e4c14c262a65d7bb",
        title: "对称加密与非对称加密",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "## 对称加密@@@@@@在对称加密算法中，加密和解密使用的**密钥是相同的**。加密和解密使用的是同一个密钥。@@@@@@优点：算法公开，计算量小，加密速度快，效率高。",
        outline: ["## 对称加密","## 非对称加密","## 总结","## https"],
      },{
        hash: "b27dffe3d9efc59c5bc620eae4489ac05fe51c31",
        fileName: "ff707b7508601b5f1e74f1eab53d102ca2bd8525",
        title: "解释型语言与编译型语言",
        filePath: "/blogs/article/",
        date: "2021/10/4 下午1:34:25",
        description: "# 解释型语言与编译型语言概念与对比@@@@@@## 编译执行（直接执行）@@@@@@> c语言使用命令行 `gcc x.c` 编译出a.out文件，然后执行 `./a.out`即可运行，这是编译执行，编译后的文件可以直接执行",
        outline: ["# 解释型语言与编译型语言概念与对比","## 编译执行（直接执行）","## 解释执行","## 对比"],
      }]

export default article
