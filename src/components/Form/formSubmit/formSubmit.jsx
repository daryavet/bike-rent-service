import React from "react";
import css from "./formSubmit.module.scss"


const FormSubmit =({isValid, dirty, name}) => {

    return(
        <>
        {
            
            (name === "Ok")
            ?
            <button className={css.submit}><a href="/" className={css.submit_link}>{name}</a></button>
            :
            <button className={css.submit} type="submit" disabled={!isValid && !dirty}>{name}</button>
        }
        </>
    )
}

export default FormSubmit;