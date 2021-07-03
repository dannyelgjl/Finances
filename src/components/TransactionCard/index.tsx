import React from 'react';
import { Props } from './types';
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';


const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />

          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;