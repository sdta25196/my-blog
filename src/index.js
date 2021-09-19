import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from "react-router-dom"
import { routes, RouteWithSubRoutes } from './router'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
