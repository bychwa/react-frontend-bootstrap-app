import * as React from 'react';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';
export const Routes = () => (
  <BrowserRouter>
    <Route path='/' component={App} />
  </BrowserRouter>
);
