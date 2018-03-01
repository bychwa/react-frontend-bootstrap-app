import * as React from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../menu';
import Dashboard from '../../components/pages/dashboard';
import Endpoints from '../../components/pages/endpoints';
import { Route, Switch } from 'react-router-dom';

type AppViewProps = {};

export const AppView = (_: AppViewProps) => {
  return (
    <Container>
      <br />
      <TopMenu />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/endpoints' component={Endpoints} />
      </Switch>
    </Container>);
};
