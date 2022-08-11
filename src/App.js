import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Modal open={openModal} />
    </div>
  );
}

export default App;
