import React from 'react'
import {useState} from 'react'
import Form from '../../components/Form/form.jsx'
import {  
  loginFields, 
  loginFormValues, 
  loginValidationSchema} from '../../components/Form/form.js'
import { useDispatch } from 'react-redux'
import { fetchLogin} from '../../redux/user/userSlice.js'
import { setToken } from '../../services/tokenService.js'
import '../pages.scss'
import Modal from '../../components/modal/Modal.js'
import ErrorImg from '../../resources/errorImg.js'
import okImg from '../../resources/okImg.js'



const LogIn = () => {
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(true);
    const [processMessage, setProcessMessage] = React.useState(null);
    const [processImg, setProcessImg] = React.useState(null);

    const onLoginHandler = async (values) => {
        dispatch(fetchLogin(values))
        .then((data) => {
          if('error' in data){
            setProcessMessage(`Такого пользователя не существует, проверьте правильность ввода или зарегиструруйтесь`);
            setProcessImg(ErrorImg)

          }else{
            setProcessMessage('Вы успешно авторизованы')
            setProcessImg(okImg)
            setToken(data.payload.data.token)
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

    return (
      <section>
        <Modal active={modalActive} setActive={setModalActive}> 
            <Form 
            fields={loginFields} 
            formValues={loginFormValues} 
            validationSchema={loginValidationSchema} 
            onSubmit={onLoginHandler} 
            submitName={processMessage?"Ok" : "Вход"}
            formName="Войти"
            processMessage={processMessage}
            processImg={processImg}
            />
          </Modal>
          </section>
    )
}
   

             
        
        
    


export default LogIn;