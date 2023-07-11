import React from "react";
import { useState } from "react";
import { getOfficer, removeOfficer } from "../../services/officers";
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors";
import { checkAuth } from "../utilits/checkAuth";
import { getReport, removeReport} from "../../services/report";
import DeleteButton from "../DeleteBtn/deleteBtn";
import DetailsItem from "../DetailsItem/detailsItem";
import cross from '../../resources/white-cross.png'
import css from './details.module.scss'
import Report from "../../Pages/ReportForm/ReportForm";
import "../../Pages/pages.scss"
import OfficersForm from "../../Pages/OfficersForm/OfficersForm";

const reportDetails = [
    {id: 1, name: 'ФИО владельца', value: 'ownerFullName'},
    {id: 2, name: 'Номер лицензии', value: 'licenseNumber'},
    {id: 3, name: 'Цвет', value: 'color'},
    {id: 4, name: 'Тип', value: 'type'},
    {id: 5, name: 'Доп. информация', value: 'description'},
    {id: 6, name: 'Статус', value: 'status'},
    {id: 7, name: 'Сотрудник', value: 'officer'},
    {id: 8, name: 'Создано', value: 'createdAt'},
    {id: 9, name: 'Обновлено', value: 'updatedAt'},
    {id: 10, name: 'Решение', value: 'resolution'},
]

const officerDetails = [
    {id: 1, name: 'Имя', value: 'firstName'},
    {id: 2, name: 'Фамилия', value: 'lastName'},
    {id: 3, name: 'Email', value: 'email'},
];

const Details = ({type}) => {

    const userData = useSelector(user);
    const [isOpen, setOpen] = useState(true);
    const [editForm, setEditForm] = useState(false);
    const [report, setReport] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [officer, setOfficer] = React.useState(null);

  


    const handleEditForm = () =>{
     setEditForm(!editForm)
    }

 
    React.useEffect(() => {
        if(checkAuth(userData.data, userData.status)){

            if(type === 'officers'){
                getOfficer(window.location.pathname.split('=')[1])
                .then((data) => setOfficer(data.data))
                .catch((data) => setErrorMessage(data.response.data.message))
            }else if(type === 'reports'){
                getReport(window.location.pathname.split('=')[1])
                .then((data) => {
                    setReport(data.data)
                    if(data.data.officer){
                        getOfficer(data.data.officer)
                        .then((data) => setOfficer(data.data))
                        .catch((data) => setErrorMessage(data.response.data.message))
                    }
                })
                .catch((data) => setErrorMessage(data.response.data.message))
            }
        }else{
            window.location.href = '/'
        }
    }, [type, userData.data, userData.status])

   
    if(type === 'officers'){
        return (
            <div className={css.officer_info}>
              {
                <>
                {
                editForm
                ?
                <OfficersForm type="edit"/>
                :
                <>
                {
                    officer
                    &&
                    <>
                    {officerDetails.map((el) => (
                        <DetailsItem name={el.name} value={officer[`${el.value}`]} key={el.id}/>
                    ))}
                    {userData.data.data.user.approved === true
                    ?
                    <div className={css.actions}>
                        {userData.data.data.user.id !== officer._id && <DeleteButton removeFunction={removeOfficer} id={officer._id} redirectTo="/officers" setErrorMessage={setErrorMessage}/>}
                        <button className={css.editLink} onClick={handleEditForm}>Редактировать</button>
                    </div>
                    :
                    null
                    }
                    </>  
                    }
                    </>
                }
                
                </>
              }    
         </div>
        )
    }else if(type === 'reports'){
        return (
            <>
            {
                isOpen && (   <div className={css.card}>
            <img onClick={()=>{setOpen(false)
                             window.location.href = "/reports"}} src={cross} alt="close" className={css.cross}/>
                {
                    editForm
                    ?
                    (
                        <Report/>
                       
                    )
                    :
                    <>
                    {
                        report
                        &&
                        <>
                        {
                        
                        report.officer && officer
                        ?
                        reportDetails.map((el) => (
                            el.name === 'Сотрудник'
                            ?
                            <DetailsItem name={el.name} value={`${officer.firstName} ${officer.lastName} `} key={el.id}/>
                            :
                            <DetailsItem name={el.name} value={report[`${el.value}`]} key={el.id}/>
                        ))
                        
                        :
                        reportDetails.map((el) => (
                            <DetailsItem name={el.name} value={report[`${el.value}`]} key={el.id}/>
                        ))
                       
                        }
                        {
                        userData.data.data.user.approved === true
                        ?
                        <div className={css.actions}>
                            <DeleteButton removeFunction={removeReport} id={report._id} redirectTo="/reports" setErrorMessage={setErrorMessage} />
                            <span className={css.editLink} onClick={handleEditForm}>Редактировать</span>
                        </div>
                        :
                        null
                        }
                        </>
                        }

                        </>
                
                    }
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </div>)

         
            }
            </>)
    }
}

export default Details