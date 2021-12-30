## slate简介
  **当前版本号0.66.5**

  >  slate is a completely customizable framework for building rich text editors.
  
  slate 是一个用于构建富文本编辑器的完全可定制的框架。

  个人理解，slate可用来作为一个富文本编辑器内核，在此基础上，可以完全自主的开发自己的富文本编辑器

  如果对富文本编辑器的自定义需求较多，slate是不二之选

  **tips: 需要使用者有一定的富文本相关的技能基础,例如： Range、Selection、anchor、focus等，可在MDN搜索查阅**

## 安装
  `yarn add slate slate-react`

## 常用核心概念
  * `NodeEntry` 迭代slate文档树时返回的对象，由Node 和 Path组成
  * `Node` Node是一个联合类型，可以是 Editor | Element |Text
    * `Element` 文档树中的元素,元素可以自定义属性，可以设置块级元素和行内元素，可以作为其他 Node 的父节点
    * `Text` 文档中的内容，是Element的子节点，也是文档树中的叶子节点
    * `Editor` 编辑器对象 - 他有一堆用来操作编辑器的方法
  * `Location` 一个联合类型 可以是  Path | Point | Range
    * `Path` 代表某个Node的路径
    * `point` 代表文档中某个点
    * `Range` 范围，由起始两个point组成
  * `Transforms` 辅助编辑器对文档树操作的工具

  > 简单说就是，Editor作为编辑器对象，利用Location操作由各种Node组成的文档树，来实现对编辑器的完全控制，操作过程可使用Transforms辅助进行

## 一些常用操作

### 指定编辑器获取焦点
  ```JS
  ReactEditor.focus(editor)
  ```

### 编辑器全部选中
  ```JS
    Transforms.select(editor, [])
  ```
### 设置编辑器选区

  ```JS
    Transforms.select(editor, {
      anchor: { path:[0,1], offset: 0 },
      focus: { path:[0,1], offset: 2 },
    })
  ```
### 给编辑器选区添加指定的标记

  编辑器需要先选中

  ```JS
    editor.addMark(key, value)
  ```

### 给编辑器选区删除指定的标记

  编辑器需要先选中
  ```JS
    editor.removeMark(key)
  ```

### 获取指定属性的Node
  ```js
  let arr = Editor.nodes(editor, {
    match: n => n.ERR_HASH === 123, // 这里指定获取了属性 ERR_HASH = 123的节点
  })
  // arr 是一个generate，可使用for of循环遍历
  for(let [node,path] of arr){
    // todo
  }
  ```

### 把选区合并
  ```js
    Transforms.collapse(editor, { edge: 'focus' })  // 合并到focus位置
  ```

### 替换文案
  ```js
    // 可提前设置选区，也可以使用第三个参数设置范围 
    Transforms.insertText(editor, '替换文案')
  ```

## slate架构
  slate 作为一个编辑器框架，分层设计非常明显。查阅源码可看到 slate 仓库下包含四个 package：

  * slate：这一部分是编辑器的核心，定义了数据模型（model），操作模型的方法和编辑器实例本身
  * slate-history：以插件的形式提供 undo/redo 能力
  * slate-react：以插件的形式提供 DOM 渲染和用户交互能力，包括光标、快捷键等等
  * slate-hyperscript：让用户能够使用 JSX 语法来创建 slate 的数据
### model（模型）
  slate定义的model是一棵由Node组成的树形结构。包含三种类型`Element`、`Editor`、`Text`, 用户可以自行拓展 Node 的属性，例如通过添加 type 字段标识 Node 的类型。

### selection（选区）
  slate中的selection，使用`Path + offset = Point`的设计，两个`Point`即可组件一个`Range`，即可表示选区。
  ```js
    export interface Range {
      anchor: Point // 选区开始的位置
      focus: Point // 选区结束的位置
    }
  ```
### Transforms（变换）
  slate中使用Transforms来实现对model的变换，由`Transforms`提供的一系列方法生成`Operation`,slate对Operation进行处理来触发model变换

通过 Transforms 所提供的一系列方法生成 Operation，这些方法大致分成四种类型：
  * `GeneralTransforms` 它并不生成 Operation 而是对 Operation 进行处理，只有它能直接修改 model，其他 transforms 最终都会转换成 GeneralTransforms 中的一种。
  * `NodeTransforms`  对 Node 的操作方法
  * `SelectionTransforms` 对选区的操作方法
  * `TextTransforms`  对文本操作方法

基本Operation只有9个：
  * insert_node：插入一个 Node
  * insert_text：插入一段文本
  * merge_node：将两个 Node 组合成一个
  * move_node：移动 Node
  * remove_node：移除 Node
  * remove_text：移除文本
  * set_node：设置 Node 属性
  * set_selection：设置选区位置
  * split_node：拆分 Node

### 插件机制
  slate 提供了覆写编辑器实例editor上的方法的功能，可以自由的修改editor上的方法。

  slate-react 提供的 withReact如下：
  ```js
    export const withReact = <T extends Editor>(editor: T) => {
      const e = editor as T & ReactEditor
      const { apply, onChange } = e

      e.apply = (op: Operation) => {
        // ...
        apply(op)
      }

      e.onChange = () => {
        // ...
        onChange()
      }
    }
  ```
  
### slate-react
  slate的model 转换成view层，是由slate-react实现的
  
  slate-react提供了`Editable`、 `Children`、 `Element`、 `Leaf`、 `String` 、`Text`组件，利用这些组件可以方便的处理于渲染model。

  还提供了一些方便的钩子
  
  * `useFocused` 获取编辑器当前`focused`状态
  * `useReadOnly` 获取编辑器当前`readonly`状态
  * `useSelected` 获取元素当前`selected`状态
  * `useSlate` 从`React`上下文中获取当前编辑器对象。每当编辑器中发生更改时重新渲染上下文
  * `useSlateStatic` 从`React`上下文中获取当前编辑器对象。不渲染上下文的`useSlate`版本

## 更多

  * [slate示例](https://www.slatejs.org/examples/richtext)
  * [slate文档](https://docs.slatejs.org/)
  * [slate源码](https://github.dev/ianstormtaylor/slate)