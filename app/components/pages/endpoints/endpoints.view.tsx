import * as React from 'react';
import { Container, Tab, Header, Card } from 'semantic-ui-react';
import { CreateEndpointForm } from './createendpoint.form';
import { EndpointsTable } from './endpoints.table';
import { EndpointsState } from '../../../redux/reducers/endpoints';

type EndpointsViewProps = {
  onCreateEndpoint: (data: any) => void,
  onFetchEndpoints: () => void,
  state: EndpointsState
  app: { isPinging: boolean }
};

export class EndpointsView extends React.Component<EndpointsViewProps, any> {
  constructor(props: EndpointsViewProps) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchEndpoints();
  }
  render() {
    const panes = [
      {
        menuItem: { key: 'endpoints', icon: 'table', content: 'Endpoints' },
        render: () =>
          <Tab.Pane>
            <EndpointsTable
              endpoints={this.props.state.endpoints}
            />
          </Tab.Pane>
      },
      {
        menuItem: { key: 'add_endpoint', icon: 'plus', content: 'Create Endpoint' },
        render: () =>
          <Tab.Pane>
            <CreateEndpointForm
              onSubmitForm={(_, data) => this.props.onCreateEndpoint(data)}
            />
          </Tab.Pane>
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
  }
}
