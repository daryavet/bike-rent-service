import React from "react";
import { Outlet } from "react-router-dom";
import location from './location.JPG'
import insurance from './insurance.JPG'
import family from './family.JPG'
import TheftInfo from "../startTheftInfo/startTheftInfo";

import './startInfo.scss'

const StartInfo =()=>{

    
    return(
        <div className="start"> 
          <h1 className="start_header">Bike Rent service</h1>
          <p className="start_subheader"> компания по аренде велосипедов в вашем городе</p>
          <div className="start_content">
                 <h2 className="start_content_header">Наши преймущества</h2>
                 <div className="start_content_wrapper">
                    <div className="start_content_wrapper_item">
                        <img className="start_content_wrapper_item_img" src={location} alt="" />
                        <p className="start_content_wrapper_item_descr">Удобное расположение сервисов</p>
                    </div>
                    <div className="start_content_wrapper_item">
                        <img className="start_content_wrapper_item_img" src={insurance} alt="" />
                        <p className="start_content_wrapper_item_descr">Страховка от несчастных случаев на время аренды</p>
                    </div>
                    <div className="start_content_wrapper_item">
                        <img className="start_content_wrapper_item_img" src={family} alt="" />
                        <p className="start_content_wrapper_item_descr">Выгодные тарифы для всей семьи</p>
                    </div>
                 </div>
                
           </div> 
            <TheftInfo/>
            <Outlet/>
        </div>
         
    )

}

export default StartInfo;
 