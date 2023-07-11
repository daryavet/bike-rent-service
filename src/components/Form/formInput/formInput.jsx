import React from "react";
import { Field } from "formik";
import css from './formInput.module.scss'

const FormInput = ({label, name, onBlur, onChange, values, touched, errors, type}) =>{
    return(
        <div className={css.input_wrapper}>
            <label htmlFor={name}>{label}:</label>
            <Field className={css.form_input} type={type} onBlur={onBlur} onChange={onChange} name={name} value={!values[`${name}`] ? '' : values[`${name}`]}/>
            {touched[`${name}`] && errors[`${name}`] && <p className={css.error}>{errors[`${name}`]}</p>}

        </div>
    )
}

export default FormInput;