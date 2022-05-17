import React, { Suspense, lazy } from "react";

import { Route, Switch } from "react-router-dom";

const AppLayout = lazy(() => import("../Components/Layout/AppLayout"));

import Machine from "../Components/App/Machine/Machine";
import Transaction from "../Components/App/Transaction/Transaction";
import UserTransaction from "../Components/App/Transaction/UserTransaction";

function Router() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Machine} />
        <Route path="/transactions" exact component={Transaction} />
        <Route path="/userTransactions" exact component={UserTransaction} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Suspense>
  );
}

export default Router;
