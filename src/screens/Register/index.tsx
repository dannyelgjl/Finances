import React from 'react';
import { Input } from '../../components'

import { Container, Header, Title, Form } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>
          Daniel
        </Title>
      </Header>

      <Form>
        <Input
          placeholder="Nome"
        />

        <Input
          placeholder="Password"
        />
      </Form>

    </Container>
  );
}

export default Register;