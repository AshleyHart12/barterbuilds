import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trade Goods, Get Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Barter Builds" />
        <p className="description">Trade Goods, Get Online
        </p>
      </main>

      <Footer />
    </div>
  )
}
