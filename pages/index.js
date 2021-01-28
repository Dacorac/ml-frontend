import Routes from '../routes'
import Head from 'next/head'
import { Fragment } from 'react'

import Store from '../src/store/Store'

import Search from '../src/components/search'

export default function Home() {
  return (
    <Fragment>
      <Store>
        <Search />
        <Routes />
      </Store>
    </Fragment>
  )
}
