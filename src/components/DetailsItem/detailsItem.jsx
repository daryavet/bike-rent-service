import React from 'react';
import css from './detailsItem.module.scss'
import { valueParser } from '../utilits/valueTranslate';
import { bikeValues, statusValues } from '../utilits/valueTranslate';


const DetailsItem = ({value, name}) => {
 

  return (
    
    <ul className={css.details}>
    <li className={css.details_item}>
      <span className={css.details_item_title}>{name}: </span>
      {
      name === 'Тип'
      ? 
      valueParser(bikeValues, value)
      :
      name === 'Статус'
      ? 
      valueParser(statusValues, value)
      :
      name === 'Одобрен'
      ?
      value ? 'Да' : 'Нет'
      :
      value ? value : 'Нет данных'
      }
     </li>
     </ul>
  )
}

export default DetailsItem