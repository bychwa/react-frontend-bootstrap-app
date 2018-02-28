import * as React from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../menu';
import Dashboard from '../../components/pages/dashboard';
import Endpoints from '../../components/pages/endpoints';
import { Route } from 'react-router-dom';

type AppViewProps = {};

export const AppView = (_: AppViewProps) => {
  return (
    <Container>
      <br/>
      <TopMenu/>
      <Route path='/home' component={Dashboard} />
      <Route path='/endpoints' component={Endpoints}/>
    </Container>);
};
