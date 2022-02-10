import React from 'react'
import { Link } from 'react-router-dom'
import goods from '../../../db/goods'


const SidebarCart = ({ cart, onCart }) => {
    const goodList = cart && goods.filter(good => cart.includes(good['Артикул']))

    return cart.length > 0 && (
        <div className="cart">
            <h3>Товары в корзине</h3>

            {goodList.map(good => {
                return (
                    <div className='good' key={good['Артикул']}>
                        <img src={good['Фото'] ? imgPrefix(good) + good['Фото'] : './img/no-image.png'} alt='' />
                        <span onClick={() => onCart(good['Артикул'])}>×</span>
                        <h4>{goodName(good)}</h4>
                        <h4 className="price">Цена: <span>{good['Цена']} тг</span></h4>
                    </div>
                )
            })}

            <h3 className="sum">Итого: {cost()} тг</h3>
            <h3 className="link"><Link to='/cart'>Перейти в корзину</Link></h3>
        </div>
    )

    function imgPrefix(good) {
        const artcl = good['Артикул'][0]
        let prefix = '../img/'

        switch(artcl) {
            case '0':
                prefix += 'cpu/'
                break
            case '1':
                prefix += 'mb/'
                break
            case '2':
                prefix += 'ram/'
                break
            case '3':
                prefix += 'vc/'
                break
            case '4':
                prefix += 'hdd/'
                break
            case '5':
                prefix += 'bp/'
                break
            case '6':
                prefix += 'cool/'
                break
            default:
                break
        }

        return prefix
    }

    function goodName(good) {
        let title = good['Название']

        const artcl = good['Артикул'][0]

        switch(artcl) {
            case '2':
                title = good['Тип ОЗУ'] + ' ' + good['Бренд'] + ' ' + good['Объем ОЗУ']
                break
            case '4':
                title = good['Тип накопителя'] + ' ' + good['Бренд'] + ' ' + good['Объем']
                break
            case '5':
                title += ' ' + good['Мощность'] + ' Вт'
                break
            case '6':
                title += !good['Сокет'] ? ' ' + good['Диаметр'] + ' мм' : ''
                break
            default:
                break
        }

        return title
    }

    function cost() {
        return goodList ? goodList.map(good => good['Цена']).reduce((a, b) => a + b) : 0
    }
}

export default SidebarCart
