import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello Next</h1>

      </Layout>



    </div>
  )
}
