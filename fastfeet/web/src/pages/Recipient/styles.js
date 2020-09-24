import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const RecipientWrapper = styled.div`
  height: 100%;

  h2 {
    margin-top: 16px;
  }

  table th,
  table tr td {
    text-align: left;
    padding: 0px 8px;
  }

  td#actions {
    text-align: center;
  }
`;

export const MenuRecipient = styled.header`
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnPaginationBack = styled.button`
  outline: 0;
  border: 0;
  padding: 6px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 14px;
  color: #fff;

  svg {
    fill: #fff;
    margin-right: 4px;
  }

  background: var(--color-text-btn-bcg);
  &:hover {
    background: ${darken(0.08, '#7159c1')};
  }

  &:disabled {
    background: ${lighten(0.2, '#7159c1')};
    cursor: none;
  }
`;

export const BtnPaginationNext = styled.button`
  outline: 0;
  border: 0;
  padding: 6px 4px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 14px;
  color: #fff;

  svg {
    fill: #fff;
    margin-left: 8px;
  }

  background: var(--color-text-btn-bcg);

  &:hover {
    background: ${darken(0.08, '#7159c1')};
  }

  &:disabled {
    background: ${lighten(0.2, '#7159c1')};
    cursor: none;
  }
`;

export const BtnEdit = styled.button`
  font-size: 16px;
  color: var(--color-placeholder);

  svg {
    fill: #4d85ee;
  }
`;
export const BtnDelete = styled.button`
  font-size: 16px;
  color: var(--color-placeholder);

  svg {
    fill: #de3b3b;
  }
`;
