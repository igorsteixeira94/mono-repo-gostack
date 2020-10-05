import React from 'react';

import { MdImage } from 'react-icons/md';

import { Container, ContainerImage } from './styles';

function AvatarInput({ handleChange, value }) {
  return (
    <Container>
      <label htmlFor="avatar">
        {value === '' ? (
          <ContainerImage>
            <MdImage size={40} color="black" />
            Adicionar foto
          </ContainerImage>
        ) : (
          <img src={value} alt="Imagem de Perfil" />
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

export default AvatarInput;
