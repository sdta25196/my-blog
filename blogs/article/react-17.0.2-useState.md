## useState

将 React 中的所有状态视为不可变的。

哪些是状态？哪些不是：

它会随着时间的推移保持不变吗？如果是这样，它不是状态。
它是通过props从父母那里传递过来的吗？如果是这样，它不是状态。
您可以根据组件中的现有状态或道具来计算它吗？如果是这样，那绝对不是状态！

setState建议永远使用函数式，可以少踩无数坑。



为什么不建议用嵌套state，因为嵌套的state的修改是非常麻烦且容易出错的

```js
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```
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
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```


简单说一下 Immer，用来解决这个问题非常好