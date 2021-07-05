import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};

`;