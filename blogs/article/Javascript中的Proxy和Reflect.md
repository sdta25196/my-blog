## Proxy

Proxy（代理）用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种`元编程`（meta programming），即对编程语言进行编程。

使用 Proxy 构造函数，用来生成 Proxy 实例。`var proxy = new Proxy(target, handler)`，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

示例：对一个空对象架设一层拦截，重定义该对象属性的读取（get）和设置（set）行为。

```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.count = 1 
// setting count!

++obj.count
// getting count!
// setting count!
// 2
```

如果`handler`没有设置任何拦截，那就等同于直接通向原对象。

```js
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
target.a // "b"
```

Proxy一共支持13种拦截：

* **get(target, propKey, receiver)**：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
* **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
* **has(target, propKey)**：拦截propKey in proxy的操作，返回一个布尔值。
* **deleteProperty(target, propKey)**：拦截delete proxy[propKey]的操作，返回一个布尔值。
* **ownKeys(target)**：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
* **getOwnPropertyDescriptor(target, propKey)**：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
* **defineProperty(target, propKey, propDesc)**：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, * propDescs)，返回一个布尔值。
* **preventExtensions(target)**：拦截Object.preventExtensions(proxy)，返回一个布尔值。
* **getPrototypeOf(target)**：拦截Object.getPrototypeOf(proxy)，返回一个对象。
* **isExtensible(target)**：拦截Object.isExtensible(proxy)，返回一个布尔值。
* **setPrototypeOf(target, proto)**：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
* **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
* **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
  

### revocable方法

`Proxy.revocable()`方法返回一个可取消的 Proxy 实例。

```js
  let target = {};
  let handler = {};
  let {proxy, revoke} = Proxy.revocable(target, handler);
  proxy.foo = 123;
  proxy.foo // 123
  revoke();
  proxy.foo // TypeError: Revoked
```
`Proxy.revocable()`方法返回一个对象，该对象的`proxy`属性是`Proxy`实例，`revoke`属性是一个函数，可以取消`Proxy`实例。上面代码中，当执行`revoke`函数之后，再访问`Proxy`实例，就会抛出一个错误。

`Proxy.revocable()`的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。

### this的问题

使用 proxy 代理后，this便指向了 proxy 代理对象，而不是原本的target对象。

示例：`proxy` 代理 `target`后，`target`内部的`this`就是指向`proxy`，而不是`target`

```js
  const target = {
    m: function () {
      console.log(this === proxy);
    }
  };
  const handler = {};
  const proxy = new Proxy(target, handler);
  target.m() // false
  proxy.m()  // true
```

**有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。**

示例：`getDate()`方法只能在`Date`对象实例上面拿到，如果`this`不是`Date`对象实例就会报错。

```js
  const target = new Date();
  const handler = {};
  const proxy = new Proxy(target, handler);
  proxy.getDate(); // TypeError: this is not a Date object.
```

把`this`绑定到原始对象`target`上，就可以解决这个问题，正常使用。

```js
  const target = new Date('2015-01-01');
  const handler = {
    get(target, prop) {
      if (prop === 'getDate') {
        return target.getDate.bind(target);
      }
      return Reflect.get(target, prop);
    }
  };
  const proxy = new Proxy(target, handler);
  proxy.getDate() // 1
```

### 使用场景

* 在 Web 服务器中，接口返回对象包含各种数据，Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。

* 验证向一个对象的传值操作，拦截`set`，检查`value`,不合法则抛出错误

* 代理操作dom，示例如下：

```js
let view = new Proxy(
  {
    selected: null,
  },
  {
    set: function (obj, prop, newval) {
      let oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 默认行为是存储被传入 setter 函数的属性值
      obj[prop] = newval;

      // 表示操作成功
      return true;
    },
  },
);

let i1 = (view.selected = document.querySelector('body'));
console.log(i1.getAttribute("aria-selected")); // 'true'

```

## Reflect

与proxy一样，ES6新增的可用来操作对象的API。拥有与proxy一样的13个静态方法。其设计目的为：

* 未来将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上

*  修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

```js
  // 老写法
  try {
    Object.defineProperty(target, property, attributes);
    // success
  } catch (e) {
    // failure
  }
  // 新写法
  if (Reflect.defineProperty(target, property, attributes)) {
    // success
  } else {
    // failure
  }
```
*  让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。

```js
  // 老写法
  'assign' in Object // true
  // 新写法
  Reflect.has(Object, 'assign') // true
```

* Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。**不管Proxy怎么修改默认行为，你总可以使用Reflect来保证完成默认行为。**

示例：Proxy方法拦截target对象的属性赋值行为。它采用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能。

```js
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
```

## Proxy实现观察者模式

```js
  const queuedObservers = new Set();
  const observe = fn => queuedObservers.add(fn); // 把观察函数注册到 Set 中
  const observable = obj => new Proxy(obj, {set}); // 注册观察目标，利用代理实现 set 操作时，触发观察函数
  function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
  }
  // 测试
  const person = observable({
    name: '张三',
    age: 20
  });
  // 观察函数
  function print() {
    console.log(`${person.name}, ${person.age}`)
  }
  observe(print);
  // 当对观察目标进行set操作时，触发观察函数
  person.name = '李四';
```
