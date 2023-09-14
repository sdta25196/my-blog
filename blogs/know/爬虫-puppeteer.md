## 简介
  Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。 
  通常用来做为爬虫使用，但是只要与chrome有关的工作都可以使用，比如自动化测试，扩展测试等。

## 示例
```js
  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
  })();
```

### 开启“有头”模式
```js
  const browser = await puppeteer.launch({
    headless:false
  });
```

### 复制操作
```js
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyV');
  await page.keyboard.up('Control');
```
### 屏幕截图
  区域截图
```js
  await page.screenshot({
    type: 'jpeg',
    path: 'exampl1e.jpg',
    quality: 100,
    clip: { // 截图区间受屏幕大小影响，用clip可以处理，
      x: 0,
      y: 0,
      width: 200,
      height: 600
    }
  })
```
  元素截图
```js
  let ele = await page.$('.ele')
  await ele.screenshot({
    path: "ele.png", 
  })
```

### 元素操作

ele.evaluate
```js
  let box = await page.$(`.element`)
  let content = await box.evaluate(node => node.innerText)
  console.log(content)
```

page.$eval

```js
  let content = await page.$eval(`.sass_content__3O4ZQ div[role="textbox"]`,node => node.innerText)
  console.log(content)
```

### 使用本地的chrome浏览器

1. 右键chrome快捷方式，选择属性 -> 目标，在最后添加内容：` --remote-debugging-port=9222`

2. puppeteer程序中，要获取chrome信息：

```js
  const axios  = require('axios');
  const puppeteer=require('puppeteer');

  (async()=>{
      let wsKey = await axios.get('http://localhost:9222/json/version'); // 请求信息
      let browser=await puppeteer.connect({
          browserWSEndpoint: wsKey.data.webSocketDebuggerUrl,  // 把chrome信息给puppeteer
          defaultViewport:null
      });
      let page=await browser.newPage()
      await page.goto('https://900t.cn');

  })()
```
3. 需要注意，运行程序时，需要先启动配置了目标的chrome浏览器。

## 更多

[puppeteer 文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v12.0.1&show=outline)

[puppeteer github](https://github.com/puppeteer/puppeteer)