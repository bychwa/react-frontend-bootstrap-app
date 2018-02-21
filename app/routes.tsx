import * as React from 'react';
import App from './components/app';
import { PageNotFoundView } from './components/errors/404.view';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
      <Route component={PageNotFoundView} />
    </Switch>
  </BrowserRouter>
);
