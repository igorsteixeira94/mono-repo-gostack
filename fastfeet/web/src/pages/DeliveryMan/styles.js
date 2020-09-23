import styled from 'styled-components';
import { darken } from 'polished';

export const DeliveryManWrapper = styled.div`
  height: 100%;

  h2 {
    margin-top: 16px;
  }
`;

export const MenuDeliveryman = styled.header`
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

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      fill: var(--color-bcg-form);
    }

    &:hover {
      background: ${darken(0.08, '#7D40E7')};
    }
  }
`;
