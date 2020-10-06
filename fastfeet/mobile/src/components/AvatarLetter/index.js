/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Avatar, TAvatar } from './styles';

import createLetterAvatar from '../../util/letterAvatar';

const AvatarLetter = ({
  style, data, fontSize, ...rest
}) => {
  const [avatarLetter, setAvatarLetter] = useState(
    createLetterAvatar(data.name, data.id),
  );
  useEffect(() => {
    console.tron.log(avatarLetter);
  }, []);

  return (
    <Avatar style={style} color={avatarLetter.color} {...rest}>
      <TAvatar color={avatarLetter.color} fontSize={fontSize}>{avatarLetter.letters}</TAvatar>
    </Avatar>
  );
};

export default AvatarLetter;
