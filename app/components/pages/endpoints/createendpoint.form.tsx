import * as React from 'react';
import { Form, Divider, Button, Segment, Header } from 'semantic-ui-react';

type CreateEndpointFormProps = {};

type CreateEndpointFormState = {
  name: string, type: string,
  interval: string, url: string,
  protocol: string,
  method: string,
  timeout: string
};

export class CreateEndpointForm extends React.Component<CreateEndpointFormProps, CreateEndpointFormState> {

  constructor (props: CreateEndpointFormProps) {
    super(props);
    this.state = {
      name: '', type: '', interval: '', url: '',
      protocol: '', method: '', timeout: ''
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput (_: any, data: any) {
    this.setState({
      [data.name]: data.value
    });
  }

  render () {
    const endpoint = this.state;
    const PROTOCOL_TYPES = [{ text: 'http://', value: 'http' }, { text: 'https://', value: 'https' }];
    const METHOD_TYPES = [{ text: 'GET', value: 'GET' }, { text: 'POST', value: 'post' }];
    return (
      <Segment>
        <Header as='h3'> Create New Endpoint: </Header>
        <Divider />
        <Form unstackable>
          <Form.Group widths={3}>
            <Form.Input
              label='Name' name='name' placeholder='Endpoint name' width='6'
              value={endpoint.name} onChange={this.onChangeInput}
            />
            <Form.Input
              label='Type' name='type' placeholder='Type' width='6'
              value={endpoint.type} onChange={this.onChangeInput}
            />
            <Form.Input
              label='Interval' name='interval' placeholder='Interval in Seconds' width='4'
              value={endpoint.interval} onChange={this.onChangeInput}
            />
          </Form.Group>
          <br />
          <Divider />
          <Form.Group widths={4}>
            <Form.Select
              label='Protocol' name='protocol'
              options={PROTOCOL_TYPES} width='4'
              value={endpoint.protocol} onChange={this.onChangeInput}
            />
            <Form.Input
              label='URL' placeholder='Endpoint URL' name='url' width='6'
              value={endpoint.url} onChange={this.onChangeInput}
            />
            <Form.Select
              label='Method'
              options={METHOD_TYPES} width='4' name='method'
              value={endpoint.method} onChange={this.onChangeInput}
            />
            <Form.Input
              label='Timeout' placeholder='Time in seconds' width='4' name='timeout'
              value={endpoint.timeout} onChange={this.onChangeInput}
            />
          </Form.Group>
          <Divider />
          <Button type='submit' primary>Submit</Button>
        </Form>
      </Segment>
    );
  }
}
