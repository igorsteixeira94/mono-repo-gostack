import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { MdAdd, MdArrowBack } from 'react-icons/md';
import AvatarInput from '../../components/Avatar';

import { Wrapper, Main } from './styles';
import api from '../../services/api';

function NewDeliveryMan({ location: { state } }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.tron.log(state);
  const [img, setImg] = useState('');
  const [fileImage, setFileImage] = useState('');

  // Preview da imagem
  async function handleChange(e) {
    console.log('response.data');

    e.preventDefault();
    const file = e?.target.files[0];
    setFileImage(e?.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target?.result);
      };

      reader.readAsDataURL(file);
    }
  }

  // Salva os dados no banco de dados
  async function handleData() {
    try {
      let avatar_id = null;

      if (fileImage) {
        const data = new FormData();
        data.append('file', fileImage);
        const response = await api.post('/files', data);
        avatar_id = response.data.id;
      }

      if (state) {
        console.tron.log({
          email,
          name,
          avatar_id,
        });
        await api.put(`/deliverymans/${state.id}`, {
          email,
          name,
          avatar_id,
        });
      } else {
        await api.post('/deliverymans', {
          email,
          name,
          avatar_id,
        });
      }

      toast.success('Cadastro realizado com sucesso');

      setEmail('');
      setName('');
      setImg('');
    } catch (error) {
      console.tron.log(error);
      toast.error('Verifique os seus dados');
    }
  }

  useEffect(() => {
    if (state) {
      setName(state.name);
      setEmail(state.email);

      if (state.avatar) {
        setImg(state.avatar.url);
      }
    }
  }, []);

  return (
    <Wrapper>
      <header>
        <h1>Cadastro de entregadores</h1>
        <div>
          <button type="button">
            <MdArrowBack size={20} />
            VOLTAR
          </button>
          <button type="submit" onClick={handleData}>
            <MdAdd size={20} />
            SALVAR
          </button>
        </div>
      </header>

      <Main>
        <form id="test">
          <AvatarInput handleChange={handleChange} value={img} />
          <div className="inputs">
            <strong>Nome</strong>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Digite o nome do entregador"
            />
          </div>

          <div className="inputs">
            <strong>Email</strong>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Digite o email do entregador"
            />
          </div>
        </form>
      </Main>
    </Wrapper>
  );
}

export default NewDeliveryMan;
