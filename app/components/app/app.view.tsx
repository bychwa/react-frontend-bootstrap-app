import * as React from 'react';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../components/pages/dashboard';
import { Route, Switch } from 'react-router-dom';

type AppViewProps = {};

export const AppView = (_: AppViewProps) => {
  return (
    <Container>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </Container>);
};
