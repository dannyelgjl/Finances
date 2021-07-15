import React from 'react';
import { Props } from './types';
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';
import { categories } from '../../utils/categories';


const TransactionCard = ({ data }: Props) => {
  const [category] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Container>
      <Title>
        {data.name}
      </Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />

          <CategoryName>
            {category.name}
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