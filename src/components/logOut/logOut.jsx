import React from 'react'
import styles from './logOut.module.scss';
import { removeToken } from '../../services/tokenService';

const LogOut = () => {

  const onClickHandler = () => {
    removeToken();
    window.location.href = '/'
  }

  return (
    <button className={styles.logoutButton} onClick={onClickHandler}>
        Выйти
    </button>
  )
}

export default LogOut;