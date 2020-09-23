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
        background: #7159c1;

        font-weight: bold;
        color: #fff;

        display: flex;
        align-items: center;

        svg {
          fill: #fff;
          margin-right: 6px;
        }

        &:hover {
          background: ${darken(0.08, '#7159c1')};
        }
      }

      button + button {
        margin-left: 16px;
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
  background: #fff;

  div.inputs {
    width: 100%;
    strong {
      display: block;
      padding: 6px 0px;
    }

    & + div {
      margin-top: 16px;
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

export const ContainerImage = styled.div`
  width: 150px;
  height: 150px;

  align-self: center;

  border: 2px dashed var(--color-border-input);

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-border-input);

  svg {
    fill: var(--color-border-input);
  }
`;
