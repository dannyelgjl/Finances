import React from 'react';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';

const TransactionCard = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />

          <CategoryName>Vendas</CategoryName>
        </Category>

        <Date>03/Jul/2021</Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;