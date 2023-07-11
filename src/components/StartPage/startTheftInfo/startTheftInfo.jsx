import React from "react";
import './startTheftInfo.scss'


const TheftInfo = () => {
    
    return(
        <div className="start_theft_info">
            <p className="start_theft_info_text"><span className="start_theft_info_text_attention">Внимание!</span><br/>Участились случаи кражи велосипедов. Если ваш велосипед украли, пожалуйста сообщите нам по телефону или заполните форму ниже. Мы обещаем разобраться с вашим случаем как можно скорее!</p>
            <a style={{"textDecoration":"none"}}href="/report"><button className="start_theft_info_btn">Сообщить о краже</button></a>
        </div>
    )
}

export default TheftInfo;