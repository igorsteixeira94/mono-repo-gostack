import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  background: var(--color-bck);
`;

export const Content = styled.div`
  padding: 30px;
  width: 1000px;

  table {
    width: 100%;
    margin: 20px auto;
  }
  tr th {
    padding-bottom: 16px;
  }

  tr#deliveryman {
    margin-top: 16px;
    text-align: center;
    max-height: 57px;
    background: var(--color-bcg-form);
    border-radius: 6px;
  }
`;

export const MenuDeliveryman = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  input {
    outline: 0;
    border-radius: 4px;
    border: 1px solid var(--color-border-input);
    padding: 12px 15px;
    color: var(--color-placeholder);

    &::placeholder {
      color: var(--color-placeholder);
    }
  }

  button {
    outline: 0;
    border: 0;

    padding: 12px 15px;
    border-radius: 6px;

    font-size: 14px;
    font-weight: bold;

    text-transform: uppercase;
    color: var(--color-bcg-form);

    background: var(--color-text-btn-bcg);

    &:hover {
      background: ${darken(0.08, '#7D40E7')};
    }
  }
`;

export const Avatar = styled.div`
  color: ${(props) => props.color};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: red;
  margin: 8px auto;
  background: ${(props) => lighten(0.25, props.color)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  margin: 8px auto;
`;
