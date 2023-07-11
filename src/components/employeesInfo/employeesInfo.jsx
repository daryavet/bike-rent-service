import React from "react"
import css from "./employessInfo.module.scss"

const EmployeesInfo = ({officers}) => {

    return (
        <div className={css.empInfo}>
            <h1 className={css.empHeader}>Учет сотрудников в компании</h1>
            <h2 className={css.empSubheader}>Общее число сотрудников: {officers.length}</h2>
            <h2 className={css.empSubheader}>Одобренных сотрудников: {officers.filter((officer)=>officer.approved === true).length} </h2>
        </div>
    )
}

export default EmployeesInfo;