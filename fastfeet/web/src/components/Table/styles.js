import { lighten } from 'polished';
import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  margin: 20px auto;

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

export const AvatarLetter = styled.div`
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
