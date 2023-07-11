import React from "react";
import './footer.scss'

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer_info">Bike Rental Service<hr/><span className="footer_info_about">since 2023</span></div>
            <div className="footer_social_wrapper">
            <img className="footer_social_wrapper_item" width="48" height="48" src="https://img.icons8.com/pulsar-color/48/facebook.png" alt="facebook"/>
            <img className="footer_social_wrapper_item" width="48" height="48" src="https://img.icons8.com/pulsar-color/48/instagram-new.png" alt="instagram-new"/>
            </div>
           
        </div>
    )
}

export default Footer;