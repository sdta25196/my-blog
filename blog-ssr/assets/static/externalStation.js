import js from '../../public/image/js.jpg'
import jsbench from '../../public/image/jsbench.png'
import icomoon from '../../public/image/icomoon.png'
import python from '../../public/image/python.png'
import astexplorer from '../../public/image/astexplorer.png'
import codepen from '../../public/image/codepen.jpg'
import iptb from '../../public/image/iptb.png'
import webDev from '../../public/image/webDev.png'
import dummyimage from '../../public/image/dummyimage.png'
import tuchong from '../../public/image/tuc.jpg'
import tinypng from '../../public/image/tinypng.jpg'
import google from '../../public/image/google.jpg'
import chrome from '../../public/image/chrome.png'
import default1 from '../../public/image/default1.png'
import default2 from '../../public/image/default2.png'
import chinaFlag from '../../public/image/chinaFlag.jpg'
import ecmaLogo from '../../public/image/ecmaLogo.svg'
import english from '../../public/image/english.svg'
import cssReference from '../../public/image/cssReference.png'
import bzk from '../../public/image/bzk.gif'
import devTool from '../../public/image/devtool.svg'

const EXTERNAL = [
  {
    title: "ECMA",
    link: "https://tc39.es/ecma262/",
    logo: ecmaLogo,
    description: "ECMA262标准文档",
  },
  {
    title: "jsbench",
    link: "https://jsbench.me/",
    logo: jsbench,
    description: "可用来测试、对比 JS 不同代码的性能",
  },
  {
    title: "可视化的javaScript调用栈",
    link: "https://pythontutor.com/visualize.html#mode=edit",
    logo: python,
    description: "以动画的形式展现javascript调用栈",
  },
  {
    title: "AST explorer",
    link: "https://astexplorer.net/",
    logo: astexplorer,
    description: "查看生成的AST语法树",
  },
  {
    title: "tokens 查看器",
    link: "https://esprima.org/demo/parse.html#",
    logo: js,
    description: "javaScript引擎解析器生成的语法树",
  },
  {
    title: "codepen",
    link: "https://codepen.io/pen/",
    logo: codepen,
    description: "在线的代码编辑器",
  },
  {
    title: "ip淘宝",
    link: "https://ip.taobao.com/",
    logo: iptb,
    description: "淘宝IP地址库，提供了restAPI获取地址",
  },
  {
    title: "css reference",
    link: "https://cssreference.io/",
    logo: cssReference,
    description: "一个不错的css示例网站",
  },
  {
    title: "文本对比",
    link: "https://www.jq22.com/textDifference",
    logo: default2,
    description: "在线文本差异对比",
  },
  {
    title: "EXIF信息查看器",
    link: "https://exif.tuchong.com/",
    logo: tuchong,
    description: "图虫EXIF查看器alpha版",
  },
  {
    title: "TinyPNG",
    link: "https://tinypng.com/",
    logo: tinypng,
    description: "图片无损压缩",
  },
  {
    title: "字体在线解析",
    link: "http://blog.luckly-mjw.cn/tool-show/iconfont-preview/index.html",
    logo: default1,
    description: "可在线解析字体文件。ttf、woff、otf",
  },
  {
    title: "在线图片地址",
    link: "https://dummyimage.com/",
    logo: dummyimage,
    description: "可自定义图片大小、文案的在线图片",
  },
  {
    title: "icomoon字体图标",
    link: "https://icomoon.io/",
    logo: icomoon,
    description: "IcoMoon是一个图标解决方案",
  },
  {
    title: "标智客",
    link: "https://www.logomaker.com.cn/",
    logo: bzk,
    description: "在线智能LOGO设计生成",
  },
  {
    title: "google开发者文档",
    link: "https://developers.google.cn/",
    logo: google,
    description: "包含google全部产品文档",
  },
  {
    title: "chrome devtools",
    link: "https://developer.chrome.com/docs/devtools/",
    logo: chrome,
    description: "chrome devtools文档",
  },
  {
    title: "web开发文档",
    link: "https://web.dev/",
    logo: webDev,
    description: "底层且权威的web开发文档",
  },
  {
    title: "5分钟英语",
    link: "http://www.5minuteenglish.com/",
    logo: english,
    description: "碎片时间学英语不错的网站",
  },
  {
    title: "走出去公共服务平台",
    link: "http://fec.mofcom.gov.cn/article/gbdqzn/#",
    logo: chinaFlag,
    description: "政府开发的国别指南，非常实用",
  },
  {
    title: "互联网信息服务投诉平台",
    link: "https://hlwtsxt.miit.gov.cn/#/regist",
    logo: chinaFlag,
    description: "领导专治各种不服",
  },
  {
    title: "开发者武器库",
    link: "https://devtool.tech/",
    logo: devTool,
    description: "各种各样的开发者工具",
  },
]

export default EXTERNAL