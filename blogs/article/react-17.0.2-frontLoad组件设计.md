
## fronLoad

`frontLoad`是用来解决组件真实渲染前无法进行某些异步操作的痛点。

例如：某个页面依赖某项数据，我们期待在数据返回之前，页面不进行渲染。

在函数式组件中，我们通常可以使用`useState` + `useEffect` + `<Load>组件` 来实现这个需求，在请求中显示loading，请求完成修改state触发重新渲染。

```js

function ProfileDetails() {
  const [user,setUser] = useState({});

  useEffect(()=>{
    getUser()
  },[])

  const getUser=()=>{
    new Promise(res => {
      setTimeout(() => {
        res({ name: 'NB' })
      }, 2000)
    }.then(res=>{
      setUser(res)
    })
  }

  if(!res.name){
    return <h1> loading......</h1>
  }

  return <h1>{user.name}</h1>;
}

```

不过这种实现方式，并非数据返回后才执行渲染，而是利用多次渲染来实现的。

要在函数式组件中实现这类需求，我们可以搭配`Suspense`来做，示例如下：

## 使用Suspense, 实现需求

```js
/** frontLoad 加载函数 */
function frontLoad(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw result;
    } else if (status === "success") {
      return result;
    }
  };
}

/** 传入参数：Promise请求数据 */
const getUser = frontLoad(new Promise(res => {
  setTimeout(() => {
    res({ name: 'NB' })
  }, 2000)
}))

/** 最终渲染组件 */
function ProfileDetails() {
  const user = getUser();
  return <h1>{user.name}</h1>;
}

/** 使用Suspense配合渲染即可 */
function App(){
  return  (
    <Suspense fallback={<h1>Loading profile...</h1>} >
      <ProfileDetails />
    </Suspense>
  )
}
```

## 两种方式的优缺点

### Suspense

`Suspense`实现方式的优点：

* frontLoad函数可以接受任意Promise
* getUser函数返回之前，整个页面显示的是`Loading profile...`
* 无需太多hook，组件页面逻辑清晰
* 复杂度被封装到了frontLoad中

`Suspense`实现方式的缺点：

* 用户见到`loading`的时间变长了。

### hooks

`hooks`实现方式的优点：

* 首次渲染可以选择对用户更加友好的页面，而不是一定要用loading...

`hooks`实现方式的缺点：

* 多次渲染
* 调用了多种hooks，存在代码复杂度
* 整体页面逻辑不如`Suspense`方式清爽