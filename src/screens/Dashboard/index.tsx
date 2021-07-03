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
  HighlightCards
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import HighlightCard from '../../components/HighlightCard';

const Dashboard: React.FC = () => {
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

          <Icon name="power" />
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
    </Container>
  );
}

export default Dashboard;