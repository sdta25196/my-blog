import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/home/sass/index.module.scss'

import { Navigation, RightBox } from "../components/home"
import { Loading } from "../components/common"
import marked from 'marked'

marked.use({
  renderer: {
    image(herf, _, text) {
      return `<img data-src="/${herf}" alt="${text}" src="" width="0" height="0">`
    }
  }
})
// import fs from 'fs'
// import { resolve } from 'path'

// export async function getStaticProps({ paths }) {
//   let a = fs.readFileSync(resolve(__dirname, '../../../../blogs/article/chrome控制台使用.md'), 'utf8')
//   return {
//     props: {
//       str: a
//     },
//   }
// }


export default function Home() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.main}>
        <Navigation pathname={'/article'} />
        <RightBox>
          666
        </RightBox>
        <div className={styles.icp}>
          900t.cn © 2021-2027 版权所有 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">鲁ICP备2021046010号</a>
        </div>
      </div>
    </div>
  )
}
