import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-bck);
`;

export const Avatar = styled.div`
  color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  margin: 30px auto;
  background: ${(props) => lighten(0.25, props.color)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
