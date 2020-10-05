import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ButtonRect = styled(RectButton)`
  height: 45px;
  background: #82bf18;
  border-radius: 4px;

  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  margin-top: 16px;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #ffffff;
`;
