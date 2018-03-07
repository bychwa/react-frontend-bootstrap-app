import * as React from 'react';
import { Table, Dropdown, Label, Container } from 'semantic-ui-react';
import { RawEndpoint } from '../../../utils/backend';
import { EndpointEdit } from './endpoints.edit';

const getStatusColor = (status = '200') => {
  return status === '200' ? 'green' : 'red';
};

type EndpointsTableProps = { endpoints: RawEndpoint[] };
export class EndpointsTable extends React.Component<EndpointsTableProps, any> {
  constructor(props: EndpointsTableProps) {
    super(props);
    this.state = {
      editEndpoint: false,
      editEndpointIndex: 0
    };
    this.handleEditEndpoint = this.handleEditEndpoint.bind(this);
  }

  handleEditEndpoint = (index: number) => {
    this.setState({
      editEndpoint: true,
      editEndpointIndex: index
    });
  }

  render() {
    return (
      <Container>
        <EndpointEdit
          active={this.state.editEndpoint}
          endpoint={this.props.endpoints[this.state.editEndpointIndex]}
        />
        <Table basic='very' selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1} textAlign='center'>Status</Table.HeaderCell>
              <Table.HeaderCell width={4}>Name</Table.HeaderCell>
              <Table.HeaderCell width={3}>URL</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Type</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Method</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Interval</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.endpoints.map((endpoint, index) => (
                <Table.Row key={endpoint._id}>
                  <Table.Cell textAlign='center'><Label color={getStatusColor(endpoint.status)} horizontal>{endpoint.status}</Label></Table.Cell>
                  <Table.Cell>{endpoint.name}</Table.Cell>
                  <Table.Cell>{endpoint.options.url}</Table.Cell>
                  <Table.Cell textAlign='center'>{endpoint.type}</Table.Cell>
                  <Table.Cell textAlign='center'>{(endpoint.options.method || '').toUpperCase()}</Table.Cell>
                  <Table.Cell textAlign='center'>{endpoint.interval}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Dropdown text='Action' icon='settings' floating labeled button className='icon'>
                      <Dropdown.Menu>
                        <Dropdown.Item icon='pause circle' text='Pause' />
                        <Dropdown.Item icon='edit' text='Edit' onClick={() => this.handleEditEndpoint(index)} />
                        <Dropdown.Item icon='cancel' text='Delete' />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </Container>
    );
  }
}
