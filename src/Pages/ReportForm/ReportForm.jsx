import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/form.jsx";
import { reportFields, reportFormValues,reportEditFields,reportValidationSchema,reportEditValidationSchema } from "../../components/Form/form.js";
import { createUnauthReport, createReport, getReport, editReport } from "../../services/report.js";
import { getToken } from "../../services/tokenService.js";
import {checkAuth} from "../../components/utilits/checkAuth.js"
import { useSelector } from "react-redux";
import {user} from "../../redux/selectors.js";
import {getOfficers} from '../../services/officers.js'
import css from './report.module.scss'
import ErrorImg from '../../resources/errorImg.js'
import okImg from '../../resources/okImg.js'
import '../pages.scss'
import Modal from "../../components/modal/Modal.js";





const Report =()=>{

    const userData = useSelector(user);
    const navigate = useNavigate();
    const [modalActive, setModalActive] = React.useState(true);
    const [report, setReport] = React.useState(null);
    const [officer, setOfficer] = React.useState(null);
    const [officers, setOfficers] = React.useState(null);
    const [officersError, setOffisersError] = React.useState(false);

    const [processMessage, setProcessMessage] = React.useState(null);
    const [processImg, setProcessImg] = React.useState(null);


    const [type, setType] = React.useState("")
    const [status, setStatus] = React.useState('')
    const [resolution, setResolution] = React.useState("")

   
    const reportId = window.location.pathname.split('=')[1];

    React.useEffect(() => {
      if(reportId){
        if(checkAuth(userData.data, userData.status)){
          getOfficers()
          .then((data) => setOfficers(data.officers))
          .catch(() => {
            setProcessMessage('Ошибка при получении сотрудников');
            setProcessImg(ErrorImg)
            setOffisersError(true);
            setOfficers([]);
          })
          getReport(reportId)
          .then((data) => {
            setReport(data.data)
            setType(data.data.type)
            setStatus(data.data.status)
            setResolution(data.data.resolution)
            setOfficer(data.data.officer)
          })
          .catch(() => {
            setProcessMessage('Ошибка при получении данных о сообщении');
            setProcessImg(ErrorImg);
          })
        }
  
      }else{
        if(userData.data && userData.status){
          getOfficers()
          .then((data) => setOfficers(data.officers))
          .catch(() => {
            setProcessMessage('Ошибка при получении сотрудников');
            setProcessImg(ErrorImg)
            setOffisersError(true);
            setOfficers([]);
          })
        }
      }
    }, [reportId, userData.data, userData.status]);
  
    const onReportHandler = (values) => {
      setProcessMessage(null)
      setProcessImg(null)
  
      if(type.length === 0){
        return setProcessMessage('Выберите тип велосипеда')
      }
      
      if(userData.data && getToken()){
        createReport({...values, type, officer})
        .then(() => {setProcessMessage('Заявка успешно создана')
                    setProcessImg(okImg)
                    window.scrollTo(0,0)
                    setTimeout(()=>{navigate(-1)},2000)})
        .catch(() => {setProcessMessage('Не удалось создать заявку')
                      window.scrollTo(0,0)
                     setProcessImg(ErrorImg)})
      }else{
        createUnauthReport({...values, type})
        .then(() => {setProcessMessage('Заявка успешно создана')
                      window.scrollTo(0,0)
                    setProcessImg(okImg)
                  setTimeout(()=>{navigate(-1)},2000)})
        .catch(() => {setProcessMessage('Не удалось создать заявку')
                      window.scrollTo(0,0)
                      setProcessImg(ErrorImg)})
      }
    };
  

     const onEditHanlder = (values) => {
      if((status ==='done')&&(!resolution || resolution === "не принято")){
        setProcessMessage("Для закрытия обращения, необходимо указать решение")
        setProcessImg(ErrorImg);
      }
      else{
      editReport({...values, type, status, resolution, officer, id: report._id})
      .then(() => {setProcessMessage('Сообщение успешно обновлено')
                  setProcessImg(okImg)
                  setTimeout(function(){window.location.href="/reports"},2000)})
      .catch((data) => setProcessMessage(data.response.data.message))
      } 
    }
    const officersLoaded = userData.data && userData.status === 'fulfilled' && officers
    
      if(reportId && report){
        return (
         <div className={css.form_edit_wrapper}>
                       <Form 
                fields={reportEditFields}
                formValues={
                  {
                  ownerFullName: report.ownerFullName, 
                  licenseNumber: report.licenseNumber, 
                  color: report.color,
                  date: report.date.split('T')[0],
                  description: report.description,
                  // resolution: report.resolution
                  }
                } 
                processMessage={processMessage}
                processImg={processImg}
                validationSchema={reportEditValidationSchema} 
                onSubmit={onEditHanlder} 
                submitName="Редактировать"
                formName="Редактирование сообщения"
                isDirty={true}
                isValided={true}
            >
           
              <div className={css.select}>
                <label htmlFor="type">Тип:</label>
                <select defaultValue={report.type} name="type" onClick={(e) => setType(e.target.value)}>
                  <option value="">Выберите тип велосипеда</option>
                  <option value="general">Обычный</option>
                  <option value="sport">Спортивный</option>
                </select>
              </div>
              {
              userData.data && userData.status === 'fulfilled' && !officersLoaded
              ?
              <p className={css.report_process}>Загрузка сотрудников...</p>
              :
              officersError
              ?
              null
              :
              officers
              &&
              <>
              <div className={css.select}>
                <label htmlFor="officer">Сотрудник:</label>
                <select defaultValue={report.officer} name="officer" onClick={(e) => setOfficer(e.target.value)}>
                  <option value="">Выберите сотрудника</option>
                  {officers.filter((el) => el.approved === true).map((el) => (
                      <option value={el._id} key={el._id}>{el.lastName} {el.firstName}</option>
                  ))}
                </select>
              </div>

              <div className={css.select}>
                 <label htmlFor="status">Статус:</label>
                 <select defaultValue={report.status} 
                 name="status" 
                 onChange={(e) => setStatus(e.target.value)} 
                >
                     <option value="new">Новое</option>
                     <option value="in_progress">В работе</option>
                     <option value="done">Завершено</option>
                   </select>
                   {
                    status==='done'
                    ?
                   <div className="input_wrapper">
                    <label htmlFor="resolution">Решение: </label>
                    <input className="form_input" type="text" name='resolution' defaultValue={!report.resolution? "": report.resolution} onChange={(e)=> setResolution(e.target.value)} />
                   </div>
                    :
                    <>
                    {
                      report.resolution && (report.resolution !== "не принято") 
                      ?
                      <Modal active={modalActive} setActive={setModalActive}>
                        <div className="alert">
                        <span className="alert_text">Вы действительно хотите отменить принятое решение?</span>
                        <button className="alert_btn" type='submit' onClick={()=>{setResolution("не принято")
                                                            setModalActive(false)
                                                            }}>Подтвердить</button>
                        </div>
                      </Modal>
                      :
                      null
                    }
                    </> 
                   }
              </div>
              </>
              
              }
            </Form>
            </div>
        )
      }else if(!reportId && !report){
        return (
          <section className="report pages">
            <Form 
                fields={reportFields}
                formValues={reportFormValues} 
                validationSchema={reportValidationSchema} 
                onSubmit={onReportHandler} 
                submitName="Сообщить"
                formName="Сообщить о краже"
                processMessage={processMessage}
                processImg={processImg}
            >
              <div className={css.select}>
                <label htmlFor="type">Тип:</label>
                <select name="type" onClick={(e) => setType(e.target.value)}>
                  <option value="">Выберите тип велосипеда</option>
                  <option value="general">Обычный</option>
                  <option value="sport">Спортивный</option>
                </select>
              </div>
              {
              userData.data && userData.status === 'fulfilled' && !officersLoaded
              ?
              <p className={css.report_process}>Загрузка сотрудников...</p>
              :
              officersError
              ?
              null
              :
              officers
              &&
              <div className={css.select}>
                <label htmlFor="officer">Сотрудник:</label>
                <select name="officer" onClick={(e) => setOfficer(e.target.value)}>
                  <option value="">Выберите сотрудника</option>
                  {officers.filter((el) => el.approved === true).map((el) => (
                      <option value={el._id} key={el._id}>{el.lastName} {el.firstName}</option>
                  ))}
                </select>
              </div>
              }
            </Form>    
          </section>  
        )
      }
    }
    
    export default Report
