import React from "react";
import './buttonCall.scss'

const ButtonCall = () =>{
    return(
    <button className="contact_btn">
        <img className="contact_btn_img" width="30" height="30" src="https://img.icons8.com/ios-filled/50/3f8eda/phone.png" alt="phone"/>
        <a className="contact_btn_link"href="tel:+79003332211">Позвонить сейчас!</a>
    </button> 
    )
    
}

export default ButtonCall;