import * as React from 'react';
import * as _ from 'lodash';
import { Form, Divider, Button, Container } from 'semantic-ui-react';
type EndpointFormProps = {
  create_status?: string,
  mode?: 'edit' | 'create'
  formData?: EndpointFormState | any,
  onSubmitForm: (e: any, data: any) => void
};

export type EndpointFormState = {
  name: string, type: string,
  interval: string, url: string,
  protocol: string,
  method: string,
  timeout: string
};
const initialState = {
  name: '', type: '', interval: '', url: '',
  protocol: '', method: '', timeout: ''
};
export class EndpointForm extends React.Component<EndpointFormProps, EndpointFormState> {

  constructor(props: EndpointFormProps) {
    super(props);
    this.state = props.formData || initialState;
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  componentWillReceiveProps(props: EndpointFormProps) {
    if (!_.isEqual(this.props.formData, props.formData)) {
      this.setState(props.formData || initialState);
    }
  }
  onChangeInput(_: any, data: any) {
    this.setState({
      [data.name]: data.value
    });
  }

  onSubmitForm(e: any, _data: any) {
    const formData = {
      name: this.state.name,
      type: this.state.type,
      interval: this.state.interval,
      options: {
        protocol: this.state.protocol,
        url: this.state.url,
        method: this.state.method,
        timeout: this.state.timeout
      }
    };
    this.props.onSubmitForm(e, formData);
  }
  render() {
    const endpoint = this.state;
    const PROTOCOL_TYPES = {
      web: [{ text: 'http://', value: 'http' }, { text: 'https://', value: 'https' }],
      ping: [{ text: 'ICMP', value: 'icmp' }]
    } as {[s: string]: { text: string, value: string }[]};
    const METHOD_TYPES = [{ text: 'GET', value: 'GET' }, { text: 'POST', value: 'post' }];
    const ENDPOINT_TYPES = [{ text: 'Web', value: 'web' },{ text: 'PING', value: 'ping' }];
    return (
      <Container>
        <Form unstackable>
          <Form.Group widths={3}>
            <Form.Input
              label='Name' name='name' placeholder='Endpoint name' width='6'
              value={endpoint.name} onChange={this.onChangeInput}
            />
            <Form.Select
              label='Type' name='type'
              options={ENDPOINT_TYPES} width='4'
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
              options={PROTOCOL_TYPES[endpoint.type]} width='4'
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
              <Container textAlign='right'>
              {
                (this.props.mode !== 'edit') &&
                <Button type='submit' onClick={this.onSubmitForm}>Cancel</Button>
              }
              <Button type='submit' primary onClick={this.onSubmitForm}>{(this.props.mode !== 'edit') ? 'Submit' : 'Update'}</Button>
            </Container>
        </Form>
      </Container>
    );
  }
}
