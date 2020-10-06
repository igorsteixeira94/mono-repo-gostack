import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Avatar = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: ${(props) => lighten(0.3, props.color)};

  align-self: center;

  align-items: center;
  justify-content: center;
`;

export const TAvatar = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '60px')};

  color: ${(props) => props.color};
`;
