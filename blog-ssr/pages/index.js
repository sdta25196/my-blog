import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import fs from 'fs'
import { resolve } from 'path'

// export async function getStaticProps({ paths }) {
export async function getServerSideProps() {
  let a = fs.readFileSync(resolve(__dirname, '../../../../blogs/article/chrome控制台使用.md'), 'utf8')
  // const str = await new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(a)
  //   }, 1000)
  // })
  return {
    props: {
      str: a
    },
  }
}


export default function Home({ str }) {
  const [str1, setStr] = useState()
  useEffect(() => {
    setStr(777)
  }, [])
  return (
    <div className={styles.container}>
      {str}
      {str1}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Image src='/favicon.ico' width={50} height={50} />
    </div>
  )
}
