## useEffect

## 依赖报警问题与解决方案

以下几种情形会被react内置的eslint规则提出警告:`React Hook useEffect has a missing dependency: ''. Either include it or remove the dependency array`，而通常我们解决方案都是从思考**此处使用state的原因是什么？**开始：

1. 当开发者想仅使用一次state, 不希望后续state改变的时候触发effect，于是effect的依赖项中就没有添加state
```js
  let [state] = useState("")
  useEffect(() => {
    console.log(state)
  }, [])
```

解决方案: 使用state用来做什么？
  
* 用来做网络请求，赋值一类的操作？直接使用初始化的值
```js
  let initState = ""
  let [state] = useState(initState)
  useEffect(() => {
    request({
      data: initState
    })
  }, [])
```
* 用来求值一类的操作？直接在函数组件中定义即可，不需要使用state
```js
  let [state] = useState(100)
  let value = state / 2
  // todo...
```
  // !2. 如果网络请求使用props的参数，那就不存在这个问题，因为props改变必然会重新渲染。

2. 组件`effect`依赖多个状态，但是某个状态变更时不希望执行`effect`

场景：页面中有筛选条件+开始按钮，筛选条件单独修改时不触发`effect`，点击开始按钮的时候触发`effect`，并且使用筛选条件。

```js
  let [type] = useState("")
  let [searchKey] = useState("")
  let [buttonState] = useState("")
  useEffect(() => {
    if(buttonState === 'start'){
      console.log(state1, state2)
    }
  }, [type,searchKey,buttonState])
```

解决方案：不应该使用effect
```js
  let [type] = useState("")
  let [searchKey] = useState("")

  // 某按钮触发此函数
  function startAction(){
    console.log(state1, state2)
  }

  // todo...
```

3. 用到了一些第三方的hooks，不添加依赖就会提示警告
  
例如：此处我们认为location不会改变
```js
  let location = useLocation()
  useEffect(() => {
    console.log(location)
  }, [])
```
解决方案：按照提示把location加入到依赖中就可以了，因为location不会变的
```js
  let location = useLocation()
  useEffect(() => {
    console.log(location)
  }, [location])
```

4. props改变, 某个effect中使用了props参数和某状态

与第一点的差距是这里有其他依赖项

```js
  let [state3] = useState("")
  useEffect(() => {
    console.log(props.a, state3)
  }, [props.a])
``` 
解决方案：直接使用初始值。此处使用到的不应该是state。

```js
  let initState = ""
  let [state] = useState(initState)
  useEffect(() => {
    request({
      data: initState,
      xxx: props.a
    })
  }, [props.a])
```