import React, { useRef, useState } from 'react';

import Modal from '../../components/Modal';

function Problems() {
  const [dropdown, setDropdown] = useState(false);
  const modalRef = useRef(null);
  console.tron.log(modalRef);

  const closeDropdown = (event) => {
    event.stopPropagation(); // impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) {
      // se clicar fora do modal, ele DESaparece
      console.log('hidden');
      setDropdown(false);
      document.body.removeEventListener('click', closeDropdown);
    }
  };

  const toggleDropdown = () => {
    console.log('show');
    // se clicar no botão, modal aparece
    setDropdown(true);
    document.body.addEventListener('click', closeDropdown);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleDropdown}>Click Here!</button>
        <Modal show={dropdown} modalRef={modalRef} />
      </header>
    </div>
  );
}

export default Problems;
