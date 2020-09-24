/* eslint-disable no-alert */
import React from 'react';

import { TableWrapper } from './styles';

function Table({ children }) {
  return <TableWrapper>{children}</TableWrapper>;
}

export default Table;
