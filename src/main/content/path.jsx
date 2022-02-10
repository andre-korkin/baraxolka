import React from 'react'
import { Link } from 'react-router-dom'


const Path = ({ page, category }) => {
    const catName = () => {
        if(category === undefined) return undefined
        else {
            switch(category.toLowerCase()) {
                case 'cpu':
                    return 'Процессоры'
                case 'mb':
                    return 'Материнские платы'
                case 'ram':
                    return 'Оперативная память'
                case 'vc':
                    return 'Видеокарты'
                case 'hdd':
                    return 'Накопители'
                case 'bp':
                    return 'Блоки питания'
                case 'cool':
                    return 'Кулеры'
                case 'set':
                    return 'Комплекты'
                case 'comp':
                    return 'Сборки'
                default:
                    return undefined
            }
        }
    }

    return (
        <div className="path">
            <ul>
                <li><Link to='/'>Главная</Link></li>
                {page === '' && catName() && <li><Link to={`/${category}`}>{catName()}</Link></li>}
                {page === '/cart' && <li className={page === '/cart' ? 'active' : ''}>Корзина</li>}
                {/* <li>Оформление заказа</li> */}
                {page === '/login' && <li className='active'>Вход/регистрация</li>}
            </ul>
        </div>
    )
}

export default Path
