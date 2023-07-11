import React from 'react'
import { Link } from 'react-router-dom';
import css from './navigation.module.scss';

const navigation = [
    {id: 1, path: '/reports', isProtected: true, name: 'Заявки'},
    {id: 2, path: '/officers', isProtected: true, name: 'Сотрудники'}
]

const Navigation = ({onClick}) => {
  return (
    <nav className="navigation">
        {navigation.map((el) => (
             <Link to={el.path} className={css.navigationLink} key={el.id} onClick={onClick}>{el.name}</Link>
        ))}
    </nav>
  )
}

export default Navigation

