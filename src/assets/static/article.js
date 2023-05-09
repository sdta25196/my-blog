
const article = [{
        hash: "bf7ea8205f3304f76917aa7ba3b02cb2f951d75b",
        fileName: "87a1b88ffbc92a88883181791898d89cc0e00184",
        title: "学习之道",
        filePath: "/blogs/article/",
        date: "Tue May 09 2023 16:11:30 GMT+0800 (中国标准时间)",
        description: "# 学习之道@@@@@@Q：池塘里的藻每天繁殖，多久覆盖一半，多久全部覆盖？@@@@@@A：第29天覆盖一半，但第30天全部覆盖。@@@",
        outline: ["# 学习之道","## 学习为什么会放弃？","## 只是简单的1.01^365么？","## 学习之道"],
      },{
        hash: "4ce4c2708f1eefac06f58c81c25cd6df206b2d33",
        fileName: "c8c5e9db545c1c29709dea5349775be9d6ff3f9e",
        title: "javascript中的unicode",
        filePath: "/blogs/article/",
        date: "Fri Apr 28 2023 18:19:18 GMT+0800 (中国标准时间)",
        description: "## ASCII@@@@@@[ASCII](https://www.runoob.com/w3cnote/ascii.html)，最基础的编码，是由美国人定义的，他们用1字节（8位）来定义他们使用的所有字符@@@@@@由于英文就26个字母，256（2^8）个映射位足矣标识所有字符@@@",
        outline: ["## ASCII","## unicode ","### utf32","### utf8","### utf16","## JavaScript使用哪一种编码？","### UCS-2编码","### JavaScript字符函数的局限性","## ES6","## emoji的字符串拼接","## 补充"],
      },{
        hash: "89d5e680b4906056db38e0f1ccf28d9b5e140b36",
        fileName: "43f9becd1413571d0b359833ebc7f52f9d60dd6d",
        title: "javascript正则表达式中的贪婪匹配和惰性匹配",
        filePath: "/blogs/article/",
        date: "Fri Apr 14 2023 10:47:17 GMT+0800 (中国标准时间)",
        description: "## 正则表达式引擎，默认是贪婪模式@@@@@@先看下面这个正则：@@@@@@```js@@@let reg = /\".+\"/g;@@@ @@@let str = 'a \"witch\" and her \"broom\" is one';@@@ @@@console.log( str.match(reg) ); //\"witch\" and her \"broom\"@@@```@@@ @@@我们期望匹配两个双引号中的单词`\"witch\" `和`\"broom\"`，但实际上确实匹配到了`\"witch\" and her \"broom\"`@@@",
        outline: ["## 正则表达式引擎，默认是贪婪模式","## 开启惰性匹配","## 惰性匹配的替代方案","## 替代方案与惰性匹配分别的适用场景"],
      },{
        hash: "53b2a4a9251a7356b88604df46f592dfe7c1aaab",
        fileName: "581e08980bdd337da7d11c2607d162a04ea6de4a",
        title: "实现js异步任务队列",
        filePath: "/blogs/article/",
        date: "Fri Apr 14 2023 10:36:54 GMT+0800 (中国标准时间)",
        description: "## 使用队列实现一个异步任务依次执行@@@@@@先简单实现一个队列，利用队列 + Promise 来实现对任务的依次执行@@@@@@首先搞一个队列：@@@",
        outline: ["## 使用队列实现一个异步任务依次执行","## 使用普通for循环也可以简单实现"],
      },{
        hash: "87631dd6fb41d91d1777175a2bbe9dce58e649ea",
        fileName: "514371b5cdb9b3fe7e03e0c55ea73b63ba834f8a",
        title: "认识一下前端各种编码与转义符",
        filePath: "/blogs/article/",
        date: "Tue Apr 11 2023 10:06:52 GMT+0800 (中国标准时间)",
        description: "@@@## 认识一下前端各种编码与转义符@@@### html实体@@@`&、&#、&#x` html的转义符，叫做**html实体**；@@@例如：@@@* `&nbsp;` @@@* `&gt;`  @@@* `&#60 === $lt === &#x3c`（十进制60等于十六进制3c）；@@@@@@> 相关文档：[https://www.w3school.com.cn/charsets/ref_html_symbols.asp](https://www.w3school.com.cn/charsets/ref_html_symbols.asp)@@@",
        outline: ["## 认识一下前端各种编码与转义符","### html实体","### encode编码","### base64","### unicode","### 数字"],
      },{
        hash: "37d62d11b11edf7ad7ed4e5423c4bf4e7785d77e",
        fileName: "103bf0bc6087894b183e04e8e1f0a50096296ad5",
        title: "react-18-剩余Hooks概览",
        filePath: "/blogs/article/",
        date: "Tue Mar 28 2023 15:06:56 GMT+0800 (中国标准时间)",
        description: "## useDeferredValue@@@@@@useDeferredValue 用来获取上一次的状态值。可以用来优化渲染，例如切换状态造成UI改变的时间较长时。可以使用此hook保存旧的状态，来保证UI的渲染。@@@@@@```js@@@  const [a, setA] = useState(1)@@@  const olda = useDeferredValue(a)@@@  console.log(olda, a)    // 会渲染两次，一次 1 2。 一次 2 2。@@@  return (@@@    <div onClick={() => { setA(x => x + 1) }}>@@@    {a}@@@  </div>@@@  )@@@```@@@",
        outline: ["## useDeferredValue","## useId","## useImperativeHandle","## useInsertionEffect","## useLayoutEffect ","## useSyncExternalStore","## useTransition","## useRef","## useDebugValue","## useCallback ","## useMemo "],
      },{
        hash: "bc6d1d7fb8dd059e414f70cf6039f1cfa38f4b9f",
        fileName: "2338a7698e3beb6ed8000efeeed6ff7a47e21438",
        title: "react-18-flushSync",
        filePath: "/blogs/article/",
        date: "Mon Mar 06 2023 15:23:57 GMT+0800 (中国标准时间)",
        description: "## flushSync@@@@@@react 提供了一个可以同步刷新 DOM 的 API：`flushSync`。@@@@@@```js@@@  import { flushSync } from 'react-dom';@@@ @@@  flushSync(() => {@@@    setSomething(123);  // 任意的更新，此处的更新会同步执行。@@@  });@@@  //  到了这一行，dom已经更新完成@@@```@@@",
        outline: ["## flushSync","## 使用场景","## 示例"],
      },{
        hash: "08b3879188f8eb246bfdbf90405f2159d1ae635f",
        fileName: "3b56af5772d90ed82260b84847cf9e06d225e8c3",
        title: "react 动画组件实现-CSSTransition",
        filePath: "/blogs/article/",
        date: "Thu Mar 02 2023 14:07:10 GMT+0800 (中国标准时间)",
        description: "## react 动画组件实现@@@@@@复现了`Transition`组件后，继续复现`CSSTransition`,来实现通过class控制动画功能@@@@@@实现`onEnter`、`onEntering`、`onEntered`、`onExit`、`onExiting`、`onExited`，来分别控制dom的className。@@@",
        outline: ["## react 动画组件实现"],
      },{
        hash: "d0bc0210e8423577fea789d0399d7b1b6cd1568c",
        fileName: "ecbb7e5c401062e308b9815b09d8b3063c705a90",
        title: "react 动画组件实现-Transition",
        filePath: "/blogs/article/",
        date: "Thu Mar 02 2023 13:49:58 GMT+0800 (中国标准时间)",
        description: "## react 动画组件实现@@@@@@学习了`react-transition-group`源码之后，复现了一个`Transition`组件@@@@@@实现动画的核心逻辑其实很简单：**根据状态的变化，利用setTimeout设置不同的class，来实现组件的移动**@@@",
        outline: ["## react 动画组件实现"],
      },{
        hash: "80ddc7f2b5e99ea7b12b7f9a4b2c5b9220b84cbd",
        fileName: "1c03c82fd0143a0148387f3582fa9655553f6684",
        title: "react-18-Suspense",
        filePath: "/blogs/article/",
        date: "Wed Mar 01 2023 16:34:29 GMT+0800 (中国标准时间)",
        description: "@@@## Suspense@@@@@@Suspense 可以让我们的组件在**渲染之前\"等待\"某些东西**。@@@",
        outline: ["## Suspense","## 实现lazyLoad","## 实现fronLoad","### 两种方式的优缺点","## 解决竞态条件","## 补充lazy预渲染简单版本"],
      },{
        hash: "ae1eebaac9339be1deb9c422f4377962c041b815",
        fileName: "68899c661ac9df272ae0cb1fed27ac68e9fc2399",
        title: "react-18-useEffect",
        filePath: "/blogs/article/",
        date: "Wed Mar 01 2023 16:34:23 GMT+0800 (中国标准时间)",
        description: "## useEffect@@@@@@useState是用来在函数式组件中添加状态，而useEffect是用来处理函数组件中的副作用的。而react希望我们尽量把函数组件写成纯函数。@@@@@@先说纯函数：既：固定的输入，会得到固定的输出。@@@",
        outline: ["## useEffect","## useEffect返回函数, 依赖项数组","## useEffect的执行流程","## 关于useEffect中调用异步函数问题","## 依赖报警问题与解决方案","### useEffect批处理的bug","### useLayoutEffect","## Race condition","## 重点"],
      },{
        hash: "798173e61613c1acd470544234d9edb8fd1152da",
        fileName: "d4f8ba5092a60f82a03c7e9cc16bc08c7d8ce2cb",
        title: "react-18-useReducer",
        filePath: "/blogs/article/",
        date: "Wed Mar 01 2023 16:34:17 GMT+0800 (中国标准时间)",
        description: "## useReducer@@@@@@随着组件复杂性的增加，组件中会有事件处理程序都调用setState来更新状态，随着组件的增长，散布在其中的状态逻辑的数量也在增长。要一眼看到组件状态更新的所有不同方式可能会变得更加困难。@@@@@@为了减少这种复杂性并将所有逻辑放在一个易于访问的位置，可以将状态逻辑移到组件外部的单个函数中，我们称为`reducer`。@@@",
        outline: ["## useReducer","### 使用useReducer","### 使用useReducer可以绕过effect依赖检查","## 常见问题"],
      },{
        hash: "5d0cb4e76b4f742c73084980a43139725eb3d39f",
        fileName: "8c6f620859bed96ba86e7164e5acb6180ea18dd1",
        title: "react-18-useState",
        filePath: "/blogs/article/",
        date: "Wed Mar 01 2023 16:34:10 GMT+0800 (中国标准时间)",
        description: "## useState@@@@@@使用useState是为了让函数式组件中有状态可用，所有state(状态)都被视为不可变(Immutable)的。@@@@@@hooks 只能在**函数式组件的顶层**或者在**自定义hook**中调用。@@@",
        outline: ["## useState","### 哪些属性才是状态","## state编写的原则","### 合并相关状态","### 避免状态矛盾","### 避免状态冗余","### 避免状态重复","### 避免状态深度嵌套","## immer","## useState常见问题及解决方案"],
      },{
        hash: "2d22e3a88ad79930050a61af8d8d3fdd0d884b04",
        fileName: "ff497c98ce02005422c170cea7b23883b3c70cf9",
        title: "react-18-组件化原则",
        filePath: "/blogs/article/",
        date: "Wed Mar 01 2023 16:34:03 GMT+0800 (中国标准时间)",
        description: "## react组件化@@@@@@首先排除一个误区：组件分类曾经被普遍分为：展示组件，容器组件。 国内也提出过智能组件，木偶组件，其实都是一样的东西，换了个名字而已@@@@@@展示组件，容器组件的来源由dan在2015年发布的一篇博客中提出的这两个概念。但是到了2019年，他自己本身也认为这两个概念是错误的，这样划分组件是不对的。主要是因为hooks的出现完全改变了react的生态，也完全改变了react的写法。@@@",
        outline: ["## react组件化","## 关注点分离原则","## 最小知识原则","## 单一职责原则","## 受控组件、非受控组件 - 表单","## 搭积木","## 官方示例解读","## 代码示例","## antd对From模块的划分","## 补充"],
      },{
        hash: "83a5f70e7eeca7d5fe40359306fa4c781291f43c",
        fileName: "edf571242e2a57a2deb85050b1902c6fbfcb1552",
        title: "关于前端CSR、SSR、SSG、ISR、DPR",
        filePath: "/blogs/article/",
        date: "Mon Dec 05 2022 16:47:01 GMT+0800 (中国标准时间)",
        description: "## 关于前端CSR、SSR、SSG、ISR、DPR@@@@@@![7tz9q1ngpp](assets/csr.png)@@@@@@## CSR Client Side Rendering - 客户端渲染@@@",
        outline: ["## 关于前端CSR、SSR、SSG、ISR、DPR","## CSR Client Side Rendering - 客户端渲染","## SSR Server Side Rendering，服务端渲染","## SSG Static Site Generation，静态网站生成","## ISR Incremental Site Rendering，增量式的网站渲染","## DPR Distributed Persistent Rendering，分布式的持续渲染"],
      },{
        hash: "6c072da1e7c29cbe4878fe788c7727816e18b819",
        fileName: "52cf4b36a8805130b5a522a2eeb406905fa9b783",
        title: "javascript-责任链模式",
        filePath: "/blogs/article/",
        date: "Thu Dec 01 2022 17:58:28 GMT+0800 (中国标准时间)",
        description: "## javascript-责任链模式@@@@@@责任链模式就是把任务一级一级向下传，直到处理成功或者处理者全部失败为止。@@@@@@此处的示例功能为：多级会员制度，不同的会员年限，分配不同的会员优惠卡@@@",
        outline: ["## javascript-责任链模式"],
      },{
        hash: "df9378ebb6af73282b76060de34f9bb8d02334d5",
        fileName: "196ee1609f916eb06b16e29eb62ee8801d33de1d",
        title: "react状态传递的几种方式",
        filePath: "/blogs/article/",
        date: "Wed Nov 30 2022 09:28:07 GMT+0800 (中国标准时间)",
        description: "## react的状态传递的五种方式@@@@@@此篇讲解react中状态传递的五种方式，在这之前，我们要先明确一件事情，那就是React 是单向数据流的，所以原则上我们**禁止从子组件往父组件传状态**。@@@@@@如果有业务场景出现了子组件向父组件传递状态的场景，此时应当使用状态提升，也就是将状态放置在父组件中，传递给子组件，然后在子组件修改父组件的值。@@@",
        outline: ["## react的状态传递的五种方式","## props","## children","## context","## redux","## emit","## 总结"],
      },{
        hash: "11e5c8a6a382ef138a33c09c0d5acbea5ca0d6c6",
        fileName: "6fa024f27966ae0fee360ee698c2d257701919f3",
        title: "wasm介绍以及项目落地",
        filePath: "/blogs/article/",
        date: "Thu Nov 17 2022 18:15:16 GMT+0800 (中国标准时间)",
        description: "## wasm介绍以及项目落地@@@@@@此篇为wasm的介绍以及如何落地一个wasm项目，不涉及详细的rust编写@@@@@@Rust学习请移步[Rust 程序设计语言](https://doc.rust-lang.org/book/title-page.html)、[Rust 官方文档](https://www.rust-lang.org/zh-CN/)@@@",
        outline: ["## wasm介绍以及项目落地","## wasm简介","## wasm项目落地","### 安装wasm-pack","### 编写rust","### 打包wasm ","### 测试wasm","### 发布到npm"],
      },{
        hash: "e11ba303b08b9318cd42e2d018219e0046a472eb",
        fileName: "01314109be59f26a60126c86b50940a7ace8e1ae",
        title: "GC-垃圾回收机制",
        filePath: "/blogs/article/",
        date: "Mon Oct 24 2022 10:51:13 GMT+0800 (中国标准时间)",
        description: "## 垃圾回收@@@@@@  1. c一类的语言拥有底层的内存管理原语`malloc()`和`free()`，由程序员显示的控制内存的分配与释放。@@@  2. rust定义了一个叫**所有权**的特性，将GC提前到了编译时进行检查。--这也是唯一个不影响运行时的GC@@@  3. 而javascript这样的高级语言，会自动释放内存，这一过程就是**内存垃圾回收**@@@  @@@  > 虽然我们有自动的垃圾回收机制，依然会有内存管理的问题，例如内存泄露等@@@@@@## 内存生命周期@@@",
        outline: ["## 垃圾回收","## 内存生命周期","## JavaScript 中的分配内存","## JavaScript 中的使用内存","## JavaScript 中的释放内存","## 万物都有其两面性","## 四种常见的javascript内存泄露","## 管理内存的方式"],
      },{
        hash: "0a02c7018641eb06c36ae0e89b5103597577e209",
        fileName: "d39bb8c1207018a650feecb784c7f29a1043525d",
        title: "2022年SEO知识汇总",
        filePath: "/blogs/article/",
        date: "Fri Sep 09 2022 14:48:01 GMT+0800 (中国标准时间)",
        description: "## 2022年SEO知识汇总@@@@@@2022年，最新整理的SEO相关规范、知识点以及策略。@@@@@@## 爬虫工作流程：@@@",
        outline: ["## 2022年SEO知识汇总","## 爬虫工作流程：","## 状态码对SEO的影响","### 3x","### 4x","### 5x","## SEO指南","### robots.txt","### sitemap","### meta robots","### Canonical Tags","### 标签","### url","### 用户体验","### 网站改版","## 关于SPA","## 关于快照 ","## 网站常规指南小贴士","### 移动端指南","## 理想优化的网页","### url满足：","### 内容满足：","### 爬虫会优先抓取的网站特点：","## seo自查点","## 关于爬虫的识别","# 资料"],
      },{
        hash: "2af0c3ce17d080720f8647becd632a20028b1ebf",
        fileName: "6469519068f37ac3e5996b01a296fae81d69ffb5",
        title: "前端博客没有webpack就很奇怪对么",
        filePath: "/blogs/article/",
        date: "Tue Aug 30 2022 11:15:07 GMT+0800 (中国标准时间)",
        description: "## webpack的基础概念@@@@@@### entry@@@- 打包文件的入口，会以此入口文件开始，把相关联的文件全部打包@@@- 可以设置多个@@@@@@### output@@@- 打包文件的输出路径@@@",
        outline: ["## webpack的基础概念","### entry","### output","### loader ","### plugins","### .npmrc文件,配置项目统一使用源","### webpack 环境搭建","### webpack 启动  ","### weboack 配置文件","##### webpack 配置文件改名,自定义配置文件名","##### entry(入口)、output(出口)","##### mode(打包模式)","##### loader(扩展支持模块)","##### plugin(插件,功能扩展)","##### module(模块)","##### chunk(代码块)","##### bundle","##### bundle与chunk的关系","##### 配置webpack使用的loader的路径","### 多页面打包通用方案","### sourceMap ","## 优化方案","## webpack拆包，拆到多少算合适？","## wabpack hash指纹策略 ","### hash","### chunkhash","### contenthash","## 与其他打包工具的差异性","### Rollup","### vite - rollup - webpack ","## 更多"],
      },{
        hash: "fc66e67420ce88e42386dab4111d4150d6ef0162",
        fileName: "2835013a00426e53b65ee10af3800ab91cba38e6",
        title: "Rust-2.结构体",
        filePath: "/blogs/article/",
        date: "Mon Mar 07 2022 10:01:15 GMT+0800 (中国标准时间)",
        description: "# 第5章 chapter 5@@@@@@## struct 结构体@@@  定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。在大括号中，定义每一部分数据的名字和类型，我们称为 **字段（field）**。@@@@@@```rust@@@  struct User {@@@    username: String,@@@    email: String,@@@    sign_in_count: u64,@@@    active: bool,@@@  }@@@",
        outline: ["# 第5章 chapter 5","## struct 结构体","## 结构体更新语法（struct update syntax）","## 元组结构体（tuple structs）","## 类单元结构体（unit-like structs）","## 打印结构体","## 方法语义","### 方法可与字段重名","## 关联函数（associated functions）","## 更多"],
      },{
        hash: "2e8b2f101547786be8003ff129758e05b0447587",
        fileName: "05ae83d3f00a161a4b90e6c5a065c46f02405de3",
        title: "Rust-3.枚举与模式匹配",
        filePath: "/blogs/article/",
        date: "Mon Mar 07 2022 10:01:15 GMT+0800 (中国标准时间)",
        description: "# 第6章 chapter 6@@@@@@## 枚举 enumerations@@@@@@枚举（enumerations），也被称作 enums。枚举允许你通过列举可能的 成员（variants） 来定义一个类型。@@@",
        outline: ["# 第6章 chapter 6","## 枚举 enumerations","## 定义枚举","### 枚举可以被定义值","### 枚举可以使用impl","## Option","## match控制流运算符","### 匹配option<T>","### 通配模式和 _ 占位符","## if let 简洁控制流","## 更多"],
      },{
        hash: "6b17cdbbfcc4b8a9b274bdea4b8c0a37cabadf0a",
        fileName: "b1033978ebd32f49f8b4a6f46e4ca7c8689f71f8",
        title: "html渲染原理及其优化思路",
        filePath: "/blogs/article/",
        date: "Tue Feb 08 2022 14:11:26 GMT+0800 (中国标准时间)",
        description: "## HTML的解析过程@@@@@@![7tz9q1ngpp](assets/7tz9q1ngpp.webp)@@@@@@网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型，比如 content-type 的值是\"text/html\"，那么浏览器就会判断这是一个 HTML 类型的文件，然后为该请求选择或者创建一个渲染进程，渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据\"喂\"给 HTML 解析器。你可以把这个管道想象成一个\"水管\"，网络进程接收到的字节流像水一样倒进这个\"水管\"，而\"水管\"的另外一端是渲染进程的 HTML 解析器，它会动态接收字节流，并将其解析为 DOM。如下图@@@",
        outline: ["## HTML的解析过程","### dom的解析","### CSS的解析","### 渲染树","#### 渲染步骤","###  回流与重绘","#### reflow与repaint的时机","### CSS的渲染阻塞","## 关键渲染路径","### 关键路径渲染和阻塞渲染","### css具体如何阻塞资源的","### JavaScript具体如何阻塞资源的","### 改变脚本加载次序defer与async","## 图片的对决","## 优化的思路","## 排查优化点、衡量网站的性能的方法","## 补充&概念","## Google提出了网站用户体验的三大核心指标","## Google提出的RAIL指标","## 补充指标优化方法","## 整体大纲"],
      },{
        hash: "e184854edc9ac8cae380d42fec02d2b82821e8be",
        fileName: "461d64911a96bf21dfa6e87f6d44b22a516582dd",
        title: "《重构 改善既有代码的设计》",
        filePath: "/blogs/article/",
        date: "Tue Feb 08 2022 14:11:24 GMT+0800 (中国标准时间)",
        description: "## 什么是重构@@@这里先给重构下一个定义：改善既有代码的设计。@@@@@@具体来说就是在不改变代码功能行为的情况下，对其内部结构的一种调整。需要注意的是，重构不是代码优化，重构注重的是提高代码的可理解性与可扩展性，对性能的影响可好可坏。而性能优化则让程序运行的更快，当然，最终的代码可能更难理解和维护。@@@@@@## 为什么要重构@@@### 改善程序的内部设计@@@如果没有重构，在软件不停的版本迭代中，代码的设计只会越来越腐败，导致软件开发寸步难行。@@@",
        outline: ["## 什么是重构","## 为什么要重构","### 改善程序的内部设计","### 使得代码更容易理解","### 提高开发的速度 && 方便定位错误","## 重构的原则","### 保持当下的编程状态","### 可控制的重构","## 识别代码的臭味道","### 神秘命名","### 重复代码","### 过长函数","### 数据泥团 && 过长参数","### 全局数据","### 发散式变化","### 霰弹式修改","### for 循环语句","### 复杂的条件逻辑 && 合并条件表达式","### 查询函数与修改函数耦合","### 以卫语句(Guard Clauses)取代嵌套条件表达式","## 何时开始重构","### 添加新功能之前","### 完成新功能后或 code review 后","### 难以添加新功能的时候","## 什么时候不该重构","### 重写比重构容易","### 不需要理解该代码片段时","### 未与合作者商量时","## 重构与性能"],
      },{
        hash: "a8c0e4413cba42b2e24337af64a24dde4a80c782",
        fileName: "2eb8add3da46383c06f244240c573a2584e75229",
        title: "HTTP的缓存策略",
        filePath: "/blogs/article/",
        date: "Tue Feb 08 2022 14:11:13 GMT+0800 (中国标准时间)",
        description: "## http1.0 使用强制缓存@@@@@@expires 强制缓存，单位是毫秒，如果客户端跟服务端时间不一致的情况下，会出现bug，前台无法感知@@@@@@```javascript@@@  // http 1.0 强制缓存方案，单位毫秒，如果客户端与服务端时间不一致就会出BUG@@@  res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())@@@```@@@",
        outline: ["## http1.0 使用强制缓存","## http1.1 使用强制缓存与协商缓存","## 缓存使用决策","## Cache-Control示例"],
      },{
        hash: "311ccbb68e11a34d260e9be95cef95898f03d37f",
        fileName: "113ec85a07ef4951ba8871d23def556ad5ef7d98",
        title: "chrome控制台使用",
        filePath: "/blogs/article/",
        date: "Tue Jan 25 2022 09:34:10 GMT+0800 (中国标准时间)",
        description: "@@@## 预览请求的时间分解@@@@@@时序故障阶段解释@@@",
        outline: ["## 预览请求的时间分解"],
      },{
        hash: "331a783653e404ce43643364b5131b2bf334491f",
        fileName: "12140bd1794a63a9aef266096097ec807670672b",
        title: "Rust-1.Rust中的基础概念",
        filePath: "/blogs/article/",
        date: "Tue Jan 25 2022 09:34:10 GMT+0800 (中国标准时间)",
        description: "# 第1-3章 chapter 1-3@@@@@@## 安装@@@@@@  linux 或者 macos 执行如下代码：@@@",
        outline: ["# 第1-3章 chapter 1-3","## 安装","## rustc 和 cargo","## 变量可变性","## 数据类型","## 函数","## 表达式","## 控制流 control flow","# 第4章 chapter 4","## 所有权 （ownership）","## 引用和借用","## Slice类型"],
      },{
        hash: "867034e7c716f581fa6d2e7d3e563f4538e5e153",
        fileName: "6c2bc4ffbc7f92ab2a23ae31f3a14b5a06f61e4c",
        title: "堆空间和栈空间",
        filePath: "/blogs/article/",
        date: "Mon Jan 17 2022 11:20:48 GMT+0800 (中国标准时间)",
        description: "## js的内存空间@@@@@@在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。@@@@@@其中的代码空间主要是存储可执行代码的，栈空间用来管理调用逻辑，堆空间用来在执行过程中管理内存@@@",
        outline: ["## js的内存空间","## 栈空间和堆空间","## 又是闭包","## 栈（Stack）与堆（Heap）"],
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
        hash: "69f513ff6a71925058030977b564abe62f69fac5",
        fileName: "5b3d1c4b19bf4900089d95daf4eb8608886705b4",
        title: "值应该放在推上还是栈上？",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "## 数据什么时候可以放在栈上，什么时候需要放在堆上@@@@@@印象中应该是：@@@  * 基本类型（primitive type）存储在栈上，对象存储在堆上；@@@  * 少量数据存储在栈上，大量的数据存储在堆上。@@@@@@这些虽然对，但并没有抓到实质。接下来我们深挖堆和栈的设计原理，看看它们到底是如何工作的。@@@",
        outline: ["## 数据什么时候可以放在栈上，什么时候需要放在堆上","## 栈","### 放栈上的问题","## 推","### 放堆上的问题","## GC、ARC 如何解决","## 小结"],
      },{
        hash: "a5b584e29683a227014e72e978260864b6cccb74",
        fileName: "ff707b7508601b5f1e74f1eab53d102ca2bd8525",
        title: "解释型语言与编译型语言",
        filePath: "/blogs/article/",
        date: "Tue Jan 04 2022 09:19:03 GMT+0800 (中国标准时间)",
        description: "# 解释型语言与编译型语言概念与对比@@@@@@## 编译执行（直接执行）@@@@@@> c语言使用命令行 `gcc x.c` 编译出a.out文件，然后执行 `./a.out`即可运行，这是编译执行，编译后的文件可以直接执行@@@",
        outline: ["# 解释型语言与编译型语言概念与对比","## 编译执行（直接执行）","## 解释执行","## 对比"],
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
        hash: "be8b87c706ad9efe185699f8c2d4f4093c6b47c0",
        fileName: "3dae20f9d98bb4462216dd64e4c14c262a65d7bb",
        title: "对称加密与非对称加密",
        filePath: "/blogs/article/",
        date: "Sun Sep 26 2021 10:12:32 GMT+0800 (中国标准时间)",
        description: "## 对称加密@@@@@@在对称加密算法中，加密和解密使用的**密钥是相同的**。加密和解密使用的是同一个密钥。@@@@@@优点：算法公开，计算量小，加密速度快，效率高。@@@",
        outline: ["## 对称加密","## 非对称加密","## 总结","## https"],
      }]

export default article
