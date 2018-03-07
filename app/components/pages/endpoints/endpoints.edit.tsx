import * as React from 'react';
import { Segment, Container, Modal } from 'semantic-ui-react';
import { EndpointForm } from './endpoint.form';

type EndpointEditProps = {
  active: boolean,
  endpoint: any
};
export class EndpointEdit extends React.Component<EndpointEditProps, any> {
  constructor(props: any) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(_: any, data: any) {
    //
    console.log(data);
  }

  render() {
    const formData = {
      name: this.props.endpoint && this.props.endpoint.name || '',
      type: this.props.endpoint && this.props.endpoint.type || '',
      interval: this.props.endpoint && this.props.endpoint.interval || '',
      protocol: this.props.endpoint && this.props.endpoint.options.protocol || '',
      url: this.props.endpoint && this.props.endpoint.options.url || '',
      method: this.props.endpoint && this.props.endpoint.options.method || '',
      timeout: this.props.endpoint && this.props.endpoint.options.timeout || ''
    };
    return (
      <Container>
        <Modal
          open={this.props.active}
          header={this.props.endpoint && this.props.endpoint.name || ''}
          content={
            <Segment>
              <EndpointForm
                mode='edit'
                formData={formData}
                onSubmitForm={this.onSubmitForm}
              />
            </Segment>
          }
        />
      </Container>
    );
  }
}
