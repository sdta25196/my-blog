## fundebug

运行时监控系统，Fundebug 可以通过邮件或者第三方工具立即给开发者发送报警，这样能够帮助开发者及时发现并且修复应用 BUG，从而提升用户体验。

## 支持程度

* javascript
* 微信小程序
* 支付宝小程序
* React Native
* Node
* java

## 安装

### react

  安装: `npm install fundebug-javascript`

  安装录屏插件： `npm install fundebug-revideo`
> 录屏插件接入后需要测试，可能会因为某些原因造成页面跳转卡顿，如果出现就不要用录屏了

  使用：
> react16+版本还需要配合错误抓取组件使用

  ```js
    // src/index.js
    var fundebug=require("fundebug-javascript"); //使用fundebug插件
    require("fundebug-revideo"); // 使用录屏插件
    fundebug.init({
        apikey: "API-KEY"
    })

    // ErrorBoundary组件再react16+版本中使用
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 将component中的报错发送到Fundebug
        fundebug.notifyError(error, {
          metaData: {
            info: info
          }
        });
      }

      render() {
        if (this.state.hasError) {
          return null
          // 也可以在出错的component处展示出错信息
          // return <h1>出错了!</h1>;
        }
        return this.props.children;
      }
    }

    ReactDOM.render( <ErrorBoundary> <App/> </ErrorBoundary>, document.getElementById('root'));
  ```

### 小程序
  
  [微信小程序接入文档](https://docs.fundebug.com/notifier/wxjs/integration/)

  [支付宝小程序接入文档](https://docs.fundebug.com/notifier/aliapp/integration/)

## 常用属性

* apikey - 项目创建后的id
```js
  fundebug.init({
    apikey: "API-KEY",
  });
```

* appversion - 用来设置项目版本号
```js
fundebug.init({
  appversion: "3.2.5"
})
```

* filters - 用来过滤一些用户不需要的错误信息。
```js
fundebug.filters = [
  {
      message: /WeixinJSBridge is not defined/  // 过滤错误信息WeixinJSBridge is not defined
  },
  {
    req: {
      method: /^GET$/    // 过滤get请求
    },
    res: {
      status: /^401$/    //过滤401错误码
    }
  }
];
```
* sampleRate - 设置抽样上报比例
```js
fundebug.init({
  sampleRate : 0.3 // 只抽样上报30%的错误，也意味着可能会出现漏报
})
```
* maxEventNumber - 对单个用户每次的限制发送量-默认10
```js
fundebug.init({
    maxEventNumber: 20
})
```
* maxRevideoSizeInByte - 设置录屏大小,建议最大设置500
```js
fundebug.init({
    maxRevideoSizeInByte: "300"
})
```

* silent  - 用来开启静默模式，fundebug将不会上报任务错误-默认false
```js
fundebug.init({
  silent : true
})
```
如下同理，默认为`false`,设置为`true`后都会不再上报对应数据:

1. silentDev - 不再上报开发环境的错误
2. silentHttp - 不再上报HTTP错误
3. silentConsole - 不再上报console.log 信息,**fundebug会重新console对象，所以在开发期间会出现打印信息为fundebu打印的问题。可用`silentConsole: process.env.NODE_ENV !== 'production'`解决**
4. silentPromise - 不再上报Promise错误
5. silentResource - 不再上报资源加载错误
6. silentBehavior - 不再上报用户行为数据

等等... 其他请翻阅文档

**一套基础配置** 
```js
let fundebug = require("fundebug-javascript")
require("fundebug-revideo")
fundebug.init({
  apikey: "your object apikey", // 项目id
  appversion: `${new Date().getFullYear()}${new Date().getMonth() + 1}${new Date().getDate()}`, // 设置版本号
  silentDev: true,  // 不抓取开发期间错误
  setHttpBody: true, // 抓取http请求的参数数据
  silentConsole: process.env.NODE_ENV !== 'production', // 开发环境关闭fundebug对console对象的改写
  sampleRate: 0.4, // 设置上传采样比例为0.4
  maxRevideoSizeInByte: "500", // 最大记录500kb录屏
  breadcrumbSize: 30, // 用户行为记录30
  filters: [
    {
      message: /Script error/  // 过滤script error
    },
    {
      type: /httpError/,   // 过滤px.effirst.com
      req: {
        url: /px.effirst.com/
      },
    },
    {
      type: /httpError/,    // 过滤tags.growingio.com
      req: {
        url: /tags.growingio.com/
      },
    },
    {
      type: /httpError/,    // 过滤baidu.com
      req: {
        url: /baidu.com/
      },
    },
    {
      type: /httpError/,    // 过滤cnzz.com
      req: {
        url: /cnzz.com/
      },
    },
  ]
})
```
## 更多

[fundebug官方文档](https://docs.fundebug.com/)