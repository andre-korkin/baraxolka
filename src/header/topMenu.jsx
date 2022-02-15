import React from 'react'
import { Link } from 'react-router-dom'


const TopMenu = ({ page, onChange }) => {
    return (
        <ul>
            <li className={page === '/' ? 'active' : ''}>
                {page === '/' ? <Link to='/' onClick={() => onChange(undefined)}>Главная</Link>
                    : <Link to='/'>Главная</Link>}
            </li>
            <li className={page === '/cart' ? 'active' : ''}><Link to='/cart'>Корзина</Link></li>
            <li className={page === '/login' ? 'active' : ''}><Link to='/login'>Вход/регистрация</Link></li>
        </ul>
    )
}

export default TopMenu
