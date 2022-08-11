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