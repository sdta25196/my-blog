## react的状态传递的五种方式

此篇讲解react中状态传递的五种方式，在这之前，我们要先明确一件事情，那就是React 是单向数据流的，所以原则上我们**禁止从子组件往父组件传状态**。

如果有业务场景出现了子组件向父组件传递状态的场景，此时应当使用状态提升，也就是将状态放置在父组件中，传递给子组件，然后在子组件修改父组件的值。

言归正传，react的状态传递方式通常有以下五种方式：

* 使用`props`直接传递
* 使用`children`减少props透传，更符合最小知识原则
* 使用`context`直接传递上下文 
* 使用`redux`等状态管理工具
* 使用`observer`、`emit`一类的设计模式

## props

props传递状态是react中最为常用的一种状态传递方式，把状态直接传递给组件，当状态改变的时候，组件也会自动被渲染。

```js
import { useState } from 'react'

function Parent() {
  const [name, setName] = useState('xiao6')

  return (
    <Component name={name} />
  )
}

function Component({ name }) {
  return (
    <div>
      props参数name:{name}
    </div>
  )
}
```

## children

有时候当props需要向下传递的层级变多的时候，就出现了`props透传`的问题。某些组件仅仅将props像下级传递了一次，并不需要使用这个props。这时候，我们可以使用children来解决透传问题。

如下示例：ComponentA不需要知道name,那么就可以使用children的方式直接将name给到ComponentB。

```js
import { useState } from 'react'

function Parent() {
  const [name, setName] = useState('xiao6')
  return (
    <ComponentA>
      <ComponentB name={name} />
    </ComponentA>
  )
}

function ComponentA({ children }) {
  return (
    <div>
      组件A
      {children}
    </div>
  )
}
function ComponentB({ name }) {
  return (
    <div>
      组件B
      组件B的props参数name:{name}
    </div>
  )
}
```

## context

解决props透传的另一个方案就是可以选择使用useContext来代替。

不过，如果仅仅因为你需要将一些props传递几个层级，并不意味着应该把这些props放到上下文中。

context就像他的名字，他是用来传递上下文的，例如：页面主题、账号信息、路由等。

> 状态可以是上下文，但上下文不是状态。

```js
import { createContext } from 'react'

const ThemeContext = createContext(null)
// 提供者
const App = () => {
  return (
    <ThemeContext.Provider value='red'>
      <Panel title="测试content" />
    </ThemeContext.Provider>
  )
}

// 消费者
const Panel = ({ title }) => {
  const theme = useContext(ThemeContext)
  return (
    <section style={{ background: theme }}>
      <h1>{title}</h1>
    </section>
  )
}

```

## redux

redux一类的状态管理工具，可以实现方便的跨组件的状态传递与同步。

redux的核心逻辑记住一句话即可：**`dispatch`一个`action`给`reducer`，由`reducer`返回一个新的`store`**

## emit

在某些场景下，可以使用emit一类的设计模式来方便实现状态更新与同步。

例如：当我们想要仅在某功能页面几个不同的组件之间进行状态同步，不希望涉及到的范围太广时。

点击下面组件B的按钮，就可以修改组件A的状态。
```js

class Emiter {

  #handler = {}

  on(handle, fun) {
    if (!this.#handler[handle]) {
      this.#handler[handle] = []
    }
    let index = this.#handler[handle].push(fun)
    return () => {
      this.#handler[handle].splice(index - 1, 1)
    }
  }

  emit(handle, info) {
    this.#handler[handle] && this.#handler[handle].forEach(fun => {
      fun(info)
    })
  }

}


const emiter = new Emiter()

function Parent() {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  )
}

function ComponentA() {
  const [state, setState] = useState(0)
  useEffect(() => {
    emiter.on("state", setState)
  }, [])

  return (
    <div>
      组件A
      {state}
    </div>
  )
}

function ComponentB() {

  return (
    <div>
      组件B
      <button onClick={() => emiter.emit("state", Math.random())}>
        点击修改组件A的state
      </button>
    </div>
  )
}

```

## 总结

上述几种方式仅作为示例，与其相同的其他方式都差不多，仅仅是使用方式上的差异，核心思想不变。

我们实际使用中，可以根据使用场景决定使用某种最合适的传递方式。