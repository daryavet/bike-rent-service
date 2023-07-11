import React from 'react'
import Form from '../../components/Form/form.jsx';
import { officerFields, officerFormValues, officerValidationSchema, officerEditFields } from '../../components/Form/form.js';
import { createOfficer, editOfficer, getOfficer } from '../../services/officers.js';
import { useSelector } from 'react-redux';
import { user } from '../../redux/selectors.js';
import { checkAuth } from '../../components/utilits/checkAuth.js';
import okImg from '../../resources/okImg.js';
import ErrorImg from '../../resources/errorImg.js';
import css from './OfficerrsForm.module.scss'


const OfficersForm = ({type}) => {

    const userData = useSelector(user);
      const [officer, setOfficer] = React.useState(null);
      const [processMessage, setProcessMessage] = React.useState(null);
      const [processImg, setProcessImg] = React.useState(null);
      const [approved, setApproved] = React.useState(false);

      
  
      const onCreateHandler = (values) => {
        createOfficer({...values, approved})
        .then(() => {setProcessMessage('Сотрудник успешно зарегистрирован')
                      setProcessImg(okImg)
                    setTimeout(()=> window.location.href="/officers")}, 5000)
        .catch((data) => {setProcessMessage(data.response.data.message)
                          setProcessImg(ErrorImg)})
      }
  
      const onEditHaldler = (values) => {
        editOfficer({...values, approved, id: officer._id})
        .then(() => {setProcessMessage('Данные сотрудника успешно изменены')
                      setProcessImg(okImg)
                    setTimeout(()=> window.location.href="/officers")},5000)
        .catch((data) =>{setProcessMessage(data.response.data.message)
                          setProcessImg(ErrorImg)})
                          
      }
  
      const officerId = window.location.pathname.split('=')[1];
  
      React.useEffect(() => {
        if(checkAuth(userData.data, userData.status)){
          if(officerId){
            getOfficer(officerId)
            .then((data) => {
              setOfficer(data.data); 
            })
            .catch((data) => setProcessMessage(data.response.data.message))
          }
        }
      })
  
    if(officer && officerId && type==="edit"){
        return(
          <div className={css.edit_form} >
            <Form 
              fields={officerEditFields}
              formValues={{firstName: officer.firstName, lastName: officer.lastName}} 
              onSubmit={onEditHaldler}
              submitName="Редактировать"
              formName="Редактировать сотрудника"
              processMessage={processMessage}
              processImg={processImg}
              isDirty={true}
              isValided={true}
              className={css.officer_form}
            >
           {
            (userData.data.data.user.id!== officerId && (userData.data.data.user.approved))
            ?
            <div className={css.checkbox}>
              <label className={css.checkbox_label} htmlFor="approved">Одобрить:</label>
              <input className={css.checkbox_input} type="checkbox" name="approved" defaultChecked={officer.approved} value={approved} onChange={() => setApproved(!officer.approved)}/>
            </div>
            :
            null
           }
            </Form> 
        </div>
        )
    }else if(type === "add" ){
      return (
        <div>
            <Form 
              fields={officerFields}
              formValues={officerFormValues} 
              validationSchema={officerValidationSchema} 
              onSubmit={onCreateHandler} 
              submitName="Создать сотрудника"
              formName="Создать"
              processMessage={processMessage}
              processImg={processImg}
            >
              {
              (!!(userData.data.data.user.approved))
              ?
            <div className={css.checkbox}>
              <label htmlFor="approved">Одобрить:</label>
              <input type="checkbox" name="approved" value={approved} onChange={() => setApproved(prev => !prev)}/>
            </div>
            :
            null
            }
            </Form> 
        </div>
      )
    }
  }
  
  export default OfficersForm