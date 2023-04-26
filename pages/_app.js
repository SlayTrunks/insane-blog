import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from './navbar'

export default function App({ Component, pageProps }) {
  return (<>
  <Head>
    <title>Insane blogs</title>
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
)}
