import React, { useState } from "react";
import ButtonCall from "../buttonCall/buttonCall";
import Navigation from '../Menu/navigation/navigation';
import Actions from '../Menu/actions/actions';
import LogOut from "../logOut/logOut";
import {useSelector} from 'react-redux';
import {user} from '../../redux/selectors'
import "./header.scss"


const Header =()=>{
    const userData = useSelector(user);
    const userIsLoaded = userData.status === 'fulfilled' || userData.status === 'rejected' || userData.status === 'idle'

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!isOpen);
    } 

    return(
        <div className="header">
            <a className="header_link" href="/">
                <div className="header__logo">
                    <img className="header__logo_img" src="https://img.icons8.com/pulsar-color/48/for-you.png" alt="logo"/>
                    <span className="header__logo_line"></span>
                    <div className="header__logo_info">
                        <span className="header__logo_info_name">Bike Rent</span>
                        <span className="header__logo_info_text">Сервис проката велосипедов</span>
                    </div>
                </div>
            </a>
            
            <ButtonCall/>
           
            <div className="header__auth">
            <div className={isOpen?"cross header__auth_hamburger":"header__auth_hamburger"} onClick={handleOpen}>
                <span className="header__auth_hamburger_line" onClick={setOpen}></span>
            </div>
            {
                isOpen && (
                    <div className="menu">
                    {
                        userData.data && userIsLoaded
                        &&
                        <Navigation onClick={handleOpen}/>
                    }
                    <div className="menu_actions">
                        {
                            userIsLoaded
                            &&
                            <>
                            <Actions onClick={handleOpen}/>
                            {
                            userData.data&&
                            <LogOut/>
                            }
                            </>
                        }
                    </div>
                </div>
                )
            }
            </div>
           
        </div>
    )


}



export default Header;