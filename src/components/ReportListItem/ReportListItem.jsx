import React from "react"
import icnNew from '../../resources/new_icn.png'
import icnDone from '../../resources/done_icn.png' 
import icnProgress from '../../resources/inprogress_icn.png'
import './ReportListItem.scss'


 const ReportListItem = ({report}) =>{
    return (
        
        <a href={`/reports/id=${report._id}`} className="link">
         <li>
            <ul className="report_list_item">
            <li className="list_item">{report.status === "new"?<img src={icnNew} alt="new" title="Новое"/>:(report.status === "in_progress")?<img src={icnProgress} alt="in progress" title="В работе"/>:<img src={icnDone} alt="done" title="Закрыто"/>}</li>
                  <li className="list_item">{report.ownerFullName}</li>
                  {report.type === "general" ? <li className="list_item">Обычный</li> : <li className="list_item">Спортивный</li>}
                  <li className="list_item">{(!report.color)? "Не указан": report.color}</li>
            </ul>
      
        </li>
        </a>
       
      )
}

export default ReportListItem