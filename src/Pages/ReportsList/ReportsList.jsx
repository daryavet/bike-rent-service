import React from "react";
import { Outlet } from "react-router-dom";
import { checkAuth } from "../../components/utilits/checkAuth";
import { user } from "../../redux/selectors";
import { useSelector } from "react-redux";
import ReportListItem from "../../components/ReportListItem/ReportListItem";
import { getReports } from '../../services/report.js'
import "../pages.scss"


const ReportsList = () =>{
   const userData = useSelector(user);

   const [reports, setReports] = React.useState(null);
   const [errorMessage, setErrorMessage] = React.useState(null);

   
   React.useEffect(() => {
    if(checkAuth(userData.data, userData.status)){
        getReports()
        .then((data) => setReports(data.data))
        .catch(() => setErrorMessage('Ошибка при получении заявок'))
    }else{
        window.location.href = '/'
    }
}, [userData.data, userData.status]);

const reportsIsLoaded = userData.data && userData.status === 'fulfilled' && reports

return(


    <div className="pages reports_list">
        <h2 className="reports_header">Зарегистрированные обращения о кражах</h2>
        {
        errorMessage
        ?
        <p className="error-message">Ошибка при получении заявок</p>
        :
        reportsIsLoaded && !errorMessage
        ?
        <ul className="reports">
            <li>
             <ul className="report_list_item">
                <li className="list_item list_item_header">Статус</li>
                <li className="list_item list_item_header">Имя владельца</li>
                <li className="list_item list_item_header">Тип</li>
                <li className="list_item list_item_header">Цвет</li>
             </ul>
            </li>
            {
            reports.length
            ?
            reports.map((el) => (
                <ReportListItem report={el} key={el._id}/>
            ))
            :
            <p className="error-message">Сейчас нет сообщений о краже</p>
            }
            <li>
                <div>
                    <Outlet/>
                </div>
            </li>
        </ul>
        :
        null
        }
    </div>

)

}

export default ReportsList;