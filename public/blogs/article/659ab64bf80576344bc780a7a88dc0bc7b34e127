## react项目加载远程组件

  react项目使用远程组件的解决方案，可用来做微前端架构，也可用来解决部分模块的多端公用问题。

  目前，我把远程加载组件技术用来解决公司多端使用，且需求易变的功能模块，需多端处理+上线的问题。

## 原理
  核心逻辑为元编程的概念，webpack打包后的js在运行时的react项目中，可使用**eval**来直接执行，以此来获得一个组件

## 流程
  * 编写react组件,打包获得一个打包后js文件
  * 打包后的js文件上传至服务器
  * react项目从服务器拉取代码使用eval后即可获得组件
  * 可提供上下文用来渲染内容

## umd打包模式

### 打包组件示例

package.json 安装依赖如下
```json
  "dependencies": {
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2",
    "react": "^17.0.2",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1"
  }
```

webpack.config.js
```js
  const path = require('path')

  module.exports = {
    entry: "./src/index.jsx",
    mode: "production",
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'MyComponent', //挂载到window.MyComponent上
        type: 'umd',// umd模式打包
      },
    },
    externals: {
      react: 'react'  // react为外部依赖
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
              ]
            }
          },
          exclude: /node_modules/
        }
      ]
    }
  }
```

src/index.jsx
```js
  import React from 'react'

  function A({ x }) {
    return (
      <div>
        这是远程组件
        <p>
          这是参数x：{x}
        </p>
      </div>
    )
  }

  export default A
```

### 远程组件使用示例

```jsx
  import axios from 'axios'
  import React, { useEffect, useState, useLayoutEffect } from "react"

  async function getComponent() {
    try {
      window.react = window.react || React  // 需要先把React挂载到window上
      let val = await axios.get('main.js')
      eval(val.data)
       window.react = undefined // 有强迫症的话，可以再把react删掉
    }
    catch (ex) {
      console.error(ex)
      return null
    }
  }


  const Codeless = (props) => {
    let [C, setC] = useState(null)

    useEffect(() => {
      getComponent().then(() => {
        setC(c => window.MyComponent.default)
      })
    }, [])

    if (C === null) {
      return (
        <div>sss</div>
      )
    }
    return (
      <div>
        <C x={99} />
      </div>
    )
  }

  export default Codeless
```

此时页面上就会显示远程组件 - 且参数x为99

![远程组件](assets/111.jpg)

## amd打包模式

### 打包组件示例

package.json 安装依赖如下
```json
  "dependencies": {
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2",
    "react": "^17.0.2",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1"
  }
```

webpack.config.js
```js
  const path = require('path')

  module.exports = {
    entry: "./src/index.jsx",
    mode: "production",
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'amd-require', // amd模式打包，立即执行
      },
    },
    externals: {
      react: 'react'  // react为外部依赖
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
              ]
            }
          },
          exclude: /node_modules/
        }
      ]
    }
  }
```

src/index.jsx
```js
  import React from 'react'

  function A({ x }) {
    return (
      <div>
        这是远程组件
        <p>
          这是参数x：{x}
        </p>
      </div>
    )
  }

  export default A
```

### 远程组件使用示例

```jsx
  import axios from 'axios'
  import React, { useEffect, useState, useLayoutEffect } from "react"

  async function getComponent() {
    // 需要手动定义一个require函数
    let require = function (dependencies, factory) {
      return factory(React)
    }
    try {
      let val = await axios.get('main.js') // 去网络上请求打包后的组件js
      return eval(val.data)
    }
    catch (ex) {
      console.error(ex)
      return null
    }
  }


  const Codeless = (props) => {
    let [C, setC] = useState(null)

    useEffect(() => {
      getComponent().then((val) => {
        setC(c => val.default)
      })
    }, [])

    if (C === null) {
      return (
        <div>sss</div>
      )
    }
    return (
      <div>
        <C x={99} />
      </div>
    )
  }

  export default Codeless
```

此时页面上就会显示远程组件 - 且参数x为99

![远程组件](assets/111.jpg)


> umd打包模式，会污染全局变量，amd打包模式需要自定义require函数，具体选哪个根据需求来抉择吧

## 更多

  [gtihub 源码示例]()