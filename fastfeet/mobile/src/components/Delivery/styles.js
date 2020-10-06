import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  max-height: 169px;
  border-radius: 4px;
  border: 1px solid #0000001a;
`;
export const Main = styled.View`
  flex: 1;
  padding: 12px;
`;

export const MainTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MainTitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;

  color: #7d40e7;
`;

/* Footer com data, cidade e ver detalhes */
export const Footer = styled.View`
  background: #f8f9fd;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

export const FooterContainer = styled.View`
  align-items: flex-start;
`;

export const FooterTitle = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;
export const FooterContent = styled.Text`
  font-size: 12px;
  color: #444444;
  font-weight: bold;
`;
export const TBtnDetail = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
