import { format, parseISO } from 'date-fns';
import React, { useMemo } from 'react';

import {
  Container,
  BtnLogout,
  TextLabel,
  TextContent,
  AvatarContainer,
} from './styles';

const Profile = ({ route: { params: profile } }) => {
  console.tron.log(profile);
  const formattedDate = useMemo(
    () => format(parseISO(profile.createdAt), 'dd/MM/yyyy'),
    [profile]
  );

  return (
    <Container>
      <AvatarContainer />
      <TextLabel>Nome completo</TextLabel>
      <TextContent>{profile.name}</TextContent>
      <TextLabel>Email</TextLabel>
      <TextContent>{profile.email}</TextContent>
      <TextLabel>Data de cadastro</TextLabel>
      <TextContent>{formattedDate}</TextContent>
      <BtnLogout label="Logout" />
    </Container>
  );
};
export default Profile;
