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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;