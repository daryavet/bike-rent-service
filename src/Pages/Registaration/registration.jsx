import React from 'react'
import {useState} from 'react'
import Form from '../../components/Form/form.jsx'
import {  
  registerFields, 
  registerFormValues, 
  registerValidationSchema} from '../../components/Form/form.js'
import { useDispatch } from 'react-redux'
import { fetchRegister} from '../../redux/user/userSlice.js'
import '../pages.scss'
import Modal from '../../components/modal/Modal.js'
import ErrorImg from '../../resources/errorImg.js'
import okImg from '../../resources/okImg.js'


const Registration =()=>{
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(true);
    const [processMessage, setProcessMessage] = React.useState(null);
    const [processImg, setProcessImg] = React.useState(null);

    const onRegisterHandler = async (values) => {
        dispatch(fetchRegister(values))
        .then((data) => {
          if('error' in data){
            setProcessMessage('Такой пользователь уже существует');
            setProcessImg(ErrorImg)
          }else{
            setProcessMessage('Вы успешно зарегистрированы!Для продолжения работы авторизуйтесь.');
            setProcessImg(okImg)
            setTimeout(() => {
              window.location.href = '/'
            }, 2000)
          }
        })
        .catch(() => {
            setProcessMessage('Ошибка работы сервера');
            setProcessImg(ErrorImg)
        })
    };

    return(
     
        <Modal active={modalActive} setActive={setModalActive}>
        <Form 
          fields={registerFields}
          formValues={registerFormValues} 
          validationSchema={registerValidationSchema} 
          onSubmit={onRegisterHandler} 
          submitName="Зарегистрироваться"
          formName="Регистрация"
          processMessage={processMessage}
          processImg={processImg}
        />
        </Modal>
    )
  
}

export default Registration;