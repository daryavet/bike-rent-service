import React from 'react';
import { useNavigate } from 'react-router-dom';
import cross from '../../resources/cross.svg';
import './modal.scss'

const Modal = ({active, setActive, children}) =>{
   
   
    
    const navigate = useNavigate();

    return  (
        <div className={active ? "modal active":"modal"} onClick={() => (window.location.pathname === "/login" || window.location.pathname ==="/registration" )?navigate('/'):setActive(false)}>
            <img className="modal__img" src={cross} alt="cross" onClick={() => (window.location.pathname === "/login" || window.location.pathname ==="/registration")?navigate('/'):setActive(false)}/>
            <div className={active ? "modal__content active":"modal__content"}
            onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}

export default Modal;