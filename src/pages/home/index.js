import { useEffect, useState } from "react"
import { ARTICLE } from "../../assets/static"
import { Layout } from "../../components/common"
import Axios from 'axios'

function Home(props) {
  console.log(ARTICLE[0].name)
  // 测试请求博客文章
  useEffect(() => {
    Axios.get(`${ARTICLE[0].path}${ARTICLE[0].name}`, {
      responseEncoding: 'utf8',
    }).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <Layout>
      <div>
        NB的
      </div>
    </Layout>
  )
}

export default Home