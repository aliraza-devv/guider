import React from 'react';
import ReactDOM from 'react-dom';

import {Cancel} from '../svgComponents/index';
import Backdrop from './Backdrop/Backdrop';

const Modal = props => {
    if(!props.open) return null
    return ReactDOM.createPortal(
        <>
            <Backdrop show={props.open} clicked={props.onClose} />
            <div className='modal'>
                <button className='modal__cancelBtn' onClick={props.onClose}><Cancel /></button>
                {props.children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;