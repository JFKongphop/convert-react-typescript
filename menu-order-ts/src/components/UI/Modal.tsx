import React from 'react';
import { createPortal } from 'react-dom';
import { ModalType } from '../../models/modal';
import classes from './Modal.module.css';


const Backdrop: React.FC<Partial<ModalType>> = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop} />
}

const ModalOverlay: React.FC<Partial<ModalType>> = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement= document.getElementById('overlays');

const Modal: React.FC<ModalType> = (props) => {
    return (
        <>
            {createPortal(  
                <Backdrop onClose={props.onClose} />,
                portalElement!
            )}
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement!
            )}
        </>
    )
}

export default Modal