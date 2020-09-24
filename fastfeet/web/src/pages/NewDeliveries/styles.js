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
      font-size: 16px;

      &::placeholder {
        color: var(--color-placeholder);
        font-size: 16px;
      }
    }
  }
`;

export const Selection = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  margin-top: 16px;

  strong {
    display: block;
    margin-bottom: 8px;
  }

  span.css-1okebmr-indicatorSeparator {
    background: none;
  }

  div.css-1wa3eu0-placeholder {
    color: var(--color-placeholder);
    font-size: 16px;
  }
  div.css-yk16xz-control {
    border-color: var(--color-border-input);
  }

  div.css-tlfecz-indicatorContainer {
    svg {
      fill: var(--color-border-input);
    }
  }
  div.css-1pahdxg-control {
    box-shadow: none;

    border-color: var(--color-border-input);
  }
  div.css-1uccc91-singleValue {
    font-size: 16px;
    color: var(--color-text);
  }
`;
