import React from 'react';
import mickey from './mickey.jpg';

const Modal = ({open}) => {
    if(!open) return null;
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <img src={mickey} alt='mickey mouse' />
            <div className='modalRight'>
                <p className='closeBtn'>X</p>
                <div className='content'>
                    <p></p>
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal;