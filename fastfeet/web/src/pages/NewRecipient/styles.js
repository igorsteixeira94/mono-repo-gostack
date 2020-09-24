import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.main`
  header {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      button {
        padding: 12px 15px;
        border-radius: 8px;
        border: 0;
        background: none;
        background: var(--color-text-btn-bcg);

        font-weight: bold;
        color: var(--color-bcg-form);

        display: flex;
        align-items: center;

        svg {
          fill: var(--color-bcg-form);
          margin-right: 6px;
        }

        &:hover {
          background: ${darken(0.08, '#7159c1')};
        }
      }

      button + button {
        margin-left: 16px;
      }

      .back {
        background: var(--color-exit-alert);
        &:hover {
          background: ${darken(0.08, '#DE3B3B')};
        }
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 700px;
  font-size: 14px;

  display: flex;
  flex-direction: column;

  margin: 24px auto;

  border-radius: 4px;
  background: var(--color-bcg-form);

  div.inputs {
    width: 100%;
    strong {
      display: block;
      padding: 6px 0px;
    }
  }

  form {
    padding: 30px;
    display: flex;

    align-items: center;
    flex-direction: column;

    input {
      outline: none;

      width: 100%;
      height: 40px;

      padding: 0 15px;
      border: 1px solid var(--color-border-input);

      border-radius: 4px;

      color: var(--color-text);

      &::placeholder {
        color: var(--color-placeholder);
      }
    }
  }
`;

export const Andress = styled.div`
  margin-top: 16px;
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr 1fr;
  grid-gap: 20px;
`;

export const City = styled.div`
  margin-top: 16px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
