## xpath

XPath 使用路径表达式来选取 XML 文档中的节点或节点集。节点是通过沿着路径 (path) 或者步 (steps) 来选取的。

## 用法

### 选取节点

* `nodename`	选取此节点的所有子节点。
* `/`	从根节点选取（取子节点）。
* `//`	从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置（取子孙节点）。
* `.`	选取当前节点。
* `..`	选取当前节点的父节点。
* `@`	选取属性。

一些路径表达式以及表达式的结果：

* `bookstore`	 选取 bookstore 元素的所有子节点。
* `/bookstore`	选取根元素 bookstore。注释：假如路径起始于正斜杠( / )，则此路径始终代表到某元素的绝对路径！
* `bookstore/book`	选取属于 bookstore 的子元素的所有 book 元素。
* `//book`	选取所有 book 子元素，而不管它们在文档中的位置。
* `bookstore//book`	选择属于 bookstore 元素的后代的所有 book 元素，而不管它们位于 bookstore 之下的什么位置。
* `//@lang`	选取名为 lang 的所有属性。

### 谓语（Predicates）

谓语用来查找某个特定的节点或者包含某个指定的值的节点，谓语被嵌在方括号中。

* `/bookstore/book[1]`	选取属于 bookstore 子元素的第一个 book 元素。
* `/bookstore/book[last()]`	选取属于 bookstore 子元素的最后一个 book 元素。
* `/bookstore/book[last()-1]`	选取属于 bookstore 子元素的倒数第二个 book 元素。
* `/bookstore/book[position()<3]`	选取最前面的两个属于 bookstore 元素的子元素的 book 元素。
* `//title[@lang]`	选取所有拥有名为 lang 的属性的 title 元素。
* `//title[@lang='eng']`	选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。
* `/bookstore/book[price>35.00]`	选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。
* `/bookstore/book[price>35.00]//title`	选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。

### 选取未知节点

* `*`	匹配任何元素节点。
* `@*`	匹配任何属性节点。
* `node()`	匹配任何类型的节点。

一些路径表达式，以及这些表达式的结果：

* `/bookstore/*`	选取 bookstore 元素的所有子元素。
* `//*`	选取文档中的所有元素。
* `//title[@*]`	选取所有带有属性的 title 元素。

### 选取若干路径

* `//book/title | //book/price`	选取 book 元素的所有 title 和 price 元素。
* `//title | //price`	选取文档中的所有 title 和 price 元素。
* `/bookstore/book/title | //price`	选取属于 bookstore 元素的 book 元素的所有 title 元素，以及文档中所有的 price 元素。

## xpath使用示例

* 获取元素的 `xpath`

```js
// 获取元素xpath , xpathType: 1 full xpath , 2 xpath。默认获取 full xpath
function readXPath(element, xpathType = 1) {
  if (element.nodeType > 8) {
    console.error("传入的element不合法")
    return
  }

  // 不获取 full xpath 的时候，可以直接使用 class、id
  if (xpathType === 2) {
    if (element.id !== '') {
      return `//*[@id="${element.id}"]`
    }

    if (element.className !== '') {
      // class 需要处理重复的情况
      let index = 1
      const allElement = Array.from(document.querySelectorAll('.' + element.className))
      for (let i = 0; i < allElement.length; i++) {
        if (allElement[i] === element) {
          index = i + 1
        }
      }
      return `//*[@class="${element.className}"]${index > 1 ? '[' + index + ']' : ''}`
    }
  }


  //递归到 html 处，结束递归
  if (element === document.documentElement) {
    return '/' + element.tagName
  }

  //在nodelist中的位置，且每次点击初始化
  let index = 1

  //同级的子元素
  let siblings = element.parentNode.childNodes

  for (let i = 0, l = siblings.length; i < l; i++) {
    let sibling = siblings[i]
    if (sibling == element) {
      // 找到当前元素后，开始向上递归。并且标记当前元素名称与下标位置
      return readXPath(element.parentNode,xpathType) + '/' + element.tagName + (index > 1 ? '[' + index + ']' : '')
    } else if (sibling.nodeType == 1 && sibling.tagName == element.tagName) {
      // 开始累加下标，计算元素的位置
      index++
    }
  }
}
```

* 据 `xpath` 获取元素

```js
// 根据xpath获取元素
function getElement(xpath) {
  return document.evaluate(xpath, document).iterateNext()
}
```

## 案例

实现鼠标划入元素时出现选中圈，并且点击获取xpath。 选中圈使用 shadow dom 进行样式隔离。 

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<!-- 

实现鼠标划入元素时出现选中圈，并且点击获取xpath。 选中圈使用 shadow dom 进行样式隔离。 

 -->

<body>

  <div class="aa">
    <strong>Original</strong>
    <p>
      <span>Paragraph that spans multiple lines</span>
    </p>
  </div>

  <div class="aa">
    <strong>p's rect</strong>
    <p class="withClientRectsOverlay">
      <span>Paragraph that spans multiple lines</span>
    </p>
  </div>

  <div class="aa">
    <strong>span's rect</strong>
    <p>
      <span class="withClientRectsOverlay">Paragraph that spans multiple lines</span>
    </p>
  </div>

  <script>

    run()

    function run() {

      const eleId = 'shadow-wrapper'

      // 鼠标进入后元素点击事件 
      function eleClick(e) {
        console.log(readXPath(e.target))
        e.preventDefault()
      }
      // 鼠标进入事件
      function onMouseover(e) {
        const target = e.target
        const rect = target.getBoundingClientRect?.()
        if (!rect || target.tagName === 'HTML') return
        addLayerBox(rect, eleId)
        target.addEventListener("click", eleClick, false)
      }

      window.addEventListener("mouseover", onMouseover, false)
      document.addEventListener("mouseout", (e) => {
        const target = e.target
        document.querySelector('#' + eleId)?.remove()
        target.removeEventListener("click", eleClick, false)
      }, false)
    }

    // 获取元素xpath , xpathType: 1 full xpath , 2 xpath。默认获取 full xpath
    function readXPath(element, xpathType = 1) {
      if (element.nodeType > 8) {
        console.error("传入的element不合法")
        return
      }

      // 不获取 full xpath 的时候，可以直接使用 class、id
      if (xpathType === 2) {
        if (element.id !== '') {
          return `//*[@id="${element.id}"]`
        }

        if (element.className !== '') {
          // class 需要处理重复的情况
          let index = 1
          const allElement = Array.from(document.querySelectorAll('.' + element.className))
          for (let i = 0; i < allElement.length; i++) {
            if (allElement[i] === element) {
              index = i + 1
            }
          }
          return `//*[@class="${element.className}"]${index > 1 ? '[' + index + ']' : ''}`
        }
      }


      //递归到 html 处，结束递归
      if (element === document.documentElement) {
        return '/' + element.tagName
      }

      //在nodelist中的位置，且每次点击初始化
      let index = 1

      //同级的子元素
      let siblings = element.parentNode.childNodes

      for (let i = 0, l = siblings.length; i < l; i++) {
        let sibling = siblings[i]
        if (sibling == element) {
          // 找到当前元素后，开始向上递归。并且标记当前元素名称与下标位置
          return readXPath(element.parentNode, xpathType) + '/' + element.tagName + (index > 1 ? '[' + index + ']' : '')
        } else if (sibling.nodeType == 1 && sibling.tagName == element.tagName) {
          // 开始累加下标，计算元素的位置
          index++
        }
      }
    }

    // 添加选中样式元素
    function addLayerBox(rect, eleId) {
      const style = document.createElement("style")
      style.innerHTML = `
      #shadow-dom {
        position: absolute;
        border: 1px solid red;
        pointer-events: none;
        z-index: 999999;
        padding:0;
        margin:0;
      }
      #shadow-dom * {
        box-sizing: border-box;
      }
    `
      // 挂载到 body 上的元素
      const wrapper = document.createElement("div")
      wrapper.id = eleId
      wrapper.style.pointerEvents = "none";
      // 影子 dom
      const shadow = wrapper.attachShadow({ mode: "open" })
      // 选中的元素样式
      const layer = document.createElement("div")
      layer.id = "shadow-dom"
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
      layer.style.top = `${rect.top + scrollTop}px`
      layer.style.left = `${rect.left + scrollLeft}px`
      layer.style.width = `${rect.width}px`
      layer.style.height = `${rect.height}px`

      shadow.appendChild(style)
      shadow.appendChild(layer)
      // 样式隔离在shadow中，把元素最终添加到body里
      document.body.appendChild(wrapper)
    }

    // 根据xpath获取元素
    function getElement(xpath) {
      return document.evaluate(xpath, document).iterateNext()
    }
  </script>
</body>

</html>
```

## 更多

[xpath in javascript](https://developer.mozilla.org/zh-CN/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)

