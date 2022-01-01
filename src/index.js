import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Loading } from './components/common';
import { routes, RouteWithSubRoutes } from './router'

if (process.env.NODE_ENV === 'production') {
  const noop = () => undefined;
  const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (typeof DEV_TOOLS === 'object') {
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === 'function' ? noop : [];
    }
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
