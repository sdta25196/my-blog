## useDeferredValue

useDeferredValue 用来获取上一次的状态值。可以用来优化渲染，例如切换状态造成UI改变的时间较长时。可以使用此hook保存旧的状态，来保证UI的渲染。

```js
  const [a, setA] = useState(1)
  const olda = useDeferredValue(a)
  console.log(olda, a)    // 会渲染两次，一次 1 2。 一次 2 2。
  return (
    <div onClick={() => { setA(x => x + 1) }}>
    {a}
  </div>
  )
```

## useId

useId 用来生产一个唯一ID。可随意使用到需要的地方，react会保证他是全局唯一的。

> useId主要是为了解决SSR的时候，client端和server端生成的随机id不一致的问题。 也是目前SSR同构最稳定的方案

```js
  const id = useId()
  return (
    <div id={id}> 
      <span data={id}></span>
    </div>
  )
```

**切记不要使用 useId 来代替列表中的 key**

1. 不方便，需要很多和useId。
2. 列表的key是需要跟数据相关，才有优化性能的作用。useId是一个固定的值，不会带来性能优化

Q：useId 是如何保证其唯一性的？

A：利用当前组件所在的整颗dom树的层级，来确定一个唯一值。

## useImperativeHandle

useImperativeHandle 是react提供给我们用来向父组件暴漏自定义的ref句柄的方法。需要与forwardRef配合使用

```js
  import { forwardRef, useRef, useImperativeHandle } from 'react';
  const MyInput = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => {
      return {  // 父组件可以调用 focus、scrollIntoView 函数
        focus() { 
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    }, []);
    return <input {...props} ref={inputRef} />;
  });

  // 父组件可调用 

  const ref = useRef(null);

  function handleClick() {
    ref.current.focus(); // 此处就会执行 MyInput 中返回的 focus 函数
  }

  <MyInput label="Enter your name:" ref={ref} />
```

## useInsertionEffect

useInsertionEffect 是针对使用 CSS-in-JS 的用户。

除非正在开发 CSS-in-JS 库并且需要一个地方来注入样式，否则都可以使用useEffect 或者 useLayoutEffect代替。

## useLayoutEffect 

尽量使用useEffect, 使用useLayoutEffect的场景为：当我们需要页面的渲染时机在useEffect回调函数之后，此时将useEffect替换为useLayoutEffect。

> 将在浏览器重新绘制屏幕之前执行。（其实，）

如下示例：在点击div的时候将value设为0，但在useEffect中又将其设为一个随机值。这样相当于value这个状态快速连续的变更了两次，每次点击都可以看到页面的闪烁效果

```js

import { useState, useEffect, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  console.log("render", value);
  return (
    <div onClick={() => setValue(0)}>value: {value}</div>
  );
}

```

如果使用 useLayoutEffect 则，不会出现闪烁的效果

> 无论是layoutEffect还是effect, react会先渲染一次初始布局，然后再渲染一次最终呈现的布局。只不过layoutEffect是同步渲染，effect是异步渲染，所以effect会闪烁一次。


**effect 和 layoutEffect的执行区别**

![执行区别](./assets/a.jpg)

## useSyncExternalStore

useSyncExternalStore 提供了订阅一个外部仓库的能力。有些类似 useState + useReducer 的组合。

` const todos = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);`

* subscribe：接受单个回调参数并将其订阅到存储的函数。当存储发生变化时，它应该调用所提供的回调。这将导致组件重新呈现。订阅函数应该返回一个清理订阅的函数。
* getSnapshot： 返回组件所需的存储中数据快照的函数。React 使用 `Object.is` 进行对比，如果不一样则会重新渲染。
* getServerSnapshot：**（可选）**返回存储中数据的初始快照的函数。它将仅在服务器渲染期间和客户端上服务器渲染内容的混合期间使用。


## useTransition

useTransition 可以在不阻塞 UI 的情况下更新状态。

> useTransition 可以保证用户界面在重新渲染的过程中，依然保持响应。解决一些组件渲染卡顿的场景中，设备差的用户卡顿严重的问题

`const [isPending, startTransition] = useTransition();`

startTransition 接受一个函数，可执行一个或多个setState函数。startTransition 会把这些setState函数标记为非阻塞的更新。

```js
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab); // 下次更新的 tab，被标记为了非阻塞。
    });
  }
```

* 使用 useTransition 后，被标记为非阻塞的更新，将不会触发Suspense.
* 被标记为非阻塞的更新,会被其他更新中断。（中断后不会执行了，会被调度器放弃） 
* 在响应事件上，例如输入事件，useTransition不生效。因为响应事件应该同步发生
* useTransition + effect 也可以打到类似layouteffect的效果，使页面不出现闪烁。
* 多个startTransition一起使用，React将会把它们一起批处理

react包中还导出了**startTransition**函数。可以代替 useTransition。使用场景为：想在组件外部调用startTransition的时候。

## useRef

当我们需要一个不会触发重新渲染的值的时候，就需要使用useRef. (更改该ref.current属性时，React不会重新渲染组件)

当我们需要操作一个dom的时候，就需要使用useRef.

虽然useRef只在初始渲染使用，但是每次渲染仍然会被调用。所以我们可以使用null判断来优化

```js

// 优化前 - 每次渲染都会创建一个 new VideoPlayer()的实例，切没有释放。
  const playerRef = useRef(new VideoPlayer());

// 优化后 仅会创建一个new VideoPlayer()实例
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }

```

## useDebugValue

当我们使用自定义hook时，如果未使用 useDebugValue 的情况下，DevTools中是不会显示自定义hook的值的。

如果想要调试，就需要在自定义hook的最顶层调用 useDebugValue ，这样就可以使这个自定义hook的调试值在 React DevTools 中显示了。

```js
function useOnlineStatus() {
  useDebugValue(isOnline ? 'Online' : 'Offline'); // DevTools 中会显示  'Online' 或 'Offline'
}
```

## useCallback 

用来缓存一个函数本身。优化性能时用

使用场景通常只有两个：

1. useCallback缓存函数中使用到的值是被effect依赖的，此时需要使用useCallback来解决依赖项问题
2. 当props没有改变时，配合memo函数，对memo包裹的组件跳过重新渲染

## useMemo 

用来缓存一个函数调用结果。优化性能时用

通常的使用场景：

1. useMemo缓存函数中使用到的值是被effect依赖的，此时需要使用useMemo来解决依赖项问题
2. 当函数的计算速度很慢，切依赖项不会经常改变时。可以把函数的计算结果放进useMemo中缓存
3. 当props没有改变时，配合memo函数，对memo包裹的组件跳过重新渲染


以下 useMemo 示例和 useCallback 示例完全等价：

```js
// useMemo
function Page({ productId, referrer }) {
  const handleSubmit = useMemo(() => {
    return (orderDetails) => {
      post('/product/' + product.id + '/buy', {
        referrer,
        orderDetails
      });
    };
  }, [productId, referrer]);

  return <Form onSubmit={handleSubmit} />;
}

// useCallback
function Page({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + product.id + '/buy', {
      referrer,
      orderDetails
    });
  }, [productId, referrer]);

  return <Form onSubmit={handleSubmit} />;
}

```

> 他们唯一的区别就是：useCallback是让我们少写了一个额外的嵌套函数