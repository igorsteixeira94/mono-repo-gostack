import React from 'react';

import {
  Container,
  Line,
  StatusContainer,
  LabelContainer,
  Dot,
  Label,
} from './styles';

export default function ProgressStepes() {
  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filled />
          <Label>Aguardando Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot />
          <Label>Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot />
          <Label>Entregue</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
}
