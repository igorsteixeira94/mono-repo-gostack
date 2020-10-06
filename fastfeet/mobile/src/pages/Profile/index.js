/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
import { format, parseISO } from 'date-fns';
import React, { useMemo } from 'react';

import AvatarLetter from '../../components/AvatarLetter';
import { Container, BtnLogout, TextLabel, TextContent } from './styles';

const Profile = ({ route: { params: profile }, navigation }) => {
  const formattedDate = useMemo(
    () => format(parseISO(profile.createdAt), 'dd/MM/yyyy'),
    [profile],
  );

  return (
    <Container>
      <AvatarLetter data={profile} />
      <TextLabel>Nome completo</TextLabel>
      <TextContent>{profile.name}</TextContent>
      <TextLabel>Email</TextLabel>
      <TextContent>{profile.email}</TextContent>
      <TextLabel>Data de cadastro</TextLabel>
      <TextContent>{formattedDate}</TextContent>
      <BtnLogout
        label="Logout"
        onPress={() => {
          navigation.push('SignIn');
        }}
      />
    </Container>
  );
};
export default Profile;
