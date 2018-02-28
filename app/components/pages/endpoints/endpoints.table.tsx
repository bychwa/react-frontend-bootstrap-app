import * as React from 'react';
import { Table, Header, Label, Divider, Container } from 'semantic-ui-react';

export const EndpointsTable = () => (
  <Container>
    <Header as='h3'>Third Header</Header>
    <Divider />
    <Table basic='very' selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1} textAlign='center'>Status</Table.HeaderCell>
          <Table.HeaderCell width={5}>Site</Table.HeaderCell>
          <Table.HeaderCell width={4}>Type</Table.HeaderCell>
          <Table.HeaderCell width={4}>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell textAlign='center'><Label color='green' horizontal>up</Label></Table.Cell>
          <Table.Cell>olas.heslb.go.tz</Table.Cell>
          <Table.Cell>HTTP</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'><Label color='green' horizontal>up</Label></Table.Cell>
          <Table.Cell>necta.go.tz</Table.Cell>
          <Table.Cell>HTTP</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'><Label color='red' horizontal>down</Label></Table.Cell>
          <Table.Cell>necta.go.tz</Table.Cell>
          <Table.Cell>HTTPS</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);
