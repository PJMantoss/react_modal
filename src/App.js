import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {};

  return (
    <div className="App">
      <button onClick={handleClick}>Modal</button>
      <Modal open={openModal} handleClose={handleClose} />
    </div>
  );
}

export default App;
