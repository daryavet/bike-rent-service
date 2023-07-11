import React from "react";
import { useState } from "react";
import { checkAuth } from "../../components/utilits/checkAuth";
import { useSelector } from "react-redux";
import { getOfficers} from "../../services/officers";
import { user } from "../../redux/selectors";
import EmployeesInfo from "../../components/employeesInfo/employeesInfo";
import EmployeesListItem from '../../components/employeeListItem/employyeListItem'
import "../pages.scss";
import css from './officers.module.scss'
import OfficersForm from "../OfficersForm/OfficersForm";
import Modal from "../../components/modal/Modal";
import { Outlet } from "react-router-dom";



const Officers = () => {


    const userData = useSelector(user);
    const [modalActive, setModalActive] = React.useState(false)
    const [processMessage] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [officers, setOfficers] = React.useState(null)
    const [addForm, setAddForm] = useState(false)
    const [approved, setApproved] = useState("")
    

   const onApprovedHandler =()=>{
        setApproved(approved)
   }

   const handleAddForm =()=>{
    setAddForm(!addForm)
   }

 

   
   React.useEffect(() => {
    if(checkAuth(userData.data, userData.status)){
        getOfficers()
        .then((data) => setOfficers(data.officers))
        .catch(() => setErrorMessage('Ошибка при получении данных о сотруднике'))
    }else{
        window.location.href = '/'
    }
}, [userData.data, userData.status]);




    const officerIsLoaded = userData.data && userData.status === 'fulfilled' && officers
    return (
    <section className="sectionOfficers pages">
            
        {
            errorMessage
            ?
            <p className="error-message">Ошибка при получении данных сотрудника</p>
            :
            officerIsLoaded && !errorMessage
            ?
            <>
                <EmployeesInfo officers={officers}/>
                <span className={css.addLink} onClick={handleAddForm} >{addForm?"Скрыть форму":"Добавить сотрудника"}</span>

                <div className={css.officersListWrapper}>
                    
       
       <ul className={css.officers_list}>
           <li className="officers column">
           <ul className="officer column">
                   <li className="officer_name">Имя</li>
                   <li className="officer_email">Контакты</li>
                   <li className="officer_approved">Одобрить</li>
            </ul>
           </li>
           
           <li className="officers">
                  {officers.map((el) =>(
                   <EmployeesListItem approve={el.approve} onApprovedHandler={onApprovedHandler} officer={el} key={el._id} />
                  ))}     
            </li>
           
         </ul>

        
        {
        addForm
        ?
        <>
        <OfficersForm type="add"/>
        </>
        :
        <>
        <Outlet/>
        </>
        }
                    
                </div>
             </>
             :
            null
         }
         

<Modal active={modalActive} setActive={setModalActive}>
    <span>{processMessage}</span>
</Modal>


    </section>
    )
}


export default Officers;