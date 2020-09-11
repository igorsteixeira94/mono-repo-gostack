import React, { useState, useEffect } from 'react';

function App() {
  /* Agora cada state possue suas variaveis separadas,
   diferente do que acontecia que tinhamos um objeto state com todas as variaveis dentro
   agora funções tbm podem ter estados.
   Exemplo antigo:
   state={
     techs:[],
     newTech:''
   }
   */
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');
    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);
  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        name="Techs"
        id="techs"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </>
  );
}

export default App;
