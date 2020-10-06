import styled from 'styled-components/native';
import AvatarLetter from '../../components/AvatarLetter';

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px 20px 20px;
  background: #ffffff;
`;

export const Header = styled.View`
  margin: 20px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled(AvatarLetter)`
  width: 68px;
  height: 68px;

  border-radius: 34px;
`;

export const HeaderContent = styled.View`
  flex-direction: column;
  margin-left: 12px;
  align-items: flex-start;
  justify-content: center;
  height: 68px;
`;
export const HeaderTitle = styled.Text`
  font-size: 12px;
  color: #666666;
`;
export const HeaderProfileName = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const IconExit = styled.TouchableOpacity``;

export const Profile = styled.View`
  flex-direction: row;
`;

export const Main = styled.View`
  flex: 1;
`;

export const MainHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeliveryTitle = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const DeliveryOptions = styled.View`
  flex-direction: row;
`;

export const DeliveryOptionsItem = styled.Text`
  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  font-size: 12px;
  font-weight: bold;

  border-bottom-color: #7d40e7;
  border-bottom-width: ${(props) => (props.active ? '1px' : '0')};
  margin-left: 16px;
`;
