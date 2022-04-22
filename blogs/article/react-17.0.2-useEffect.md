## useEffect

useState是用来在函数式组件中添加状态，而useEffect是用来处理函数组件中的副作用的。

先说纯函数：react推荐函数式组件应该写成一个纯函数，既：固定的输入，会得到固定的输出。

```js
/** 纯函数示例 */
fucntion App({num}){
  return (
    <div>
      {num>10?<p>num大于10</p>:<p>num小于10</p>}
    </div>
  )
}
```

但是在实际开发过程中，我们的函数组件会有大量的副作用，而`useEffect`就是用来集中处理这些副作用的地方。

```js
fucntion App({num}){
  useEffect(()=>{
    // todo....  
  })

  return (
    <div>
      {num>10?<p>num大于10</p>:<p>num小于10</p>}
    </div>
  )
}
```

**重点：**

学习`function component`、学习`useEffect`，一定要忘记`class component`中的知识，二者毫无关联性，一切强行去关联生命周期等概念的观点，都是错误的！
> 国内之所以流行关联生命周期的概念，主要是因为react曾经的官网中提出了这方面的比较。

**UI=Fn(state)**



## 关于useEffect中调用异步函数问题

有些人会说useEffect中调用异步函数，可以使用自执行函数。花里胡哨，垃圾代码，花样百出

踏踏实实用`.then`去解决问题。


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
    request({ // 模拟网络请求
      data: initState,
      xxx: props.a
    })
  }, [props.a])
```

5. s

useEffect 中使用state 可以使用箭头函数的形式

场景：分页加载数据时，第二页数据需要跟第一页数据拼接在一起，此时又不能把数据状态写进依赖中，否则就会死循环。
```js
  let [schoolList,setSchoolList] = useState([])
  useEffect(() => {
    setTimeout(() => { // 模拟网络请求
      let res = {
        data: [1, 2, 3, 4]
      }
      setSchoolList(schoolList.concat(res.data))
    },1000)
  }, [])
```

解决方案：使用setState的函数式赋值方式

```js
  let [schoolList,setSchoolList] = useState([])
  useEffect(() => {
    setTimeout(() => { // 模拟网络请求
      let res = {
        data: [1, 2, 3, 4]
      }
      setSchoolList(schoolList => {
        schoolList.push(...res.data)
        return schoolList
      })
    },1000)
  }, [])
```

你要按照上面那么写,页面是不会渲染的...

```js
let [schoolList,setSchoolList] = useState([])
  useEffect(() => {
    setTimeout(() => { // 模拟网络请求
      let res = {
        data: [1, 2, 3, 4]
      }
      setSchoolList(schoolList=>[...schoolList,...res.data])  
    },1000)
  }, [])

```