import { Router, Route, Switch } from "react-router-dom";
import Schedule from '../BGR/Schedule';
import React from "react";
import { createBrowserHistory } from "history";
import Login from "../ui/Login";
import Agency from "../ui/Agency";
import Family from "../ui/Family";
import BGR from "../ui/BGR";
import NotFound from "../ui/NotFound";

export const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/agency" exact component={Agency} />
      <Route path="/family" exact component={Family} />
	  <Route path="/schedule" exact component={Schedule} />
      <Route path="/bgr" exact component={BGR} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default routes;
