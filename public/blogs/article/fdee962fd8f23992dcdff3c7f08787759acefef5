## bundle analysis 打包分析

  分析打包文件 

  安装：`yarn add -D webpack-bundle-analyzer`

  cra项目使用
  // config-overrides.js
  ```js
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    module.exports = override(
      //其他配置
      process.env.npm_config_report && addWebpackPlugin(new BundleAnalyzerPlugin()), // 配置打包分析
    );
  ```
  pagkage.json中新增命令行
  ```js
  "analyze": "cross-env npm_config_report=true react-app-rewired build",
  ```
  执行`yarn analyze`即可打开一个分析界面，如下图：
  ![图片](assets/93f72404-b338-11e6-92d4-9a365550a701.gif)
  我们可以：
  * 了解捆绑包中的真正内容
  * 找出哪些模块占其大小的大部分
  * 查找错误到达那里的模块
  * 优化一下！
  
  参考文档： [bundle analysis](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  

## code coverage 代码覆盖率

  chrome 59后版本提供的功能，可以测试代码覆盖率，使用步骤如下:
  1. chrome浏览器按`F12`打开控制台
  2. windows 按`ctrl + shift + p` 打开命令面板
  3. 输入`Coverage`,点击`Show Coverage`
  4. 点击`Coverage`面板的中间的刷新按钮即可

  ![图片](assets/1639807676(1).jpg)
  
  * [google 官方文档](https://developers.google.com/web/updates/2017/04/devtools-release-notes)
    
  * [参考资料](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf/)

  **题外话**
  59版本的chrome,也提供了页面的全屏截图
  1. 使用`ctrl + shift + p`打开命令面板
  2. 输入`screen`,选择`Capture full size screenshot`

## magic comments 魔法注释

  webpack3后支持使用魔法注释对webpack的打包行为进行干预，具体可查阅文档：
  [webpack 魔法注释](https://webpack.js.org/api/module-methods/#magic-comments)
  


## prefeching/preloading 预加载

  webpack4.6后支持了预加载，可以支持模块预加载。
  但是Preload使用不当的话，实际上是会损害性能的。文档如下：
  [webpack 预加载](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
  
## code splitting 代码分割
**webpack代码分割**
webpack允许我们将代码拆分为各种包，然后可以按需或并行加载，它可用于实现较小的包并控制资源加载优先级，如果使用得当，会对加载时间产生重大影响。

共有三种可用的代码拆分方法：
  * 入口点：使用entry配置手动拆分代码。
  * 防止重复：使用条目依赖项或SplitChunksPlugin重复数据删除和拆分块。
  * 动态导入：通过模块内的内联函数调用拆分代码。

参考文档：[webpack 代码分割](https://webpack.js.org/guides/code-splitting/)

**react代码分割**

cra启动的项目，可以直接使用

```js
  //  打包时，math.js会跟当前js分开打包
  import("./math").then(math => {
    console.log(math.add(16, 26));
  });
```
> 如果是自己的搭建的项目, 需要安装babel插件`@babel/plugin-syntax-dynamic-import.`

参考文档：[react 代码分割](https://reactjs.org/docs/code-splitting.html)
  
## lazy loading 懒加载(按需加载)

  目前懒加载可以直接使用react的`lazy`与`Suspense`搭配实现,不需要使用webpack了
    
  参考文档：[webpack 懒加载](https://webpack.js.org/guides/lazy-loading/)

  参考文档：[react 懒加载](https://reactjs.org/docs/code-splitting.html#reactlazy)

## uglifyjs-webpack-plugin

  优化打包后产物，去除不必要的`console`、`debugger`等

  安装：`yarn add uglifyjs-webpack-plugin`

  cra项目：config-overrides.json
  ```js
    module.exports = override(
      process.env.NODE_ENV === 'production' && addWebpackPlugin(new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })),// 仅在生产环境删除日志
    );
  ```
## unimport 
  在 javascript / typescript 项目中查找未使用的源文件的工具
  
  安装: `yarn add unimport`

  跟目录下可新建`.unimportedrc.json`文件进行配置修改
  
  执行: `npx unimport` 即可在命令行中查看

## useless-files-webpack-plugin

  安装：`yarn add useless-files-webpack-plugin`
  
  cra项目：config-overrides.json
  ```js
    const UselessFile = require('useless-files-webpack-plugin')
    module.exports = override(
      addWebpackPlugin(new UselessFile({
        root: './src', // 扫描目录
      })), // 扫描无用文件
    );
  ```
  查看根目录下的`unused-files.json`文件即可

## 其他方式
* tree shaking 摇树, 或者叫剪枝
  
  可以通过配置来控制webpack打包时处理掉无用模块等

* sourcemap 源码映射配置
  
  [sourcemap配置](https://webpack.js.org/configuration/devtool/#devtool)

* 使用`cache-loader`

安装：`npm install --save-dev cache-loader`

在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里。
```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.ext$/,
          use: [
            'cache-loader',
            ...loaders
          ],
          include: path.resolve('src')
        }
      ]
    }
  }
```
webpack5 有了新的cache配置

```js
  module.exports = {
    cache: {
      // 1. Set cache type to filesystem
      type: 'filesystem',

      buildDependencies: {
        // 2. Add your config as buildDependency to get cache invalidation on config change
        config: [__filename],

        // 3. If you have other things the build depends on you can add them here
        // Note that webpack, loaders and all modules referenced from your config are automatically added
      },
    },
  };
```

## 最后

  嫌webpack打包慢？用vite啊，那玩意快。
