import Head from 'next/head'
import { Fragment } from 'react'
import { NextPageWithLayout } from '~/types/common.types'
import Layout from "~/components/Layout/Layout.component";

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>WebApp</h1>
      </div>
    </Fragment>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home
