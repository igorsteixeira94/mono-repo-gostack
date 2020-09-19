import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-text-btn-bcg);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  max-width: 360px;
  padding: 16px 8px;

  border-radius: 4px;

  border: 1px solid var(--color-border-form);

  background: var(--color-bcg-form);

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 44px;
  }

  form {
    span {
      color: var(--color-text);

      font-size: 14px;
      font-weight: bold;

      display: block;

      margin-bottom: 8px;
    }
    input {
      outline: 0;

      width: 100%;
      height: 45px;

      margin-bottom: 16px;

      border-radius: 4px;
      border: 1px solid var(--color-border-input);

      padding: 12px;

      font-size: 16px;
      color: var(--color-placeholder);

      &::placeholder {
        color: var(--color-placeholder);
        font-size: 16px;
      }
    }

    button {
      border: 0;
      border-radius: 4px;

      background: var(--color-text-btn-bcg);

      color: var(--color-bcg-form);

      font-weight: bold;
      font-size: 16px;

      width: 100%;
      height: 45px;

      margin-bottom: 60px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7D40E7')};
      }
    }
  }
`;
