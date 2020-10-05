import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Avatar = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: ${(props) => lighten(0.3, props.color)};

  align-self: center;
  margin-bottom: 30px;

  align-items: center;
  justify-content: center;
`;

export const TAvatar = styled.Text`
  font-size: 60px;
  font-weight: bold;

  color: ${(props) => props.color};
`;
