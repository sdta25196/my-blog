## javascript-责任链模式

责任链模式就是把任务一级一级向下传，直到处理成功或者处理者全部失败为止。

此处的示例功能为：多级会员制度，不同的会员年限，分配不同的会员优惠卡

```js

class DutyChain {

  #handlerArray = []

  addHandler(handler) {
    this.#handlerArray.push(handler)
  }

  handle(vipYear) {
    this.#handlerArray.forEach(handler => {
      handler(vipYear)
    })

    for (let i = 0; i < this.#handlerArray.length; i++) {
      const result = this.#handlerArray[i](vipYear)
      if (result) {
        return result
      }
    }

    return "未能获得Vip优惠卡"
  }
}

function oneYear(vipYear) {
  if (vipYear.toString() === '1') {
    return '一年VIP优惠卡'
  }
  return false
}

function twoYear(vipYear) {
  if (vipYear.toString() === '2') {
    return '两年VIP优惠卡'
  }
  return false
}
function threeYear(vipYear) {
  if (vipYear.toString() === '3') {
    return '三年VIP优惠卡'
  }
  return false
}



const dutyChain = new DutyChain()

const vipYear = 3

dutyChain.addHandler(oneYear)
dutyChain.addHandler(twoYear)
dutyChain.addHandler(threeYear)

const getCard = dutyChain.handle(vipYear)

console.log(getCard)

```

至此，便完成了一个使用责任链模式的优惠卡功能。如果后续产品提出修改，说要新增五年优惠卡以及删掉一年优惠卡。

我们只需要简单的新增一个五年优惠卡方法与删除一年优惠卡即可。

```js

// 新增五年优惠卡函数
function threeYear(vipYear) {
  if (vipYear.toString() === '5') {
    return '五年VIP优惠卡'
  }
  return false
}

// dutyChain.addHandler(oneYear)  - 删除此行。oneYear函数不必删除。
dutyChain.addHandler(twoYear)
dutyChain.addHandler(threeYear)
dutyChain.addHandler(fiveYear)   // + 把五年优惠卡加入责任链。

```

与使用简单的`if else`相比，虽然代码开发阶段的复杂性增加了，但是后续的维护变的非常方便，且代码更加符合开闭原则、代码耦合性也更低。

各类变种责任链模式可以自行开发尝试。