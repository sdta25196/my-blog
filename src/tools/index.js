import getArticleByHash from './getArticleByHash'

export {
  getArticleByHash
}
/**
*
* @author : 田源
* @date : 2022-07-05 13:41
* @description : 动态加载js
* @param {String} url js地址
* @param {Function} callback 回调函数
*/

export function loadScript(url, callback) {
  let script = document.createElement("script")
  script.type = "text/javascript"
  if (typeof callback !== "undefined") {
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null
          callback()
        }
      }
    } else {
      script.onload = function () {
        callback()
      }
    }
  }
  script.src = url
  if (typeof document !== "undefined") {
    document.head.appendChild(script)
  }
}
