import { QueryClientProvider, QueryClient } from "react-query"
import { Switch, Route, StaticRouter } from 'react-router-dom';

import Home from '../pages/Home/Home'
import DetailPage from '../pages/Detail/DetailPage'
import fetchItems from '../src/services/items.service'
import { Fragment } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetchItems,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
