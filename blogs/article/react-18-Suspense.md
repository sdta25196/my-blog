
## Suspense

Suspense 可以让我们的组件在**渲染之前“等待”某些东西**。

## 实现lazyLoad

react原生提供了`lazy`函数 + `Suspense`组件来实现组件的懒加载

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

具体使用详情[查阅文档](https://reactjs.org/docs/code-splitting.html#reactlazy)

## 实现fronLoad

`frontLoad`是用来解决组件真实渲染前无法进行某些异步操作的痛点。

例如：某个页面依赖某项数据，我们期待在数据返回之前，页面不进行渲染。

**hooks版**

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

**Suspense版**

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

export default App

```

### 两种方式的优缺点

**Suspense**

`Suspense`实现方式的优点：

* frontLoad函数可以接受任意Promise
* getUser函数返回之前，整个页面显示的是`Loading profile...`
* 无需太多hook，组件页面逻辑清晰
* 复杂度被封装到了frontLoad中

`Suspense`实现方式的缺点：

* 用户见到`loading`的时间变长了。

**hooks**

`hooks`实现方式的优点：

* 首次渲染可以选择对用户更加友好的页面，而不是一定要用loading...

`hooks`实现方式的缺点：

* 多次渲染
* 调用了多种hooks，存在代码复杂度
* 整体页面逻辑不如`Suspense`方式清爽


## 解决竞态条件

> 竞态条件问题,本质上就是由于时序性不稳定带来的UI显示BUG问题。例如依次点击A、B两个按钮获取其对应的数据，此时如果A接口返回数据比B接口晚，那么我们的UI将会显示A接口的数据，可是此时用户应该看到的是B接口的数据（因为后点击的B按钮）。

当`Suspense`在渲染其子孙组件的时候，遇到了一个抛出的未解决的`Promise`,Suspense就会执行fallback中的组件,我们可以利用这一点来解决竞态条件的问题

原理是，当我们的接口一旦被触发，`Suspense`就会立刻渲染我们的组件。这就直接避免了时序性不一致产生的渲染错误问题。

示例代码如下：

```js

/** 模拟数据请求 */
function fetchUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: '无所谓的名字' + userId
      })
    }, 500 * Math.random());
  });
}

/** 包装promise，用来触发Suspense的状态 */
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
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

function App() {
  const [resource, setResource] = useState({ id: 0, user: wrapPromise(fetchUser(0)) });
  return (
    <>
      <button
        onClick={() => {
          const nextUserId = (resource.id + 1) % 4;
          setResource({
            id: nextUserId,
            user: wrapPromise(fetchUser(nextUserId))
          });
        }}
      >
        Next
      </button>

      <Suspense fallback={<h1>Loading profile...</h1>} >
        <ProfileDetails resource={resource} />
      </Suspense>
    </>
  );
}


/** 触发resource.user()来获取数据 */
function ProfileDetails({ resource }) {
  let c = resource.user()
  return <h1>{c.name}</h1>;
}

export default App

```


## 补充lazy预渲染简单版本

```js
const LazyDemo = lazy(async () => {
  const a = { x: 1 }
  await new Promise(resolve => {
    a.x = 200666
    setTimeout(resolve, 2000); // 模拟异步请求
  });
  return Promise.resolve({
    default: () => <div>这里a.x == {a.x}</div>
  });
});

```