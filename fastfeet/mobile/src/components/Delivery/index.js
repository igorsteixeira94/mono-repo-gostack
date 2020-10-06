import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import ProgressSteps from './ProgressSteps';
import {
  Container,
  Main,
  MainTitleText,
  Footer,
  FooterTitle,
  FooterContainer,
  FooterContent,
  TBtnDetail,
  MainTitle,
} from './styles';

const Delivery = () => (
  <Container>
    <Main>
      <MainTitle>
        <Icon name="local-shipping" size={22} color="#7D40E7" />
        <MainTitleText>Encomenda 01</MainTitleText>
        <ProgressSteps />
      </MainTitle>
    </Main>
    <Footer>
      <FooterContainer>
        <FooterTitle>Data</FooterTitle>
        <FooterContent>14/01/2020</FooterContent>
      </FooterContainer>
      <FooterContainer>
        <FooterTitle>Cidade</FooterTitle>
        <FooterContent>Diadema</FooterContent>
      </FooterContainer>
      <TouchableOpacity>
        <TBtnDetail>Ver detalhes</TBtnDetail>
      </TouchableOpacity>
    </Footer>
  </Container>
);

export default Delivery;
