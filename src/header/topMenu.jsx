import React from 'react'
import { Link } from 'react-router-dom'


const TopMenu = () => {
    return (
        <ul>
            <li className="active"><Link to='/'>Главная</Link></li>
            <li><Link to='/cart'>Корзина</Link></li>
            <li><Link to='/login'>Вход/регистрация</Link></li>
        </ul>
    )
}

export default TopMenu
