import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 16px;
`;

export const Wrapper = styled.ScrollView`
  background: #ffff;
  border-radius: 8px;
`;
export const Product = styled.View`
  padding: 16px;
`;
export const ProductContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProductFooter = styled.View`
  background: #ebebeb;
  padding: 8px 6px;
  border-radius: 4px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View``;
export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
  max-width: 200px;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const ProductQtdControl = styled.View`
  flex-direction: row;
`;
export const ProductQtd = styled.Text`
  padding: 0 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  margin: 0 4px;
`;

export const ProductPriceTotal = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const PriceTotalTitle = styled.Text`
  font-size: 22px;
  color: #ccc;
  font-weight: bold;
  text-align: center;
`;

export const PriceTotal = styled.Text`
  font-size: 26px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const EmpytContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
export const EmpytText = styled.Text`
  font-size: 26px;
  color: #333;
`;
