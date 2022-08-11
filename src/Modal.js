import React from 'react';
import mickey from './mickey.jpg';

const Modal = ({open,handleClose}) => {
    if(!open) return null;

    const handleModalClose = e => {
        e.stopPropagation();
    }

  return (
    <div className='overlay' onClick={handleClose}>
        <div 
            className='modalContainer'
            onClick={handleModalClose}
        >

            <img src={mickey} alt='mickey mouse' />

            <div className='modalRight'>

                <p 
                    onClick={handleClose} 
                    className='closeBtn'
                >
                    X
                </p>

                <div className='content'>
                    <p>Do you want a </p>
                    <h1>$50 CREDIT</h1>
                    <p>for your first trade?</p>
                </div>

                <div className='btnContainer'>

                    <button className='btnPrimary'>
                        <span className='bold'>YES</span> I love FX
                    </button>

                    <button className='btnOutline'>
                        <span className='bold'>NO</span> Thanks
                    </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Modal;