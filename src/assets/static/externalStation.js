import js from '../image/js.jpg'
import jsbench from '../image/jsbench.png'
import icomoon from '../image/icomoon.png'
import python from '../image/python.png'
import astexplorer from '../image/astexplorer.png'
import codepen from '../image/codepen.jpg'
import iptb from '../image/iptb.png'
import webDev from '../image/webDev.png'
import dummyimage from '../image/dummyimage.png'
import tuchong from '../image/tuc.jpg'
import tinypng from '../image/tinypng.jpg'
import google from '../image/google.jpg'
import chrome from '../image/chrome.png'
import default1 from '../image/default1.png'
import default2 from '../image/default2.png'
import chinaFlag from '../image/chinaFlag.jpg'
import ecmaLogo from '../image/ecmaLogo.svg'
import english from '../image/english.svg'
import cssReference from '../image/cssReference.png'
import bzk from '../image/bzk.gif'
import devTool from '../image/devtool.svg'
import bxm from '../image/bxm.png'
import git from '../image/git.png'
import clipdrop from '../image/clipdrop.png'
import pag from '../image/pag.png'
import dnsCheck from '../image/dnsCheck.png'
import xuanfangyi from '../image/xuanfangyi.png'
import shinescanicon from '../image/shinescanicon.png'

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
  {
    title: "帮小忙",
    link: "https://tool.browser.qq.com/",
    logo: bxm,
    description: "帮小忙：腾讯开发的小工具群",
  },
  {
    title: "testApi",
    link: "https://github.com/AutumnFish/testApi",
    logo: git,
    description: "testApi：提供在线测试数据",
  },
  {
    title: "clipdrop",
    link: "https://clipdrop.co/relight",
    logo: clipdrop,
    description: "clipdrop：处理图片文案、背景、灯光等",
  },
  {
    title: "PAG",
    link: "https://pag.art/docs/pag-flow.html",
    logo: pag,
    description: "PAG：AE直接导出动效，前端调用SDK使用",
  },
  {
    title: "baimiaoapp",
    link: "https://web.baimiaoapp.com/",
    logo: shinescanicon,
    description: "在线OCR",
  },
  {
    title: "dnsCheck",
    link: "https://myssl.com/dns_check.html",
    logo: dnsCheck,
    description: "DNS在线查询",
  },
  {
    title: "济南市住宅和房地产信息",
    link: "https://124.128.246.22:8090/",
    logo: chrome,
    description: "查询济南楼盘信息",
  },
  {
    title: "选房易",
    link: "https://xuanfangyi.com/",
    logo: xuanfangyi,
    description: "选房易-光照模拟",
  },
]

export default EXTERNAL