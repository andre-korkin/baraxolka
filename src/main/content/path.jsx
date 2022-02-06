import React from 'react'
import { Link } from 'react-router-dom'


const Path = ({ page }) => {
    return (
        <div className="path">
            <ul>
                <li><Link to='/'>Главная</Link></li>
                {/* <li>Процессоры</li>
                <li className="active">Pentium E6700</li> */}
                {/* <li className="active">Корзина</li> */}
                {page === '/cart' && <li className={page === '/cart' ? 'active' : ''}>Корзина</li>}
                {/* <li>Оформление заказа</li> */}
                {page === '/login' && <li className='active'>Вход/регистрация</li>}
            </ul>
        </div>
    )
}

export default Path
