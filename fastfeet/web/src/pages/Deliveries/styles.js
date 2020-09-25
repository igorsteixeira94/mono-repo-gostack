import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const DeliveryWrapper = styled.div`
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

export const MenuDelivery = styled.header`
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

export const BtnEdit = styled.button`
  svg {
    fill: #4d85ee;
  }
`;
export const BtnDelete = styled.button`
  svg {
    fill: #de3b3b;
  }
`;
export const BtnView = styled.button`
  svg {
    fill: #8e5be8;
  }
`;

export const StatusDelivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  small {
    color: ${(props) => props.color};
    font-weight: bold;
    font-size: 12px;
  }

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => props.color};
    margin-right: 10px;
  }

  text-transform: uppercase;
  background: ${(props) => lighten(0.3, props.color)};

  border-radius: 12px;
  width: 70%;
`;

export const AvatarLetter = styled.div`
  color: ${(props) => props.color};
  font-size: 14px;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  background: ${(props) => lighten(0.25, props.color)};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 6px;
`;

export const Deliveryman = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
