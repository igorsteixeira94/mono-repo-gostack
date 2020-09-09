import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #191920;
`;

export const Card = styled.View`
  height: 358px;
  width: 220px;
  background: #fff;
  margin-left: 16px;
  border-radius: 8px;
  padding: 10px;
`;

export const Shoes = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BtnAdd = styled.TouchableOpacity`
  flex-direction: row;
  width: 200px;
  border-radius: 8px;
  align-items: center;

  background: #7159c1;
`;

export const ContainerQtdItem = styled.View`
  margin-right: 10px;
  border-radius: 8px;
  padding: 10px;
  flex-direction: row;
  background: #5a479a;
`;

export const QtdItem = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 0px 4px;
`;
export const BtnAddText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;
