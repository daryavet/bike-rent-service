import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../redux/selectors";
import {  editOfficer } from "../../services/officers";
import Modal from "../modal/Modal";
import './employeeListItem.scss'


  const EmployeesListItem =({officer})=>{

    const [modalActive, setModalActive] = React.useState(false)
 
    const userData = useSelector(user)
    const [approved, setApproved] = React.useState(!officer.approved)
    const [processMessage, setProcessMessage] = React.useState(null)

    const [star, setStar] = useState(officer.approved);
    const handleStar = () => {
        if (userData.data.data.user.approved){
            if(userData.data.data.user.id !== officer._id){
              
                editOfficer({approved, id: officer._id})
                .then((data) => {
                             setApproved(!data.data.approved)
                              setStar(!star);
                              console.log(data.data.approved)})
                .catch(() => console.log(officer.approved))
            } else {
                setModalActive(true)
                setProcessMessage('Вы не можете снять с себя одобрение')
            }    
        } else {
            setModalActive(true)
            setProcessMessage('Пока вы не одобрены, вы не можете менять данные о сотрудниках')
        }
        
    } 

  
    return(
        <>
          
                <ul className={officer.approved?"officer approved" : "officer"} key={officer._id}>
                               <li className="officer_name">
                              <a href={`/officers/id=${officer._id}`} >{officer.firstName} {officer.lastName}</a>
                               </li>
                               <li className="officer_email">{officer.email}</li>
 
                              <li  className={officer.appproved?"officer_approved approved" : "officer_approved"}><span onClick={handleStar} className={star?"officer_approved_icn approved_icn" : "officer_approved_icn"}>&#x2605;</span></li>
    
                </ul>
               

                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="alert">
                    <span className="alert_text">{processMessage}</span>
                    </div>
                </Modal>

        </>
       
    )
}



export default EmployeesListItem;