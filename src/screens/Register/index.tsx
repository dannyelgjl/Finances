import React from 'react';
import { Input, Button } from '../../components'

import { Container, Header, Title, Form, Fields } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>
          Daniel
        </Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Password"
          />
        </Fields>

        <Button
          title="Enviar"
        />
      </Form>
    </Container>
  );
}

export default Register;