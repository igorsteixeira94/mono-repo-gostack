import colorAvatar from '../styles/colors';

const createLetterAvatar = (name, index) => {
  const nameSplited = name.split(' ');

  const letters =
    nameSplited.length > 1
      ? nameSplited[0].charAt(0) + nameSplited[1].charAt(0)
      : nameSplited[0].charAt(0) + nameSplited[0].charAt(1);

  const color = colorAvatar[index % colorAvatar.length];

  return {
    color,
    letters: letters.toUpperCase(),
  };
};

export default createLetterAvatar;
