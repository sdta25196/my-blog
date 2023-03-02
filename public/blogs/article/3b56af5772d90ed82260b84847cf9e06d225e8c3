## react 动画组件实现

复现了`Transition`组件后，继续复现`CSSTransition`,来实现通过class控制动画功能

实现`onEnter`、`onEntering`、`onEntered`、`onExit`、`onExiting`、`onExited`，来分别控制dom的className。

**此处注意一个细节：**

为了让动画能够正确的渲染，我们需要使用**强制回流**的技巧。

假设我们的css动画是：

```css

.alert-enter {
  transform: translateX(100%);
}
.alert-enter-active {
  transform: translateX(0);
  transition: transform 300ms;
}

```

使用js去编辑className时，就需要强制回流来触发动画

```js
  const dom = document.querySelector('.alert-enter-done')

  dom.className='alert-enter'
  dom.scrollTop  // 此处的读取属性，便触发了浏览器的回流。
  dom.className='alert-enter alert-enter-active' // 再次添加active便可以出发动画
```

> 上述示例中，如果删除`dom.scrollTop`，便不会触发动画行为了。


CSSTransition 代码如下（Transition的实现方案在另外一篇）：

```js
import React from 'react'
import addOneClass from 'dom-helpers/addClass'
import removeOneClass from 'dom-helpers/removeClass'
import Transition from './Transition'

export const forceReflow = (node) => node.scrollTop

const _addClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => addOneClass(node, c))
const _removeClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => removeOneClass(node, c))

/**
*
* @author : 田源
* @date : 2023-03-02 09:55
* @description : CSSTransition
*
*/
function CSSTransition({ classNames = "", ...props }) {
  const appliedClasses = {
    appear: {},
    enter: {},
    exit: {},
  }

  const onEnter = (maybeNode, maybeAppearing) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    removeClasses(node, 'exit')
    addClass(node, appearing ? 'appear' : 'enter', 'base')
    if (props.onEnter) {
      props.onEnter(maybeNode, maybeAppearing)
    }
  }

  const onEntering = (maybeNode, maybeAppearing) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    addClass(node, type, 'active')

    if (props.onEntering) {
      props.onEntering(maybeNode, maybeAppearing)
    }
  }

  const onEntered = (maybeNode, maybeAppearing) => {
    const [node, appearing] = resolveArguments(maybeNode, maybeAppearing)
    const type = appearing ? 'appear' : 'enter'
    removeClasses(node, type)
    addClass(node, type, 'done')

    if (props.onEntered) {
      props.onEntered(maybeNode, maybeAppearing)
    }
  }

  const onExit = (maybeNode) => {
    const [node] = resolveArguments(maybeNode)
    removeClasses(node, 'appear')
    removeClasses(node, 'enter')
    addClass(node, 'exit', 'base')

    if (props.onExit) {
      props.onExit(maybeNode)
    }
  }

  const onExiting = (maybeNode) => {
    const [node] = resolveArguments(maybeNode)
    addClass(node, 'exit', 'active')

    if (props.onExiting) {
      props.onExiting(maybeNode)
    }
  }

  const onExited = (maybeNode) => {
    const [node] = resolveArguments(maybeNode)
    removeClasses(node, 'exit')
    addClass(node, 'exit', 'done')

    if (props.onExited) {
      props.onExited(maybeNode)
    }
  }

  const resolveArguments = (maybeNode, _) => [props.nodeRef.current, maybeNode] // 这里 `maybeNode` 实际上是 `appearing`

  const getClassNames = (type) => {
    const isStringClassNames = typeof classNames === 'string'
    const prefix = isStringClassNames && classNames ? `${classNames}-` : ''

    let baseClassName = isStringClassNames
      ? `${prefix}${type}`
      : classNames[type]

    let activeClassName = isStringClassNames
      ? `${baseClassName}-active`
      : classNames[`${type}Active`]

    let doneClassName = isStringClassNames
      ? `${baseClassName}-done`
      : classNames[`${type}Done`]

    return {
      baseClassName,
      activeClassName,
      doneClassName,
    }
  }

  function addClass(node, type, phase) {
    let className = getClassNames(type)[`${phase}ClassName`]
    const { doneClassName } = getClassNames('enter')

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += ` ${doneClassName}`
    }

    if (phase === 'active') {
      if (node) forceReflow(node)
    }

    if (className) {
      appliedClasses[type][phase] = className
      _addClass(node, className)
    }
  }

  function removeClasses(node, type) {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName,
    } = appliedClasses[type]

    appliedClasses[type] = {}

    if (baseClassName) {
      _removeClass(node, baseClassName)
    }
    if (activeClassName) {
      _removeClass(node, activeClassName)
    }
    if (doneClassName) {
      _removeClass(node, doneClassName)
    }
  }

  return (
    <Transition
      {...props}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    />
  )
}

export default CSSTransition
```

调用测试如下：

```js

import React, { useRef, useState } from "react"
import CSSTranstion from './CSSTranstion'
import "./style.css"

export default function Example() {
  const [showMessage, setShowMessage] = useState(false)
  const nodeRef = useRef(null)
  return (
    <div className='box'>
      <button onClick={() => setShowMessage(show => !show)} >
        {showMessage ? "Close Message" : "Show Message"}
      </button>
      <CSSTranstion
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div ref={nodeRef} onClose={() => setShowMessage(false)} >
          Animated alert message
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
        </div>
      </CSSTranstion>
    </div >
  )
}

```

style.css 如下：

```css
.alert-enter {
  transform: translateX(100%);
}
.alert-enter-active {
  transform: translateX(0);
  transition: transform 300ms;
}
.alert-exit {
  transform: translateX(0);
}
.alert-exit-active {
  transform: translateX(-100%);
  transition: transform 300ms;
}
```