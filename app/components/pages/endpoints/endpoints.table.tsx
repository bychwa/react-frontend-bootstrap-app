import * as React from 'react';
import { Table, Dropdown, Label, Container } from 'semantic-ui-react';
import { RawEndpoint } from '../../../utils/backend';

export const EndpointsTable = (props: { endpoints: RawEndpoint[] }) => (
  <Container>
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
          props.endpoints.map((endpoint) => (
            <Table.Row key={endpoint._id}>
              <Table.Cell textAlign='center'><Label color='green' horizontal>up</Label></Table.Cell>
              <Table.Cell>{endpoint.name}</Table.Cell>
              <Table.Cell>{endpoint.options.url}</Table.Cell>
              <Table.Cell textAlign='center'>{endpoint.type}</Table.Cell>
              <Table.Cell textAlign='center'>{(endpoint.options.method || '').toUpperCase()}</Table.Cell>
              <Table.Cell textAlign='center'>{endpoint.interval}</Table.Cell>
              <Table.Cell textAlign='center'>
              <Dropdown text='Action' icon='settings' floating labeled button className='icon'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='pause circle' text='Pause' />
                    <Dropdown.Item icon='edit' text='Edit' />
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
