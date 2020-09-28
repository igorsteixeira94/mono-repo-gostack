import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  margin: 20px auto;

  tr th {
    padding-bottom: 16px;
  }

  tr#deliveryman,
  tr#recipents,
  tr#problems {
    margin-top: 16px;
    text-align: center;
    max-height: 57px;
    background: var(--color-bcg-form);
    border-radius: 6px;
  }
`;
