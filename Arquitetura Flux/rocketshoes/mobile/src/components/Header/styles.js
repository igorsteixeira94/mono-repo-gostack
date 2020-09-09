import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: #191920;
  padding: 20px;
`;

export const BagContainer = styled.TouchableOpacity`
  position: relative;
`;

export const BagNumber = styled.View`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  left: 10px;
  border-radius: 10px;
  background: #7159c1;
`;
