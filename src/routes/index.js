import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import Login from '../ui/Login';
import Agency from '../ui/Agency';
import NotFound from '../ui/NotFound';
import Schedule from '../BGR/Schedule';

export const history = createBrowserHistory();

const routes = (
	<Router history={history}>
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/agency" exact component={Agency} />
			<Route path="/schedule" exact component={Schedule} />
			<Route path="*" component={NotFound} />
		</Switch>
	</Router>
);

export default routes;
