import React from 'react'
import { Link } from 'react-router-dom'


const Path = ({ page, category, onChange }) => {
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

    const catArticle = () => {
        if(category === undefined) return undefined
        else {
            switch(category.toLowerCase()) {
                case 'cpu':
                    return '0'
                case 'mb':
                    return '1'
                case 'ram':
                    return '2'
                case 'vc':
                    return '3'
                case 'hdd':
                    return '4'
                case 'bp':
                    return '5'
                case 'cool':
                    return '6'
                case 'set':
                    return '7'
                case 'comp':
                    return '8'
                default:
                    return undefined
            }
        }
    }

    return (
        <div className="path">
            <ul>
                <li><Link to='/' onClick={() => onChange(undefined)}>Главная</Link></li>
                {page === '' && catName() && <li><Link to={`/${category}`} onClick={() => onChange(catArticle())}>{catName()}</Link></li>}
                {page === '/cart' && <li className={page === '/cart' ? 'active' : ''}>Корзина</li>}
                {/* <li>Оформление заказа</li> */}
                {page === '/login' && <li className='active'>Вход/регистрация</li>}
            </ul>
        </div>
    )
}

export default Path
