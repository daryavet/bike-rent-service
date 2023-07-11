import React from "react";
import { useState } from "react";
import css from './deleteBtn.module.scss'
import Modal from "../modal/Modal";
import question from '../../resources/question_mark.png'

const DeleteButton = ({removeFunction, id, redirectTo, setErrorMessage}) => {
    const [modalActive, setModalActive] = useState(false);

    const onClickHandler = () => {
        removeFunction(id)
        .then(() => window.location.pathname = `${redirectTo}`)
        .catch(() => setErrorMessage('Не удалось удалить сообщение'))
    }
    

  return (
    <>
    <button className={css.delete_btn} onClick={setModalActive}>
        Удалить
    </button>

    <Modal active={modalActive} setActive={setModalActive}>
    <div className={css.alert}><img src={question} alt="is ok?"/><span className={css.alert_message}>Вы действительно хотите удалить запись?</span></div>
    <button className={css.alert_btn} type="submit" onClick={onClickHandler}>Подтвердить</button>
    </Modal>
    </>

  )
}

export default DeleteButton