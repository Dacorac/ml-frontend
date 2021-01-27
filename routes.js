import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/detail";

import HomePage from './pages/home'
import ItemsPage from './pages/items'

function Routes() {
    return (
      <div style={{display: "flex"}}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/items" exact component={ItemsPage} />
          <Route path="/items/:id" component={DetailPage} />
        </Switch>
      </div>
    );
  }
  
  export default Routes;