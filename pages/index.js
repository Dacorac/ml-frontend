import Routes from '../routes'
import Head from 'next/head'
import { Fragment } from 'react'

import Store from '../src/store/Store'

import Search from '../src/components/search'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mercado Libre | Prueba técnica</title>
        <meta property="og:type" content="company" />
        <meta property="og:title" content="Mercado Libre | Prueba técnica" />
        <meta property="og:description" content="Aplicación desarrollada utilizando NextJS para prueba técnica MercadoLibre." />
        <meta name="keywords" content="ReactJS, NextJS, HTML, CSS, JavaScript" />
        <meta name="author" content="Daniela Córdoba" />
      </Head>
      <Store>
        <Search />
        <Routes />
      </Store>
    </Fragment>
  )
}
