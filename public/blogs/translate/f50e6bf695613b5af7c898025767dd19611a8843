## Is Vite the Killer of Webpack?

> vite是webpack的杀手么？

To build a website you need HTML, CSS, and JavaScript. It seems quite simple but nobody just sticks to these three. You may want to switch JS for TypeScript, add a frontend library like Reach for the UI, use a CSS processor like SASS, and a bunch of other modules so you do not have to start from scratch.

> 要建立一个网站，你需要HTML, CSS和JavaScript。 这看起来相当简单，但是没有人只使用这三点。你可能想把JS换成TypeScript，在UI中添加一个Reach这样的前端库，使用SASS这样的CSS处理器，以及一堆其他模块，这样你就不必从头开始了。  

That is where module bundlers truly shine. Vite is a new tool with support for major frameworks and high speed may one of the best tools for frontend developers now. Vite is sometimes thought of as a killer of Webpack. In this quick read, we’ll learn whether you should start using Vite or stick with Webpack for all your projects.

> 这就是模块绑定器真正发挥作用的地方。Vite是一个新的工具，支持主要的框架和高速可能是前端开发人员最好的工具之一。Vite有时被认为是Webpack的杀手。  在这篇快速阅读中，我们将学习你是应该开始使用Vite还是坚持使用Webpack来完成你的所有项目。 

## What are module bundlers?

> 什么事模块绑定器 (tip:国内叫打包工具)

Before we discuss Vite we should understand what module bundles are in the first place.

> 在讨论Vite之前，我们首先应该理解什么是模块包。  

Bundlers take multiple JavaScript files and combine them into a single file that can run in the browser.

> 捆绑程序获取多个JavaScript文件，并将它们组合成一个可以在浏览器中运行的文件。  


This JS bundle contains all the source code together with all the imported dependencies.

> 这个JS包包含所有的源代码以及所有导入的依赖项。  

If we try to add a module to our website without the use of such bundlers we would probably get an error since the browser doesn’t know where to find that module. That’s where something like Webpack can help us out.

> 如果我们试图添加一个模块到我们的网站，而没有使用这样的绑定器，我们可能会得到一个错误，因为浏览器不知道在哪里找到该模块。 这就是Webpack之类的东西可以帮助我们的地方。  

Alright, so we can take care of JS modules using Webpack but how about some website styling? Say you want to add some SASS to the project. Not only is it not JavaScript it also needs to be compiled by the SASS compiler. If you try to use it you will get an error saying that no loaders are configured.

> 好了，我们可以使用Webpack来处理JS模块，但是如何处理一些网站样式呢？ 假设您希望向项目中添加一些SASS。 它不仅不是JavaScript，还需要由SASS编译器编译。 如果你尝试使用它，你会得到一个错误，说没有加载器配置。  

So what are loaders exactly? It is basically a way to preprocess a file that is not JS. For our CSS (SASS) use case, it will inject the code into the Document Object Model also known as the HTML DOM, which will take care of our styling needs.

> 所以什么是loaders？ 它基本上是一种预处理非JS文件的方法。 对于我们的CSS (SASS)用例，它将把代码注入到文档对象模型(也称为HTML DOM)中，该模型将处理我们的样式化需求。  

What’s more, is that we can directly get into the bundler lifecycle using the plugin system. One very useful plugin is a bundle analyzer, which lets us see which packages are taking the most time to load.

> 更重要的是我们可以使用插件系统直接进入绑定器的生命周期。 一个非常有用的插件就是bundle分析器，它可以让我们看到哪些包加载时间最长。  

If you ever developed a website without a module bundler you would know that to see the changes you always have to rerun commands in the terminal. Tools like Webpack watch for changes and update the website without developers having to run any commands.

> 如果你曾经开发过一个没有模块绑定器的网站，你会知道，要查看更改，你总是必须在终端重新运行命令。 像Webpack这样的工具可以监视网站的变化并更新，而不需要开发者运行任何命令。  

## Why Vite?

> 为什么是Vite?

Vite is the next generation frontend tool. It claims to have instant server start, fast module replacement, optimized build, universal plugins and much more. It was developed by the creator of Vue and it supports all the main frameworks.

> Vite是下一代前端工具。 它声称拥有即时启动服务器、快速模块替换、优化构建、通用插件等功能。 它是由Vue的创建者开发的，它支持所有的主要框架。  

Now, what do these things really mean and why should we care as developers? With most bundlers, you have to build the entire application on every save. If you have a large application it could take you several minutes to reflect any basic changes.

> 那么，这些事情到底意味着什么呢?作为开发者，我们为什么要关心这些事情呢? 对于大多数bundle，您必须在每次保存的基础上构建整个应用程序。 如果您有一个大型的应用程序，它可能需要您浪费几分钟来反映任何基本的变化。  

Let’s take a look at the typical process of bundling, which is what Webpack and other popular tools use. Starting from the application entry point all the routes and modules are bundled together, after which the server is ready.

> 让我们来看看典型的bundle过程，这是Webpack和其他流行工具所使用的。 从应用程序入口点开始，所有路由和模块都被捆绑在一起，然后服务器就准备好了。  

Vite takes a different approach. It starts the server right away after which it takes the dependencies that do not change often and pre-bundles them using esbuild. Esbuild is written in Golang, which makes it up to 100 times faster than JavaScript-based bundlers.

> Vite采用了一种不同的方法。 它会立即启动服务器，然后获取不经常更改的依赖项，并使用esbuild预绑定它们。 Esbuild是用Golang编写的，这使得它比基于javascript的捆绑程序快100倍。  

Vite uses route-based code splitting to understand which parts of the code actually need to be loaded. Because of that, it does not have to re-bundle everything.

> Vite使用基于路由的代码分割来理解代码的哪些部分实际上需要加载。 因此，它不需要重新打包所有东西。  

Vite also delivers the code using native ES module support in modern browsers, which lets the browser take the job of bundling in development. As for production, Vite uses Rollup to bundle and implement various performance optimizations.

> Vite还使用现代浏览器中的本地ES模块支持来交付代码，这让浏览器可以在开发中承担捆绑的工作。 对于生产环境，Vite使用Rollup来捆绑和实现各种性能优化。  

## How about Snowpack?

> Snowpack怎么样？

Snowpack is also a no-bundle native ESM server, which is quite similar to Vite. As a matter of fact, Vite was inspired by Snowpack v1.

> Snowpack也是一个无捆绑的本地ESM服务器，它与Vite非常相似。 事实上，Vite的灵感来自Snowpack v1。  

Snowpack is also a great tool, which has gained love in developer communities. Although there are some key differences, which made my experience with Vite even more pleasant.

> Snowpack也是一个很棒的工具，在开发人员社区中颇受欢迎。 尽管有一些关键的不同之处，这使我对Vite的体验更加愉快。  

One of the features that Vite has is automatic CSS code-splitting, which will only load the relevant CSS for a specific page. This can even further increase the speed of the bundler.

> Vite的一个特性是自动CSS代码分割，它只会为特定的页面加载相关的CSS。 这甚至可以进一步提高绑定器的速度。  

Vite has multi-page support without requiring any additional modules. You can simply add a folder with the page name and index.html file and Vite will make this URL work without any extra steps.

> Vite支持多页面，不需要任何额外的模块。 您可以简单地添加一个带有页面名称和index.html文件的文件夹，Vite将使这个URL工作，而无需任何额外的步骤。  

Vite also has a legacy mode plugin, which takes care of browsers that do not support native ES Modules. Although, this will only be useful if you have to support Internet Explorer, which hopefully you do not.

> Vite也有一个传统模式插件，它兼容了不支持ESM的浏览器，然而，这只在你希望兼容IE时有用。(tips: 人家都说了自己是下一代构建工具，谁还考虑IE哦)

## What about the speed?

> 关于速度

Given the popularity of React, we can compare the speed of creating a new project with Vite vs Create-react-app.

> 鉴于React的受欢迎程度，我们可以比较Vite和Create-react-app创建新项目的速度。  

Creating a new Vite project takes more steps since you need to choose the framework and then install the dependencies. But the speed difference truly shocked me.

> 创建一个新的Vite项目需要更多的步骤，因为您需要选择框架，然后安装依赖项。 但是速度的差异真的让我震惊了。  

Getting a Vite project up and running took me only 30 seconds. This is quite fast but the true understanding comes from comparison. The standard create-react-app took around 2 minutes and 20 seconds to get up and running.

> 让一个Vite项目启动和运行只花了我30秒。 这是相当快的，但真正的理解来自比较。 标准的create-react-app程序大约需要2分20秒的启动和运行。  (tips: 国内玩家表示,真羡慕两分钟能跑起来的)

The commonly used Webpack cannot compare even remotely. The difference is truly surprising and is the factor that pushed me to start using Vite.

> 通常使用的Webpack无法进行比较。 这种差异确实令人惊讶，也是促使我开始使用Vite的原因。  

## Final thoughts

> 最终思考

To conclude, Vite is a great tool for developers that drastically speeds up the bundling process. It is not surprising how it was able to gain so much love in the community making it my go-to choice. Give it a try and see how your development process will become much more seamless.

> 总之，对于开发者来说，Vite是一个非常棒的工具，可以大大加快捆绑过程。 它如何能在社区中获得如此多的喜爱，使其成为我的首选，这一点也不奇怪。 尝试一下，看看您的开发过程将如何变得更加丝滑。  
