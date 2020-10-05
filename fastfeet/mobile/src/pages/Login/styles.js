import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #7d40e7;
  padding: 30px;

  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  height: 45px;
  background: #ffffff;

  border: 1px solid #dddddd;
  border-radius: 4px;

  font-size: 16px;
  color: #999999;

  padding: 0px 20px;
  margin-top: 38px;

  align-self: stretch;
`;
