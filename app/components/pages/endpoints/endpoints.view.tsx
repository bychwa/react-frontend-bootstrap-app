import * as React from 'react';
import { Container, Tab, Header, Loader, Card } from 'semantic-ui-react';
import { EndpointForm } from './endpoint.form';
import { EndpointsTable } from './endpoints.table';
import { EndpointsState } from '../../../redux/reducers/endpoints';
import { CREATE_STATUS } from '../../../utils/constants';

type EndpointsViewProps = {
  onCreateEndpoint: (data: any) => void,
  onFetchEndpoints: () => void,
  state: EndpointsState
  app: { isPinging: boolean }
};
type EndpointsViewState = {
  activeIndex: number
};
export class EndpointsView extends React.Component<EndpointsViewProps, EndpointsViewState> {
  constructor(props: EndpointsViewProps) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    this.props.onFetchEndpoints();
  }
  componentWillReceiveProps(props: EndpointsViewProps) {
    if (this.props.state.create_status === CREATE_STATUS.INIT && props.state.create_status === CREATE_STATUS.DONE) {
      this.setState({ activeIndex: 0 });
      this.props.onFetchEndpoints();
    }
  }

  handleTabChange(_: any, { activeIndex }: any) {
    this.setState({ activeIndex });
  }

  render() {
    const panes = [
      {
        menuItem: { key: 'endpoints', icon: 'table', content: 'Endpoints' },
        render: () =>
          <Tab.Pane
            content={
              <EndpointsTable
                endpoints={this.props.state.endpoints}
              />
            }
          />
      },
      {
        menuItem: { key: 'add_endpoint', icon: 'plus', content: 'Create Endpoint' },
        render: () =>
          <Tab.Pane
            content={
              <EndpointForm
              create_status={this.props.state.create_status}
              onSubmitForm={(_, data) => this.props.onCreateEndpoint(data)}
            />
            }
          />
      }
    ];
    return (
      <Container>
        <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
        <Card fluid={true}>
          <Card.Content>
            <Loader active={this.props.state.loading}/>
            <Tab
              panes={panes} menu={{ pointing: true }}
              activeIndex={this.state.activeIndex}
              onTabChange={this.handleTabChange} />
          </Card.Content>
        </Card>
      </Container>);
  }
}
