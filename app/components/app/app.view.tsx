import * as React from 'react';
import { Container, Segment, Header, Button, Card } from 'semantic-ui-react';

type AppViewProps = {
  onPing: () => void,
  app: { isPinging: boolean }
};

export const AppView = (props: AppViewProps) => {
  return (
    <Container>
      <br />
      <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
      <Card fluid>
        <Card.Content extra>
          <Segment color={ props.app.isPinging ? 'red' : 'blue' }>
            <Header
              size='huge' textAlign='center'
              content={ props.app.isPinging ? 'PINGING...' : 'PONG!' }
            />
          </Segment>
        </Card.Content>
        <Card.Content textAlign='center'>
          <Button primary onClick={() => props.onPing()} content='PING ME' />
        </Card.Content>
      </Card>
    </Container>);
};
