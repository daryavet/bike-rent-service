import React from "react";
import { Formik, Form as FormikForm } from "formik";
import FormInput from "./formInput/formInput";
import FormSubmit from "./formSubmit/formSubmit";
import css from './form.module.scss';

const Form = ({isValided, isDirty, children, fields, formValues, validationSchema, onSubmit, submitName, formName, processMessage, processImg}) => {

    return (
        <div>
            {processMessage && <div className={css.process_message}><div className={css.process_message_img}>{processImg}</div><p className={css.process_message_mes}>{processMessage}</p></div>}
            <Formik
            initialValues={formValues}
            onSubmit={(values) => {
              onSubmit(values)
            }
            }
            validationSchema={validationSchema}
            >
            {({values, errors, touched, handleChange, handleBlur, isValid = isValided, dirty = isDirty}) => (
                <FormikForm className={css.form}>
                <div className={css.form_header}>{formName}</div>
                {fields.map((el) => (
                    <FormInput 
                        label={el.label} 
                        name={el.name}
                        type={el.type} 
                        values={values} 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        touched={touched}
                        errors={errors}
                        key={el.id}
                    />
                ))}
                { children }
                <FormSubmit isValid={isValid} dirty={dirty} name={submitName}/>
                </FormikForm>
            )}
            </Formik>
            
        </div>
      )
    }
    
    export default Form