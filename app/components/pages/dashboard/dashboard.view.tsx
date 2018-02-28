import * as React from 'react';
import { Container, Segment, Header, Button, Card } from 'semantic-ui-react';
type DashboardViewProps = {
  onPing: () => void,
  onPong: () => void,
  app: { isPinging: boolean }
};

export const DashboardView = (props: DashboardViewProps) => {
  return (
    <Container>
      <Header size='huge' content='START HERE!' textAlign='center' style={{ color: 'white' }} />
      <Card fluid={true}>
        <Card.Content textAlign='center'>
          <Segment>
            <br/><br/>
          </Segment>
        </Card.Content>
        <hr/>
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
