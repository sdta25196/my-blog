8个JavaScript代码片段

## 获取文件后缀名
使用场景：上传文件判断后缀名

```javascript
/**
 * 获取文件后缀名
 * @param {String} filename
 */
 export function getExt(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}
```
```javascript
getExt("1.mp4") //->mp4
```

## 复制内容到剪贴板
```javascript
export function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}

```
```javascript
//如果复制成功返回true
copyToBoard('lalallala')
```
原理：

创建一个textare元素并调用select()方法选中
document.execCommand('copy')方法，拷贝当前选中内容到剪贴板。

## 休眠多少毫秒

```javascript
/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//使用方式
const fetchData=async()=>{
 await sleep(1000)
}
```

## 生成随机字符串

```javascript
/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
export function uuid(length, chars) {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 8
    var result = ''
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}
```

```javascript
//第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
uuid()  
```
使用场景：用于前端生成随机的ID,毕竟现在的Vue和React都需要绑定key

## 简单的深拷贝
```javascript
/**
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}
```

```javascript
const person={name:'xiaoming',child:{name:'Jack'}}
deepCopy(person) //new person
```
缺陷：只拷贝对象、数组以及对象数组，对于大部分场景已经足够

## 数组去重

```javascript
/**
 * 数组去重
 * @param {*} arr
 */
export function uniqueArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The first parameter must be an array')
    }
    if (arr.length == 1) {
        return arr
    }
    return [...new Set(arr)]
}
```

```javascript
uniqueArray([1,1,1,1,1])//[1]
```
原理是利用Set中不能出现重复元素的特性

## 对象转化为FormData对象

```javascript
/**
 * 对象转化为formdata
 * @param {Object} object
 */

 export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}
```
使用场景：上传文件时我们要新建一个FormData对象，然后有多少个参数就append多少次，使用该函数可以简化逻辑

```javascript
let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
```

## 保留到小数点以后n位
```javascript
// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
    if (typeof number != 'number') {
        number = Number(number)
    }
    return Number(number.toFixed(no))
}
```
使用场景：JS的浮点数超长，有时候页面显示时需要保留2位小数