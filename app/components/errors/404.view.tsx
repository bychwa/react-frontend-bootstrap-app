import * as React from 'react';
import { Header, Container } from 'semantic-ui-react';

type PageNotFoundViewProps = { message?: string };

export const PageNotFoundView = (props: PageNotFoundViewProps) => (
  <Container textAlign='center'>
    <Header as='h1' content={props.message || '404 : PAGE NOT FOUND'} />
  </Container>
);
