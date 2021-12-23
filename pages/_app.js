import Head from "next/head"
import "../styles/globals.css"
import { MainLayout } from "../components/layout/MainLayout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnimeService - Main</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
