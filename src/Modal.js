import React from 'react';
import mickey from './mickey.jpg';

const Modal = ({open}) => {
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <img src={mickey} alt='' />
        </div>
    </div>
  )
}

export default Modal;