import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  padding: 30px;

  justify-content: center;
`;
export const AvatarContainer = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #f4effc;

  align-self: center;
  margin-bottom: 30px;
`;
export const TextLabel = styled.Text`
  font-size: 12px;
  color: #666666;
  text-align: left;
`;
export const TextContent = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
  text-align: left;

  margin-bottom: 16px;
`;

export const BtnLogout = styled(Button)`
  background: #e74040;
`;
