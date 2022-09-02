## useReducer

随着组件复杂性的增加，组件中会有事件处理程序都调用setState来更新状态，随着组件的增长，散布在其中的状态逻辑的数量也在增长。要一眼看到组件状态更新的所有不同方式可能会变得更加困难。

为了减少这种复杂性并将所有逻辑放在一个易于访问的位置，可以将状态逻辑移到组件外部的单个函数中，我们称为`reducer`。

跟redux一样，reducer函数必须是一个纯函数。且每次都要返回新的值，示例如下：

```js
function reducer(state, action) {
  if (action.type === 'incremented_age') {
    // 此处必须返回一个新的对象
    return {
      ...state,
      name: action.nextName
    };
  }
  throw Error('Unknown action.');
}

```


通常我们使用useReducer向组件添加reducer。

```js
  const [state, dispatch] = useReducer(reducer, initialArg, init)
```


### 使用useReducer

```js

import { useReducer } from 'react'

// 1. 创建reducer函数，编写逻辑
function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  // 2. 使用useReducer，传入初始值
  const [state, dispatch] = useReducer(reducer, { age: 42 }); 

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

```

**useReducer支持的第三个参数**

有时候我们初始值是通过大量计算得出的，每次渲染的时候都会进行计算，性能会相对较差。这时可以通过第三个参数传入计算函数来节约开销

* 伪代码：不使用第三个参数的情况，性能较差
```js
function creatInitState(state) {
  // do something... 此处处理了一些较大开销的逻辑。

  return initState // 返回一个初始值
}

export default function Counter() {
  // 此时creatInitState会在每次渲染的时候都执行一次。
  const [state, dispatch] = useReducer(reducer, creatInitState({ age: 42 })); 
  
  return <div></div>
}

```

* 伪代码：使用第三个参数
```js
function creatInitState(state) {
  // do something... 此处处理了一些较大开销的逻辑。

  return initState // 返回一个初始值
}

export default function Counter() {
  // 此时creatInitState只会执行一次
  const [state, dispatch] = useReducer(reducer, { age: 42 }, creatInitState); 
  
  return <div></div>
}

```

> reducer简化版逻辑：dispatch一个action修改state并触发UI重新渲染。`dispatch(action) => state` 

### 使用useReducer可以绕过effect依赖检查

effect经常会有依赖问题，使用reducer可以绕过effect的依赖检查问题，只需要依赖dispatch即可

```js
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}

function reducer(state, action) {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        count: state.count + state.step
      };
  }
}
```

## 常见问题

1. dispatch后使用最新值

```js
function reduce(state, action) {

  switch (action.type) {
    case 'add':
      return state + 1
    default:
      break;
  }
}

function App() {
  let [state, dispatch] = useReducer(reduce, 1)

  const click = () => {
    // dispatch更新最新值，但是此时state还是旧值 1
    dispatch({ type: 'add' })
    console.log(state) // 1 
    
    // 需要手动调用一次reduce函数来获取最新值。
    let newState = reduce(state, { type: 'add' })
    console.log(newState) // 2
  }

  return <button onClick={click}>点击按钮</button>
}

```

2. 调用dispatch，但是页面数据没有更新

这通常发生在reducer直接更改状态中的对象或数组时。由于react是使用`Object.is`来比较两个对象，同样内存地址的对象，会被认为是一个并且忽略本次更新

```js
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 错误:修改现有对象
      state.age++;
      return state;
    }
    case 'changed_name': {
       // ✅ 正确:创建新对象
      return {
        ...state,
        name: action.nextName
      };
    }
  }
}
```

3. reducer调用了两次

react18+版本，严格模式下开发期间会调用两次reducer 和 initializer，这可以用来帮助我们发现代码中不纯的函数，如果我们的 reducer 和 initializer都是纯函数，调用两次不会有任何问题。如果函数不纯，则会出现错误。应当及时修改。