import * as React from 'react';
import { Container, Tab, Header, Card } from 'semantic-ui-react';
import { CreateEndpointForm } from './createendpoint.form';
import { EndpointsTable } from './endpoints.table';

type EndpointsViewProps = {
  app: { isPinging: boolean }
};

export const EndpointsView = (_: EndpointsViewProps) => {
  const panes = [
    {
      menuItem: { key: 'endpoints', icon: 'table', content: 'Endpoints' },
      render: () => <Tab.Pane><EndpointsTable /></Tab.Pane>
    },
    {
      menuItem: { key: 'add_endpoint', icon: 'plus', content: 'Create Endpoint' },
      render: () => <Tab.Pane><CreateEndpointForm /></Tab.Pane>
    }
  ];
  return (
    <Container>
      <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
      <Card fluid={true}>
        <Card.Content>
          <Tab panes={panes} menu={{ pointing: true }} />
        </Card.Content>
      </Card>
    </Container>);
};
