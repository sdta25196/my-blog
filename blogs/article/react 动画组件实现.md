## react 动画组件实现

学习了`react-transition-group`源码之后，复现了一个`Transition`组件

实现动画的核心逻辑其实很简单：**根据状态的变化，利用setTimeout设置不同的class，来实现组件的移动**

核心状态有四个： 退出完成`EXITED`、 进入中`ENTERING`、 进入完成`ENTERED`、 退出中`EXITING`。利用不同状态切换不同class，即可实现对应状态下的动画效果。

代码如下：

```js
import React, { useEffect, useState } from 'react'

// 强制回流，在此之前修改了dom的className, 此处触发了一次读取属性，来强制浏览器回流
const forceReflow = (node) => node.scrollTop

function noop() { }

export const UNMOUNTED = 'unmounted'
export const EXITED = 'exited'
export const ENTERING = 'entering'
export const ENTERED = 'entered'
export const EXITING = 'exiting'

const Transition = ({
  children,
  in: _in = false,
  mountOnEnter: _mountOnEnter = false,
  unmountOnExit: _unmountOnExit = false,
  appear: _appear = false,
  timeout: _timeout,
  onEnter: _onEnter = noop,
  onEntering: _onEntering = noop,
  onEntered: _onEntered = noop,
  onExit: _onExit = noop,
  onExiting: _onExiting = noop,
  onExited: _onExited = noop,
  nodeRef: _nodeRef,
  ...childProps
}) => {

  const [status, setStatus] = useState(() => {
    let initialStatus
    if (_in) {
      if (_appear) {
        initialStatus = EXITED
      } else {
        initialStatus = ENTERED
      }
    } else {
      if (_unmountOnExit || _mountOnEnter) {
        initialStatus = UNMOUNTED
      } else {
        initialStatus = EXITED
      }
    }
    return initialStatus
  })

  useEffect(() => {
    console.log(status)
    let nextStatus = null
    if (_in) {
      if (status !== ENTERING && status !== ENTERED) {
        nextStatus = ENTERING
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        nextStatus = EXITING
      }
    }
    updateStatus(nextStatus)
    if (_in && status === UNMOUNTED) {
      setStatus(EXITED)
    }
  }, [_in, status])


  function updateStatus(nextStatus) {
    if (nextStatus !== null) {
      if (nextStatus === ENTERING) {
        if (_unmountOnExit || _mountOnEnter) {
          const node = _nodeRef.current
          if (node) forceReflow(node)
        }
        performEnter()
      } else {
        performExit()
      }
    } else if (_unmountOnExit && status === EXITED) {
      setStatus(UNMOUNTED)
    }
  }


  function performEnter() {
    const [maybeNode, maybeAppearing] = [undefined]

    const timeouts = getTimeouts()

    _onEnter(maybeNode, maybeAppearing)

    setStatus(ENTERING)
    setTimeout(() => {
      _onEntering(maybeNode, maybeAppearing)
      setTimeout(() => {
        setStatus(ENTERED)
        setTimeout(() => {
          _onEntered(maybeNode, maybeAppearing)
        })
      }, timeouts.enter)
    })
  }

  function performExit() {
    const timeouts = getTimeouts()
    const maybeNode = undefined

    _onExit(maybeNode)

    setStatus(EXITING)
    setTimeout(() => {
      _onExiting(maybeNode)
      setTimeout(() => {
        setStatus(EXITED)
        setTimeout(() => {
          _onExited(maybeNode)
        })
      }, timeouts.exit)
    })
  }

  function getTimeouts() {
    let exit, enter, appear

    exit = enter = appear = _timeout

    if (_timeout != null && typeof _timeout !== 'number') {
      exit = _timeout.exit
      enter = _timeout.enter
      // TODO: remove fallback for next major
      appear = _timeout.appear !== undefined ? _timeout.appear : enter
    }
    return { exit, enter, appear }
  }

  if (status === UNMOUNTED) {
    return null
  }

  return (
    <>
      {typeof children === 'function'
        ? children(status, childProps)
        : React.cloneElement(React.Children.only(children), childProps)}
    </>
  )
}

export default Transition
```

调用测试如下：

```js

import React, { useRef, useState } from "react"
import Transition from './Transition'

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

function Tdemo() {
  const [inProp, setInProp] = useState(false)
  const nodeRef = useRef(null)
  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={300}>
        {state => (
          <div ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp(state => !state)}>
        模拟T Click to Enter\leave
      </button>
    </div>
  )
}

```