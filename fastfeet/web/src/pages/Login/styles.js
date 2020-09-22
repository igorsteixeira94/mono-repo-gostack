import styled from 'styled-components';
import { darken } from 'polished';

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  background: var(--color-bcg-form);
  border: 1px solid var(--color-border-form);
  border-radius: 6px;

  padding: 30px 24px;
  text-align: center;

  img {
    margin: 20px 0px;
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: 16px;

      font-size: 14px;
      font-weight: bold;
      text-align: left;

      input {
        outline: none;

        margin-top: 4px;
        width: 100%;

        border-radius: 6px;
        border: 1px solid var(--color-border-input);

        padding: 12px;

        color: var(--color-text);
      }
    }

    button {
      outline: 0;
      padding: 12px 0px;
      margin-bottom: 36px;

      border: 0;
      border-radius: 6px;

      background: var(--color-text-btn-bcg);

      font-weight: bold;
      font-size: 16px;
      color: var(--color-bcg-form);

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }
  }
`;
