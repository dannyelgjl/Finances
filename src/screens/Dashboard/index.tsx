import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HighlightCard, TransactionCard } from '../../components';
import { TransactionCardProps } from '../../components/TransactionCard/types';

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataListProps[]>([]);

  const loadTransactions = async () => {
    const dataKey = '@finance:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {
        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        }
      });

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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