import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { loadScript } from "./tools"

/**
*
* @author : 田源
* @date : 2022-07-22 09:42
* @description : 路由监听组件
*
*/
function RouterListen({ children }) {
  let history = useHistory()
  useEffect(() => {
    const addCNZZ = () => {
      loadScript("https://s9.cnzz.com/z_stat.php?id=1281142630&web_id=1281142630", () => { })
    }
    addCNZZ()
    const unListen = history.listen(() => {
      addCNZZ()
    })
    return unListen
  }, [history])
  return children
}

export default RouterListen