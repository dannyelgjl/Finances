import React, { useState } from 'react';
import { Input, Button, TransactionTypeButton } from '../../components'
import CategorySelect from '../../components/Form/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');

  const handleTransactionsTypesSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

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

          <TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypesSelect('up')}
              isActive={transactionType === 'up'}
            />


            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypesSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button
          title="Enviar"
        />
      </Form>
    </Container>
  );
}

export default Register;