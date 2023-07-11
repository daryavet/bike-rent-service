import React from 'react'
import css from './actions.module.scss'
import { useSelector } from 'react-redux'
import { user } from '../../../redux/selectors'
import { Link } from 'react-router-dom'
import homeIcn from '../../../resources/home_icn.png'

const actions = [
  {id: 1, name: 'Главная', href:"/", hideWithAuth: false, hideOnHome: true, src: `${homeIcn}`},
  {id: 2, name: 'Войти', href: '/login', hideWithAuth: true, hideOnHome: false},
  {id: 3, name: 'Регистрация', href: '/registration', hideWithAuth: true, hideOnHome: false},
  {id: 4, name: 'Сообщить о краже', href: '/report', hideWithAuth: false, hideOnHome: false},
  
  
]

const Actions = ({onClick}) => {
  const userData = useSelector(user);
  const checkHomePage = () =>{
    if (window.location.pathname === '/'){
      return true
    }
    else{
      return false
    }
  }
  const userIsLoaded = userData.status === 'fulfilled' || userData.status === 'rejected' || userData.status === 'idle'

  return (
    userIsLoaded
    &&
    <div className={css.actions}>
        {actions.map((el) => (
          checkHomePage()
          &&
          el.hideOnHome
          ?
          null
          :
          userData.data && userData.status === 'fulfilled'
          &&
          el.hideWithAuth
          ?
          null
          :
          <Link to={`${el.href}`} className={css.actionItem} key={el.id} onClick={onClick}>
            {
            el.src
            ?
            <>
            <img  className={css.icn_home} src={el.src} alt={el.name} />
            <span>{el.name}</span>
            </>
            : 
            <span>{el.name}</span>
            }
        </Link>
              ))}
            </div>
  )
}

export default Actions