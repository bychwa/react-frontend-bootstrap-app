import * as React from 'react';
import { Container, Segment, Header, Button, Card } from 'semantic-ui-react';

type AppViewProps = {
  onPing: () => void,
  onPong: () => void,
  app: { isPinging: boolean }
};

export const AppView = (props: AppViewProps) => {
  const thePanther = require('../../assets/thepanther.png');
  const thePantherWhite = require('../../assets/thepanther-white.png');
  return (
    <Container>
      <br />
      <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
      <Card fluid={true}>
        <Card.Content textAlign='center'>
          <img
            src={ props.app.isPinging ? thePantherWhite : thePanther }
            width='30%'
          />
        </Card.Content>
        <Card.Content extra={true}>
          <Segment color={props.app.isPinging ? 'red' : 'blue'} raised={true}>
            <Header
              size='huge' textAlign='center'
              content={props.app.isPinging ? 'PINGING...' : 'PONG!'}
            />
          </Segment>
        </Card.Content>
        <Card.Content textAlign='center'>
          <Button
            primary={true}
            onClick={props.app.isPinging ? props.onPong : props.onPing}
            content={props.app.isPinging ? 'PONG!' : 'PING ME'}
          />
        </Card.Content>
      </Card>
    </Container>);
};
