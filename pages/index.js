import { QueryClientProvider, QueryClient } from "react-query"
import { Switch, Route, StaticRouter } from 'react-router-dom';

import { Fragment } from "react";
import Head from 'next/head'

import Home from '../pages/Home/Home'
import DetailPage from '../pages/Detail/DetailPage'

import Search from '../src/components/Search/Search'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossOrigin='anonymous'></link>
        <Search />
      </Head>
      <StaticRouter>
        <Fragment>
          <Switch>
              <Route path="/item/:id" component={DetailPage} />
              <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </StaticRouter>
    </QueryClientProvider>
  )
}
