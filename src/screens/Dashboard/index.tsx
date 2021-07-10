import React from 'react';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UseName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton
} from './styles';
import { HighlightCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/TransactionCard/types';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Dashboard: React.FC = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de Aplicativos",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendar',
        icon: 'dollar-sign'
      },
      date: "03/07/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria RenguiRoll",
      amount: "R$ 12.000,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "05/07/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 12.000,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "01/07/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/54491980?v=4' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UseName>Daniel</UseName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => { }}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 03 de julho de 2021"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 15.400,00"
          lastTransaction="Última Saída dia 03 de julho de 2021"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 20.400,00"
          lastTransaction="Última entrada dia 03 de julho de 2021"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item} />
          )}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;