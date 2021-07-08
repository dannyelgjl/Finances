import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import {
  Input,
  Button,
  TransactionTypeButton,
  CategorySelectButton,
  InputForm,
} from '../../components';
import CategorySelect from '../CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles';

interface FormData {
  name: string;
  amount: string;
}

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { control, handleSubmit } = useForm();

  const handleTransactionsTypesSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  const handleCloseSelectCategory = () => {
    setCategoryModalOpen(false);
  };

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true);
  }

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }
    console.log(data);
  }



  return (
    <Container>
      <Header>
        <Title>
          Daniel
        </Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            placeholder="Nome"
            name="name"
            control={control}
          />
          <InputForm
            placeholder="Preço"
            name="amount"
            control={control}
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
}

export default Register;