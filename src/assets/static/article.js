
const article = [{
        hash: "0d676fa0ee782a133d80e2ec8fce9f5c8f55a912",
        fileName: "1ed9cee2e0f9de2ba55fc11dac16ffcf68a46cb4",
        title: "react-17.0.2-useState",
        filePath: "/blogs/article/",
        date: "Sun Apr 17 2022 14:18:47 GMT+0800 (中国标准时间)",
        description: "## useState@@@@@@使用useState是为了让函数式组件中有状态可用，所有state(状态)都被视为不可变的。@@@@@@hooks 只能在**函数式组件的顶层**或者在**自定义hook**中调用。@@@",
        outline: ["## useState","### 哪些属性才是状态","## state编写的原则","### 合并相关状态","### 避免状态矛盾","### 避免状态冗余","### 避免状态重复","## 避免状态深度嵌套","### immer","## useState常见问题及解决方案"],
      },{
        hash: "c2dc28b2b9d650f83895ee96d6d9cb8473e0db1c",
        fileName: "62950158fe12d0535c8f074aac713f2d24ca27b5",
        title: "react-17.0.2-useEffect",
        filePath: "/blogs/article/",
        date: "Sat Apr 16 2022 10:54:19 GMT+0800 (中国标准时间)",
        description: "## useEffect@@@@@@## 依赖报警问题与解决方案@@@@@@以下几种情形会被react内置的eslint规则提出警告:`React Hook useEffect has a missing dependency: ''. Either include it or remove the dependency array`，而通常我们解决方案都是从思考**此处使用state的原因是什么？**开始：@@@",
        outline: ["## useEffect","## 依赖报警问题与解决方案"],
      },{
        hash: "efbd66b4a2453b073da0409d8358f1d8f38e47fe",
        fileName: "9a3b417b54e7d13d4958d8ca0e9dfd60b24b4e9b",
        title: "react-17.0.2-组件化原则",
        filePath: "/blogs/article/",
        date: "Sat Apr 16 2022 10:54:19 GMT+0800 (中国标准时间)",
        description: "## react组件化@@@@@@> 这个组件化划分的方式是根据我的经验以及我的知识体系总结出的结论，并非组件化铁律。@@@@@@首先排除一个误区：组件分类曾经被普遍分为：展示组件，容器组件。 国内也提出过智能组件，木偶组件其实是一样的东西，换了个名字而已@@@",
        outline: ["## react组件化","## 搭积木","## 实现搜索功能组件","## 官方示例解读","## 补充"],
      },{
        hash: "87fe563287d4305ff8c8333abe2a741d8f879af5",
        fileName: "aae0d5877a8c4f53b5f27b3f115c601199414979",
        title: "react数据传递的几种方式",
        filePath: "/blogs/article/",
        date: "Sat Apr 16 2022 10:54:19 GMT+0800 (中国标准时间)",
        description: "## react的数据传递的几种方式@@@@@@@@@React 是单向数据流的，禁止从子组件往父组件传数据！@@@",
        outline: ["## react的数据传递的几种方式"],
      },{
        hash: "a9b324d681122676778a17c179244a9949b8cbe7",
        fileName: "c8c5e9db545c1c29709dea5349775be9d6ff3f9e",
        title: "javascript中的unicode",
        filePath: "/blogs/article/",
        date: "Tue Apr 05 2022 20:26:52 GMT+0800 (中国标准时间)",
        description: "## ASCII@@@@@@最基础的编码，是由美国人定义的，他们用1字节（8位）来定义他们使用的所有字符@@@@@@由于英文就26个字母，256（2^8）个映射位足矣标识所有字符@@@",
        outline: ["## ASCII","## unicode ","### utf32","### utf8","### utf16","## JavaScript使用哪一种编码？","### UCS-2编码","### JavaScript字符函数的局限","## ES6"],
      },{
        hash: "8b2477af5553dc6c5b4ba12d5d73dad0ba632bcf",
        fileName: "6469519068f37ac3e5996b01a296fae81d69ffb5",
        title: "前端博客没有webpack就很奇怪对么",
        filePath: "/blogs/article/",
        date: "Sat Feb 26 2022 15:18:37 GMT+0800 (中国标准时间)",
        description: "## webpack的基础概念@@@@@@### entry@@@- 打包文件的入口，会以此入口文件开始，把相关联的文件全部打包@@@- 可以设置多个@@@@@@### output@@@- 打包文件的输出路径@@@",
        outline: ["## webpack的基础概念","### entry","### output","### loader ","### plugins","### .npmrc文件,配置项目统一使用源","### webpack 环境搭建","### webpack 启动  ","### weboack 配置文件","##### webpack 配置文件改名,自定义配置文件名","##### entry(入口)、output(出口)","##### mode(打包模式)","##### loader(扩展支持模块)","##### plugin(插件,功能扩展)","##### module(模块)","##### chunk(代码块)","##### bundle","##### bundle与chunk的关系","##### 配置webpack使用的loader的路径","### 多页面打包通用方案","### sourceMap ","## 优化方案","## webpack拆包，拆到多少算合适？","## wabpack hash指纹策略 ","### hash","### chunkhash","### contenthash","## 与其他打包工具的差异性","### Rollup","### vite - rollup - webpack ","## 更多"],
      },{
        hash: "6b17cdbbfcc4b8a9b274bdea4b8c0a37cabadf0a",
        fileName: "b1033978ebd32f49f8b4a6f46e4ca7c8689f71f8",
        title: "html渲染原理及其优化思路",
        filePath: "/blogs/article/",
        date: "Fri Feb 25 2022 21:14:26 GMT+0800 (中国标准时间)",
        description: "## HTML的解析过程@@@@@@![7tz9q1ngpp](assets/7tz9q1ngpp.webp)@@@@@@网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型，比如 content-type 的值是\"text/html\"，那么浏览器就会判断这是一个 HTML 类型的文件，然后为该请求选择或者创建一个渲染进程，渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据\"喂\"给 HTML 解析器。你可以把这个管道想象成一个\"水管\"，网络进程接收到的字节流像水一样倒进这个\"水管\"，而\"水管\"的另外一端是渲染进程的 HTML 解析器，它会动态接收字节流，并将其解析为 DOM。如下图@@@",
        outline: ["## HTML的解析过程","### dom的解析","### CSS的解析","### 渲染树","#### 渲染步骤","###  回流与重绘","#### reflow与repaint的时机","### CSS的渲染阻塞","## 关键渲染路径","### 关键路径渲染和阻塞渲染","### css具体如何阻塞资源的","### JavaScript具体如何阻塞资源的","### 改变脚本加载次序defer与async","## 图片的对决","## 优化的思路","## 排查优化点、衡量网站的性能的方法","## 补充&概念","## Google提出了网站用户体验的三大核心指标","## Google提出的RAIL指标","## 补充指标优化方法","## 整体大纲"],
      },{
        hash: "e184854edc9ac8cae380d42fec02d2b82821e8be",
        fileName: "461d64911a96bf21dfa6e87f6d44b22a516582dd",
        title: "《重构 改善既有代码的设计》",
        filePath: "/blogs/article/",
        date: "Fri Feb 25 2022 21:14:19 GMT+0800 (中国标准时间)",
        description: "## 什么是重构@@@这里先给重构下一个定义：改善既有代码的设计。@@@@@@具体来说就是在不改变代码功能行为的情况下，对其内部结构的一种调整。需要注意的是，重构不是代码优化，重构注重的是提高代码的可理解性与可扩展性，对性能的影响可好可坏。而性能优化则让程序运行的更快，当然，最终的代码可能更难理解和维护。@@@@@@## 为什么要重构@@@### 改善程序的内部设计@@@如果没有重构，在软件不停的版本迭代中，代码的设计只会越来越腐败，导致软件开发寸步难行。@@@",
        outline: ["## 什么是重构","## 为什么要重构","### 改善程序的内部设计","### 使得代码更容易理解","### 提高开发的速度 && 方便定位错误","## 重构的原则","### 保持当下的编程状态","### 可控制的重构","## 识别代码的臭味道","### 神秘命名","### 重复代码","### 过长函数","### 数据泥团 && 过长参数","### 全局数据","### 发散式变化","### 霰弹式修改","### for 循环语句","### 复杂的条件逻辑 && 合并条件表达式","### 查询函数与修改函数耦合","### 以卫语句(Guard Clauses)取代嵌套条件表达式","## 何时开始重构","### 添加新功能之前","### 完成新功能后或 code review 后","### 难以添加新功能的时候","## 什么时候不该重构","### 重写比重构容易","### 不需要理解该代码片段时","### 未与合作者商量时","## 重构与性能"],
      },{
        hash: "fc66e67420ce88e42386dab4111d4150d6ef0162",
        fileName: "2835013a00426e53b65ee10af3800ab91cba38e6",
        title: "Rust-2.结构体",
        filePath: "/blogs/article/",
        date: "Fri Feb 25 2022 21:13:54 GMT+0800 (中国标准时间)",
        description: "# 第5章 chapter 5@@@@@@## struct 结构体@@@  定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。在大括号中，定义每一部分数据的名字和类型，我们称为 **字段（field）**。@@@@@@```rust@@@  struct User {@@@    username: String,@@@    email: String,@@@    sign_in_count: u64,@@@    active: bool,@@@  }@@@",
        outline: ["# 第5章 chapter 5","## struct 结构体","## 结构体更新语法（struct update syntax）","## 元组结构体（tuple structs）","## 类单元结构体（unit-like structs）","## 打印结构体","## 方法语义","### 方法可与字段重名","## 关联函数（associated functions）","## 更多"],
      },{
        hash: "2e8b2f101547786be8003ff129758e05b0447587",
        fileName: "05ae83d3f00a161a4b90e6c5a065c46f02405de3",
        title: "Rust-3.枚举与模式匹配",
        filePath: "/blogs/article/",
        date: "Fri Feb 25 2022 21:13:52 GMT+0800 (中国标准时间)",
        description: "# 第6章 chapter 6@@@@@@## 枚举 enumerations@@@@@@枚举（enumerations），也被称作 enums。枚举允许你通过列举可能的 成员（variants） 来定义一个类型。@@@",
        outline: ["# 第6章 chapter 6","## 枚举 enumerations","## 定义枚举","### 枚举可以被定义值","### 枚举可以使用impl","## Option","## match控制流运算符","### 匹配option<T>","### 通配模式和 _ 占位符","## if let 简洁控制流","## 更多"],
      },{
        hash: "311ccbb68e11a34d260e9be95cef95898f03d37f",
        fileName: "113ec85a07ef4951ba8871d23def556ad5ef7d98",
        title: "chrome控制台使用",
        filePath: "/blogs/article/",
        date: "Mon Jan 24 2022 22:09:07 GMT+0800 (中国标准时间)",
        description: "@@@## 预览请求的时间分解@@@@@@时序故障阶段解释@@@",
        outline: ["## 预览请求的时间分解"],
      },{
        hash: "331a783653e404ce43643364b5131b2bf334491f",
        fileName: "12140bd1794a63a9aef266096097ec807670672b",
        title: "Rust-1.Rust中的基础概念",
        filePath: "/blogs/article/",
        date: "Sun Jan 23 2022 18:45:06 GMT+0800 (中国标准时间)",
        description: "# 第1-3章 chapter 1-3@@@@@@## 安装@@@@@@  linux 或者 macos 执行如下代码：@@@",
        outline: ["# 第1-3章 chapter 1-3","## 安装","## rustc 和 cargo","## 变量可变性","## 数据类型","## 函数","## 表达式","## 控制流 control flow","# 第4章 chapter 4","## 所有权 （ownership）","## 引用和借用","## Slice类型"],
      },{
        hash: "867034e7c716f581fa6d2e7d3e563f4538e5e153",
        fileName: "6c2bc4ffbc7f92ab2a23ae31f3a14b5a06f61e4c",
        title: "堆空间和栈空间",
        filePath: "/blogs/article/",
        date: "Sun Jan 16 2022 19:11:36 GMT+0800 (中国标准时间)",
        description: "## js的内存空间@@@@@@在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。@@@@@@其中的代码空间主要是存储可执行代码的，栈空间用来管理调用逻辑，堆空间用来在执行过程中管理内存@@@",
        outline: ["## js的内存空间","## 栈空间和堆空间","## 又是闭包","## 栈（Stack）与堆（Heap）"],
      },{
        hash: "a8c0e4413cba42b2e24337af64a24dde4a80c782",
        fileName: "2eb8add3da46383c06f244240c573a2584e75229",
        title: "HTTP的缓存策略",
        filePath: "/blogs/article/",
        date: "Fri Jan 14 2022 22:37:39 GMT+0800 (中国标准时间)",
        description: "## http1.0 使用强制缓存@@@@@@expires 强制缓存，单位是毫秒，如果客户端跟服务端时间不一致的情况下，会出现bug，前台无法感知@@@@@@```javascript@@@  // http 1.0 强制缓存方案，单位毫秒，如果客户端与服务端时间不一致就会出BUG@@@  res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())@@@```@@@",
        outline: ["## http1.0 使用强制缓存","## http1.1 使用强制缓存与协商缓存","## 缓存使用决策","## Cache-Control示例"],
      },{
        hash: "104d5b091578cd0a6f9f9313beaa20f7b46fca7c",
        fileName: "f6601ec181fbc5a844cdf9f3273607b0308724c2",
        title: "nextTick与setImmediate",
        filePath: "/blogs/article/",
        date: "Fri Jan 14 2022 22:37:37 GMT+0800 (中国标准时间)",
        description: "## nextTick @@@  node中事件循环进行一次完整的行程时，我们都将其称为一个`tick`。@@@@@@  当将一个函数传给 `process.nextTick()` 时，则指示引擎在当前操作结束（在下一个事件循环tick开始之前）时调用此函数：@@@  @@@  ```js@@@    process.nextTick(() => {@@@      // todo...@@@    })@@@  ```@@@@@@  本质上，这是一个`插队操作`,它告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。@@@",
        outline: ["## nextTick ","## setImmediate","## nextTick与setImmediate与setTimeout"],
      },{
        hash: "3964a76e29e3b9501caec65f1677321114cd20e7",
        fileName: "8c19907dcd28f79c8dcc95ee62ce33ee134a250b",
        title: "Node与浏览器中的Event Loop",
        filePath: "/blogs/article/",
        date: "Mon Jan 03 2022 08:37:48 GMT+0800 (中国标准时间)",
        description: "## Event Loop@@@@@@Event Loop是什么？@@@@@@  * Event Loop是一个与用户程序在同一个线程上的单线程程序@@@  * Event Loop是驱动javascript程序执行的动力源@@@",
        outline: ["## Event Loop","## Node事件循环","## 浏览器事件循环","## 浏览器中的宏任务","## 浏览器中的微任务","## 总结 & 补充"],
      },{
        hash: "9ceb6545d00595d657e960bd83c44053cace3f01",
        fileName: "e18e36287ec8d3f5886372b367953c0570a258fa",
        title: "前端模块化的前世今生",
        filePath: "/blogs/article/",
        date: "Sat Jan 01 2022 22:45:05 GMT+0800 (中国标准时间)",
        description: "## 前端为什么要用模块@@@@@@* 减少全局变量，有效避免命名污染@@@* 更好的分离和按需加载@@@* 提高复用性和可维护性@@@@@@## 模块之初@@@",
        outline: ["## 前端为什么要用模块","## 模块之初","### 定义各种各样的全局函数","### 使用命名空间 ","### 使用自执行函数（闭包）","### 使用自执行函数添加参数（添加依赖）","### 以上定义模块的方式，有缺陷","## CommonJS","## AMD","## CMD","## es6模块","## ESM 与 CommonJS区别","## 总结"],
      },{
        hash: "69f513ff6a71925058030977b564abe62f69fac5",
        fileName: "5b3d1c4b19bf4900089d95daf4eb8608886705b4",
        title: "值应该放在推上还是栈上？",
        filePath: "/blogs/article/",
        date: "Sat Jan 01 2022 22:45:03 GMT+0800 (中国标准时间)",
        description: "## 数据什么时候可以放在栈上，什么时候需要放在堆上@@@@@@印象中应该是：@@@  * 基本类型（primitive type）存储在栈上，对象存储在堆上；@@@  * 少量数据存储在栈上，大量的数据存储在堆上。@@@@@@这些虽然对，但并没有抓到实质。接下来我们深挖堆和栈的设计原理，看看它们到底是如何工作的。@@@",
        outline: ["## 数据什么时候可以放在栈上，什么时候需要放在堆上","## 栈","### 放栈上的问题","## 推","### 放堆上的问题","## GC、ARC 如何解决","## 小结"],
      },{
        hash: "7c3e158bc1801f229b1772e7b2814417b3d29352",
        fileName: "01314109be59f26a60126c86b50940a7ace8e1ae",
        title: "GC-垃圾回收机制",
        filePath: "/blogs/article/",
        date: "Sat Jan 01 2022 22:45:02 GMT+0800 (中国标准时间)",
        description: "## 垃圾回收@@@@@@  c一类的语言拥有底层的内存管理原语`malloc()`和`free()`，@@@  而像javascript这样的高级语言，会自动释放内存，这一过程就是**内存垃圾回收**@@@  @@@  > 虽然我们有自动的垃圾回收机制，依然会有内存管理的问题，例如内存泄露等@@@@@@## 内存生命周期@@@",
        outline: ["## 垃圾回收","## 内存生命周期","## JavaScript 中的分配内存","## JavaScript 中的使用内存","## JavaScript 中的释放内存","## 万物都有其两面性","## 四种常见的javascript内存泄露","## 管理内存的方式"],
      },{
        hash: "72d2f20f362f76e9357e6927df6ffdd388a28b88",
        fileName: "fdee962fd8f23992dcdff3c7f08787759acefef5",
        title: "webpack调优及项目分析",
        filePath: "/blogs/article/",
        date: "Sat Jan 01 2022 22:44:52 GMT+0800 (中国标准时间)",
        description: "## bundle analysis 打包分析@@@@@@  分析打包文件 @@@@@@  安装：`yarn add -D webpack-bundle-analyzer`@@@",
        outline: ["## bundle analysis 打包分析","## code coverage 代码覆盖率","## magic comments 魔法注释","## prefeching/preloading 预加载","## code splitting 代码分割","## lazy loading 懒加载(按需加载)","## uglifyjs-webpack-plugin","## unimport ","## useless-files-webpack-plugin","## 其他方式","## webpack打包Gizp","## 最后"],
      },{
        hash: "a5b584e29683a227014e72e978260864b6cccb74",
        fileName: "ff707b7508601b5f1e74f1eab53d102ca2bd8525",
        title: "解释型语言与编译型语言",
        filePath: "/blogs/article/",
        date: "Sat Jan 01 2022 22:43:52 GMT+0800 (中国标准时间)",
        description: "# 解释型语言与编译型语言概念与对比@@@@@@## 编译执行（直接执行）@@@@@@> c语言使用命令行 `gcc x.c` 编译出a.out文件，然后执行 `./a.out`即可运行，这是编译执行，编译后的文件可以直接执行@@@",
        outline: ["# 解释型语言与编译型语言概念与对比","## 编译执行（直接执行）","## 解释执行","## 对比"],
      },{
        hash: "bd681f9c5c6dac29aabfc58870e2c442acd92766",
        fileName: "659ab64bf80576344bc780a7a88dc0bc7b34e127",
        title: "react远程组件实践",
        filePath: "/blogs/article/",
        date: "Sun Dec 26 2021 17:46:33 GMT+0800 (中国标准时间)",
        description: "## react项目加载远程组件@@@@@@  远程加载组件技术我用来解决某些功能模块**多项目**使用，且**需求易变**的问题。@@@@@@## 原理@@@  核心逻辑为元编程的概念，webpack打包后的js在运行时的react项目中，可使用**eval**来直接执行，以此来获得一个组件@@@",
        outline: ["## react项目加载远程组件","## 原理","## 流程","## umd打包模式","### 打包组件示例","### 远程组件使用示例","## amd打包模式","### 打包组件示例","### 远程组件使用示例","## 更多"],
      },{
        hash: "8658f3d9e3baf8681e90e3b9edc12bc73566e504",
        fileName: "7b4b998cd2db77a3542d94dc2820f06c4ea5aaa6",
        title: "windows系统盘空间优化",
        filePath: "/blogs/article/",
        date: "Thu Dec 23 2021 22:34:52 GMT+0800 (中国标准时间)",
        description: "## 常见方式@@@常见的winowsC盘清理方式，一般就是如下几种@@@1. 第三方工具@@@2. 磁盘清理@@@3. C盘扩容@@@4. 换个硬盘 - 土豪@@@@@@但是，这几种办法也都有各自的问题@@@@@@* 第三方工具，可靠性存疑，万一出问题你人都傻了，而且三方工具也只是其他方式的傻瓜化执行而已@@@* 磁盘清理实际上能清理出来的空间是及其有限的@@@* 扩容无法应用在固态硬盘作为系统盘的问题@@@* 土豪换硬盘需要重装系统，无需重装系统的方式又过于麻烦@@@",
        outline: ["## 常见方式","## （link）软连接！"],
      },{
        hash: "5d5442986ec2ea250227324cb9e0682881147996",
        fileName: "8ade966aa30edb50a36c20f7cbfdeda1d902c914",
        title: "v8引擎执行机制",
        filePath: "/blogs/article/",
        date: "Mon Dec 06 2021 22:29:46 GMT+0800 (中国标准时间)",
        description: "## 引擎执行机制@@@@@@  SourceCode -> Abstract Syntax Tree -> Bytecode -> Binary@@@@@@  引擎中通常拥有parser（解析器）、Ignition（解释器）、TurboFan（编译器）、GC(垃圾回收器)@@@  @@@  词法分析: source -> token@@@",
        outline: ["## 引擎执行机制","## Parser 和 Pre-Parser"],
      },{
        hash: "46a8a514f2075791250cd8391191b6671fae3f1f",
        fileName: "3f1d9f52f42f367b46fdd80475363d138abdd4bb",
        title: "前端监控方案",
        filePath: "/blogs/article/",
        date: "Mon Dec 06 2021 22:29:46 GMT+0800 (中国标准时间)",
        description: "## 前端监控方案@@@@@@下面两个API配合使用，收集大部分错误信息@@@@@@  * `window.addEventListener('error')`@@@    * error 可以监听所有同步、异步的运行时错误，但无法监听语法、接口、资源加载错误。@@@",
        outline: ["## 前端监控方案","## react内置监控方案"],
      },{
        hash: "be8b87c706ad9efe185699f8c2d4f4093c6b47c0",
        fileName: "3dae20f9d98bb4462216dd64e4c14c262a65d7bb",
        title: "对称加密与非对称加密",
        filePath: "/blogs/article/",
        date: "Mon Dec 06 2021 22:29:46 GMT+0800 (中国标准时间)",
        description: "## 对称加密@@@@@@在对称加密算法中，加密和解密使用的**密钥是相同的**。加密和解密使用的是同一个密钥。@@@@@@优点：算法公开，计算量小，加密速度快，效率高。@@@",
        outline: ["## 对称加密","## 非对称加密","## 总结","## https"],
      }]

export default article
