## useState

使用useState是为了让函数式组件中有状态可用，所有state(状态)都被视为不可变(Immutable)的。

hooks 只能在**函数式组件的顶层**或者在**自定义hook**中调用。

我们从函数签名开始：
```js
// useState普通用法
const [state,setState] = useState(initialState)

// useState的函数签名
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

// setState的函数签名
type Dispatch<A> = A => void;
type BasicStateAction<S> = (S => S) | S;
```

通过useState的函数签名我们可以看到useState初始值有两种方式：传值和传回调函数。

1. **传值**

传值是我们最常用的方式`const [state,setState] = useState(initialState)`，每次组件被重新渲染的时候，都会重新执行一次

2. **传回调函数**

传回调函数的使用场景为：当我们需要**避免重新创建初始状态**时，就是用传回调函数的方式

```js
function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

const [todos, setTodos] = useState(createInitialTodos);

```

两种初始化state的方式，主要差距在效率上。建议在没有明显卡顿之类体验不好的组件中，尽量少用回调函数式的写法。


通过setState的函数签名我们可以看到setState有两种使用方式：传值和传回调函数。其最主要的区别是回调函数会保留上一次的state。

我们建议在不熟练的情况下永远使用回调函数，可以少踩无数坑。

假设`age`是42，下面两段程序可看到明显差异。
```js
// 传值的方式
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

// 传回调函数
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```


### 哪些属性才是状态

* 它会随着时间的推移保持不变吗？如果是，它不是状态。- 他是个常量
* 它是通过props从父组件那里传递过来的吗？如果是，它不是状态。- 他是props
* 我们可以根据组件中的现有state或props来计算它吗？如果是，它不是状态！ - 他是普通变量

完全不符合以上三点的属性，才能作为状态使用，且state应当越少越好，通常更多的state就代表着更多的bug。

## state编写的原则

* **合并相关状态**。如果总是同时更新两个或多个状态变量，可以考虑将它们合并到单个状态变量中。
* **避免状态矛盾**。当state与一个或多个state存在相互矛盾时，就容易出错。应尽量避免这种情况。
* **避免状态冗余**。如果可以从props或现有的state变量中计算出一些信息，那么就不应该把这些信息放到组件的状态中。
* **避免状态重复**。当相同的数据在多个状态变量之间或嵌套对象中复制时，我们会很难保持它们的同步。
* **避免状态深度嵌套**。深度分层状态既不方便更新还容易带来bug。应该尽可能采用扁平的方式来构造状态。不过`immer`可以解决这个问题

### 合并相关状态

假设我们有一个监控鼠标坐标相关的需求，需要使用状态**坐标点x**和**坐标点y**，感受一下下面两种写法

```js
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const handle=(x,y)=>{
    setX(x);
    setY(y);
  }
```
和
```js
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  setPosition(nextPosition)
```

### 避免状态矛盾

依然是刚才那个监控鼠标坐标相关的需求，我们有两个状态:**鼠标移动**、**鼠标停止**

```js
  const [isMoving, setIsMoving] = useState(false);
  const [isStop, setIsStop] = useState(true);
  
  useEffect(()=>{
    if(isMoving){ /** 如果鼠标移动触发的逻辑*/ }
    if(isStop){ /** 如果鼠标停止触发的逻辑*/ }
  },[isStop,isMoving])

  // 某个处理逻辑A
  const handleA=()=>{
    setIsMoving(true)
    setIsStop(false)
  }

  // 某个处理逻辑B
  const handleB=()=>{
    setIsMoving(false)
    setIsStop(true)
  }
```
以上代码会给我们的程序留下一个非常坑的漏洞。**某人可以将`isMoving`和`isStop`设置成同样的值！**。而且随着我们组件的复杂度上升，这件事情发生的概率就越大。

这种需求应该改成如下代码：
```js
const [moveState, setMoveState] = useState('stop'); // stop、moving
  
  useEffect(()=>{
    if(moveState === 'stop'){ /** 如果鼠标移动触发的逻辑*/ }
    if(moveState === 'stop、moving'){ /** 如果鼠标停止触发的逻辑*/ }
  },[moveState])

  // 某个处理逻辑A
  const handleA=()=>{
    setMoveState('moving')
  }

  // 某个处理逻辑B
  const handleB=()=>{
    setMoveState('stop')
  }
```

再例如，一个表单组件中我们需要对`输入中`和`提交中`中进行分别处理逻辑，那么他们也应当被写成一个state。

### 避免状态冗余

假设我们有一个获取用户`姓`+`名`的需求，需要使用状态**姓**和**名**和**姓名**

```js
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }
```

以上代码中`fullName`就显得非常多余，且会带来更多脑力负担，制造bug。此处`fullName`应该作为一个普通变量存在而不是state

```js
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + lastName

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
```

示例: 一个状态冗余带来的bug, 渲染`<Parent>`组件，点击按钮会发现，不生效。

```js
function createInitialTodos(x) {
  const initialTodos = [];
  for (let i = 0; i < x; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

function Parent() {
  let [length, setLength] = useState(5)

  return (
    <>
      <TodoList length={length} />
      <button onClick={() => {
        setLength(x => x + 5)
      }}>增加5</button>
    </>
  )
}

function TodoList({ length }) {

  const [todos, setTodos] = useState(createInitialTodos(length));
  return (
    <>
     <button onClick={() => {
        setTodos([{
          id: todos.length,
          text: 'Item '
        }, ...todos])
      }}>增加一个</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
```

**传递给useState的参数是初始状态，就像在类组件的constructor中设置状态一样，组件不卸载重装就不会更新状态**

如果真的遇到这类问题，给`parent`组件添加`key={length}`可以解决。

或者使用`useEffect`去依赖对应的`props`即可

### 避免状态重复

以下代码中，展示了因为状态重复而带来的bug。用户选择了某个元素之后，进行修改的话，用户的选择是不会变的。

```js
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}
```

实际上删除重复状态，仅保存`id`即可解决这个bug

```js
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

```



### 避免状态深度嵌套

嵌套的state的修改是非常麻烦且容易出错的，感受一下代码

示例一：深度嵌套的对象使用第三者变量来进行辅助修改
```js
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
const nextArtwork = { ...person.artwork, city: 'beijing' }; // 展开二级操作
const nextPerson = { ...person, artwork: nextArtwork };    // 把二级对象合并回去
setPerson(nextPerson);
```

示例一：深度嵌套的对象需要多次**展开操作**来进行修改

```js
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
setPerson({
  ...person, // 展开属性
  artwork: { 
    ...person.artwork, // 展开二级属性
    city: 'beijing' // 修改city属性
  }
});
```
> 关于扁平化，可以自行深入学习，这里就不提了

## immer

顺便说一下`immer`非常好的解决状态嵌套问题，当然，这不代表着我们支持深度嵌套的state。

```js
import { useImmer } from "use-immer";

const [person, setPerson] = useImmer({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

setPerson((draft) => {
  draft.artwork.title="changeing~"
});
```



## useState常见问题及解决方案

1. 当我们想要使用nextState时, 却发现无论如何都拿不到新的值。
```js

function handleClick() {
  console.log(count);  // 0
  setCount(count + 1); 
  console.log(count);  //  0!

  setTimeout(() => {
    console.log(count); //  0!
  }, 5000);
}
```

需要我们单独存一下数据去使用
```js
const nextCount = count + 1;
setCount(nextCount);

console.log(count);     // 0
console.log(nextCount); // 1
```

2. 修改数据但是不生效

```js
  let [arr,setArr] = useState([1,2,3])
  setArr(arr=>{
    arr.push(5)
    return arr
  })

```

应该这么写：

```js
  let [arr,setArr] = useState([1,2,3])
  setArr(arr=>[...arr,5])
```


3. setState使用函数的时候

```js
const [fn, setFn] = useState(someFunction);

function handleClick() {
  setFn(someOtherFunction);
}
```

应该这么写：
```js
const [fn, setFn] = useState(() => someFunction);

function handleClick() {
  setFn(() => someOtherFunction);
}
```