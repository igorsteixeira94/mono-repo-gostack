import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
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

const Delivery = ({ data }) => {
  console.tron.log(data);
  const formattedDate = data.start_date
    ? useMemo(() => format(parseISO(data.start_date), 'dd/MM/yyyy'), [data])
    : '--/--/----';
  return (
    <Container>
      <Main>
        <MainTitle>
          <Icon name="local-shipping" size={22} color="#7D40E7" />
          <MainTitleText>{data.product}</MainTitleText>
        </MainTitle>
        <ProgressSteps />
      </Main>
      <Footer>
        <FooterContainer>
          <FooterTitle>Data</FooterTitle>
          <FooterContent>{formattedDate}</FooterContent>
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
};

export default Delivery;
