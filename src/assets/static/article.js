
const article = [{
        hash: "a8c0e4413cba42b2e24337af64a24dde4a80c782",
        fileName: "2eb8add3da46383c06f244240c573a2584e75229",
        title: "HTTP的缓存策略",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## http1.0 使用强制缓存@@@@@@expires 强制缓存，单位是毫秒，如果客户端跟服务端时间不一致的情况下，会出现bug，前台无法感知@@@@@@```javascript@@@  // http 1.0 强制缓存方案，单位毫秒，如果客户端与服务端时间不一致就会出BUG@@@  res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())@@@```@@@",
        outline: ["## http1.0 使用强制缓存","## http1.1 使用强制缓存与协商缓存","## 缓存使用决策","## Cache-Control示例"],
      },{
        hash: "104d5b091578cd0a6f9f9313beaa20f7b46fca7c",
        fileName: "f6601ec181fbc5a844cdf9f3273607b0308724c2",
        title: "nextTick与setImmediate",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## nextTick @@@  node中事件循环进行一次完整的行程时，我们都将其称为一个`tick`。@@@@@@  当将一个函数传给 `process.nextTick()` 时，则指示引擎在当前操作结束（在下一个事件循环tick开始之前）时调用此函数：@@@  @@@  ```js@@@    process.nextTick(() => {@@@      // todo...@@@    })@@@  ```@@@@@@  本质上，这是一个`插队操作`,它告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。@@@",
        outline: ["## nextTick ","## setImmediate","## nextTick与setImmediate与setTimeout"],
      },{
        hash: "3964a76e29e3b9501caec65f1677321114cd20e7",
        fileName: "8c19907dcd28f79c8dcc95ee62ce33ee134a250b",
        title: "Node与浏览器中的Event Loop",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## Event Loop@@@@@@Event Loop是什么？@@@@@@  * Event Loop是一个与用户程序在同一个线程上的单线程程序@@@  * Event Loop是驱动javascript程序执行的动力源@@@",
        outline: ["## Event Loop","## Node事件循环","## 浏览器事件循环","## 浏览器中的宏任务","## 浏览器中的微任务","## 总结 & 补充"],
      },{
        hash: "72d2f20f362f76e9357e6927df6ffdd388a28b88",
        fileName: "fdee962fd8f23992dcdff3c7f08787759acefef5",
        title: "webpack调优及项目分析",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## bundle analysis 打包分析@@@@@@  分析打包文件 @@@@@@  安装：`yarn add -D webpack-bundle-analyzer`@@@",
        outline: ["## bundle analysis 打包分析","## code coverage 代码覆盖率","## magic comments 魔法注释","## prefeching/preloading 预加载","## code splitting 代码分割","## lazy loading 懒加载(按需加载)","## uglifyjs-webpack-plugin","## unimport ","## useless-files-webpack-plugin","## 其他方式","## webpack打包Gizp","## 最后"],
      },{
        hash: "e184854edc9ac8cae380d42fec02d2b82821e8be",
        fileName: "461d64911a96bf21dfa6e87f6d44b22a516582dd",
        title: "《重构 改善既有代码的设计》",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## 什么是重构@@@这里先给重构下一个定义：改善既有代码的设计。@@@@@@具体来说就是在不改变代码功能行为的情况下，对其内部结构的一种调整。需要注意的是，重构不是代码优化，重构注重的是提高代码的可理解性与可扩展性，对性能的影响可好可坏。而性能优化则让程序运行的更快，当然，最终的代码可能更难理解和维护。@@@@@@## 为什么要重构@@@### 改善程序的内部设计@@@如果没有重构，在软件不停的版本迭代中，代码的设计只会越来越腐败，导致软件开发寸步难行。@@@",
        outline: ["## 什么是重构","## 为什么要重构","### 改善程序的内部设计","### 使得代码更容易理解","### 提高开发的速度 && 方便定位错误","## 重构的原则","### 保持当下的编程状态","### 可控制的重构","## 识别代码的臭味道","### 神秘命名","### 重复代码","### 过长函数","### 数据泥团 && 过长参数","### 全局数据","### 发散式变化","### 霰弹式修改","### for 循环语句","### 复杂的条件逻辑 && 合并条件表达式","### 查询函数与修改函数耦合","### 以卫语句(Guard Clauses)取代嵌套条件表达式","## 何时开始重构","### 添加新功能之前","### 完成新功能后或 code review 后","### 难以添加新功能的时候","## 什么时候不该重构","### 重写比重构容易","### 不需要理解该代码片段时","### 未与合作者商量时","## 重构与性能"],
      },{
        hash: "69f513ff6a71925058030977b564abe62f69fac5",
        fileName: "5b3d1c4b19bf4900089d95daf4eb8608886705b4",
        title: "值应该放在推上还是栈上？",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## 数据什么时候可以放在栈上，什么时候需要放在堆上@@@@@@印象中应该是：@@@  * 基本类型（primitive type）存储在栈上，对象存储在堆上；@@@  * 少量数据存储在栈上，大量的数据存储在堆上。@@@@@@这些虽然对，但并没有抓到实质。接下来我们深挖堆和栈的设计原理，看看它们到底是如何工作的。@@@",
        outline: ["## 数据什么时候可以放在栈上，什么时候需要放在堆上","## 栈","### 放栈上的问题","## 推","### 放堆上的问题","## GC、ARC 如何解决","## 小结"],
      },{
        hash: "75609e6b63e7a13b634c70ff92445fb83dadd046",
        fileName: "6c2bc4ffbc7f92ab2a23ae31f3a14b5a06f61e4c",
        title: "堆空间和栈空间",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## js的内存空间@@@@@@在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。@@@@@@其中的代码空间主要是存储可执行代码的，栈空间用来管理调用逻辑，堆空间用来在执行过程中管理内存@@@",
        outline: ["## js的内存空间","## 栈空间和堆空间","## 又是闭包"],
      },{
        hash: "a5b584e29683a227014e72e978260864b6cccb74",
        fileName: "ff707b7508601b5f1e74f1eab53d102ca2bd8525",
        title: "解释型语言与编译型语言",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "# 解释型语言与编译型语言概念与对比@@@@@@## 编译执行（直接执行）@@@@@@> c语言使用命令行 `gcc x.c` 编译出a.out文件，然后执行 `./a.out`即可运行，这是编译执行，编译后的文件可以直接执行@@@",
        outline: ["# 解释型语言与编译型语言概念与对比","## 编译执行（直接执行）","## 解释执行","## 对比"],
      },{
        hash: "6b17cdbbfcc4b8a9b274bdea4b8c0a37cabadf0a",
        fileName: "b1033978ebd32f49f8b4a6f46e4ca7c8689f71f8",
        title: "html渲染原理及其优化思路",
        filePath: "/blogs/article/",
        date: "Thu Dec 30 2021 15:16:06 GMT+0800 (中国标准时间)",
        description: "## HTML的解析过程@@@@@@![7tz9q1ngpp](assets/7tz9q1ngpp.webp)@@@@@@网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型，比如 content-type 的值是\"text/html\"，那么浏览器就会判断这是一个 HTML 类型的文件，然后为该请求选择或者创建一个渲染进程，渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据\"喂\"给 HTML 解析器。你可以把这个管道想象成一个\"水管\"，网络进程接收到的字节流像水一样倒进这个\"水管\"，而\"水管\"的另外一端是渲染进程的 HTML 解析器，它会动态接收字节流，并将其解析为 DOM。如下图@@@",
        outline: ["## HTML的解析过程","### dom的解析","### CSS的解析","### 渲染树","#### 渲染步骤","###  回流与重绘","#### reflow与repaint的时机","### CSS的渲染阻塞","## 关键渲染路径","### 关键路径渲染和阻塞渲染","### css具体如何阻塞资源的","### JavaScript具体如何阻塞资源的","### 改变脚本加载次序defer与async","## 图片的对决","## 优化的思路","## 排查优化点、衡量网站的性能的方法","## 补充&概念","## Google提出了网站用户体验的三大核心指标","## Google提出的RAIL指标","## 补充指标优化方法","## 整体大纲"],
      },{
        hash: "bd681f9c5c6dac29aabfc58870e2c442acd92766",
        fileName: "659ab64bf80576344bc780a7a88dc0bc7b34e127",
        title: "react远程组件实践",
        filePath: "/blogs/article/",
        date: "Fri Dec 24 2021 15:52:02 GMT+0800 (中国标准时间)",
        description: "## react项目加载远程组件@@@@@@  远程加载组件技术我用来解决某些功能模块**多项目**使用，且**需求易变**的问题。@@@@@@## 原理@@@  核心逻辑为元编程的概念，webpack打包后的js在运行时的react项目中，可使用**eval**来直接执行，以此来获得一个组件@@@",
        outline: ["## react项目加载远程组件","## 原理","## 流程","## umd打包模式","### 打包组件示例","### 远程组件使用示例","## amd打包模式","### 打包组件示例","### 远程组件使用示例","## 更多"],
      },{
        hash: "8658f3d9e3baf8681e90e3b9edc12bc73566e504",
        fileName: "7b4b998cd2db77a3542d94dc2820f06c4ea5aaa6",
        title: "windows系统盘空间优化",
        filePath: "/blogs/article/",
        date: "Fri Dec 24 2021 09:14:26 GMT+0800 (中国标准时间)",
        description: "## 常见方式@@@常见的winowsC盘清理方式，一般就是如下几种@@@1. 第三方工具@@@2. 磁盘清理@@@3. C盘扩容@@@4. 换个硬盘 - 土豪@@@@@@但是，这几种办法也都有各自的问题@@@@@@* 第三方工具，可靠性存疑，万一出问题你人都傻了，而且三方工具也只是其他方式的傻瓜化执行而已@@@* 磁盘清理实际上能清理出来的空间是及其有限的@@@* 扩容无法应用在固态硬盘作为系统盘的问题@@@* 土豪换硬盘需要重装系统，无需重装系统的方式又过于麻烦@@@",
        outline: ["## 常见方式","## （link）软连接！"],
      },{
        hash: "5d5442986ec2ea250227324cb9e0682881147996",
        fileName: "8ade966aa30edb50a36c20f7cbfdeda1d902c914",
        title: "v8引擎执行机制",
        filePath: "/blogs/article/",
        date: "Wed Oct 13 2021 15:43:38 GMT+0800 (中国标准时间)",
        description: "## 引擎执行机制@@@@@@  SourceCode -> Abstract Syntax Tree -> Bytecode -> Binary@@@@@@  引擎中通常拥有parser（解析器）、Ignition（解释器）、TurboFan（编译器）、GC(垃圾回收器)@@@  @@@  词法分析: source -> token@@@",
        outline: ["## 引擎执行机制","## Parser 和 Pre-Parser"],
      },{
        hash: "9ceb6545d00595d657e960bd83c44053cace3f01",
        fileName: "e18e36287ec8d3f5886372b367953c0570a258fa",
        title: "前端模块化的前世今生",
        filePath: "/blogs/article/",
        date: "Mon Oct 11 2021 14:47:51 GMT+0800 (中国标准时间)",
        description: "## 前端为什么要用模块@@@@@@* 减少全局变量，有效避免命名污染@@@* 更好的分离和按需加载@@@* 提高复用性和可维护性@@@@@@## 模块之初@@@",
        outline: ["## 前端为什么要用模块","## 模块之初","### 定义各种各样的全局函数","### 使用命名空间 ","### 使用自执行函数（闭包）","### 使用自执行函数添加参数（添加依赖）","### 以上定义模块的方式，有缺陷","## CommonJS","## AMD","## CMD","## es6模块","## ESM 与 CommonJS区别","## 总结"],
      },{
        hash: "46a8a514f2075791250cd8391191b6671fae3f1f",
        fileName: "3f1d9f52f42f367b46fdd80475363d138abdd4bb",
        title: "前端监控方案",
        filePath: "/blogs/article/",
        date: "Sat Oct 09 2021 17:50:26 GMT+0800 (中国标准时间)",
        description: "## 前端监控方案@@@@@@下面两个API配合使用，收集大部分错误信息@@@@@@  * `window.addEventListener('error')`@@@    * error 可以监听所有同步、异步的运行时错误，但无法监听语法、接口、资源加载错误。@@@",
        outline: ["## 前端监控方案","## react内置监控方案"],
      },{
        hash: "7c3e158bc1801f229b1772e7b2814417b3d29352",
        fileName: "01314109be59f26a60126c86b50940a7ace8e1ae",
        title: "GC-垃圾回收机制",
        filePath: "/blogs/article/",
        date: "Thu Oct 07 2021 15:49:44 GMT+0800 (中国标准时间)",
        description: "## 垃圾回收@@@@@@  c一类的语言拥有底层的内存管理原语`malloc()`和`free()`，@@@  而像javascript这样的高级语言，会自动释放内存，这一过程就是**内存垃圾回收**@@@  @@@  > 虽然我们有自动的垃圾回收机制，依然会有内存管理的问题，例如内存泄露等@@@@@@## 内存生命周期@@@",
        outline: ["## 垃圾回收","## 内存生命周期","## JavaScript 中的分配内存","## JavaScript 中的使用内存","## JavaScript 中的释放内存","## 万物都有其两面性","## 四种常见的javascript内存泄露","## 管理内存的方式"],
      },{
        hash: "be8b87c706ad9efe185699f8c2d4f4093c6b47c0",
        fileName: "3dae20f9d98bb4462216dd64e4c14c262a65d7bb",
        title: "对称加密与非对称加密",
        filePath: "/blogs/article/",
        date: "Sun Sep 26 2021 10:12:32 GMT+0800 (中国标准时间)",
        description: "## 对称加密@@@@@@在对称加密算法中，加密和解密使用的**密钥是相同的**。加密和解密使用的是同一个密钥。@@@@@@优点：算法公开，计算量小，加密速度快，效率高。@@@",
        outline: ["## 对称加密","## 非对称加密","## 总结","## https"],
      }]

export default article
