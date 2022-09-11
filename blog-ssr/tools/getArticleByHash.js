import { BLOGTYPE, ARTICLE, KNOW, TRANSLATE } from "../assets/static"
/** 
 * type:文章类型。
 * hash:文章hash值 
 */
function getArticleByHash(type, hash) {
  switch (type) {
    case BLOGTYPE.article:
      return ARTICLE.find(e => e.hash === hash)
    case BLOGTYPE.know:
      return KNOW.find(e => e.hash === hash)
    case BLOGTYPE.translate:
      return TRANSLATE.find(e => e.hash === hash)
    default:
      new Error("文章详情类型出错")
      break;
  }
}

export default getArticleByHash