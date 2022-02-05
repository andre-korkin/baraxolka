import React from 'react'
import AmountItem from '../amoutItem'
import DeleteItem from '../deleteItem'


const GoodList = ({ goodsInCart, goodsCost, onIncrement, onDecrement, onDelete }) => {
    return goodsInCart.length !== 0
        ? <table className="good-list">
            <thead>
                <tr>
                    <th>Фото</th>
                    <th>Название</th>
                    <th>Артикул</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {goodsInCart.map(good => {
                    return (
                        <tr key={good['Артикул']}>
                            <td><img  src={good['Фото'] ? imgPrefix(good) + good['Фото'] : './img/no-image.png'} alt='' /></td>
                            <td className="link">{goodName(good)}</td>
                            <td>{good['Артикул']}</td>
                            <td>{good['Цена']} тг</td>
                            <td>
                                <AmountItem good={good} amount={goodsCost[good['Артикул']].amount} onIncrement={onIncrement} onDecrement={onDecrement} />
                            </td>
                            <td>{goodsCost[good['Артикул']].cost} тг</td>
                            <td><DeleteItem good={good} onDelete={onDelete} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        : <h2 className='not_found'>В корзине пока нет товаров.</h2>

    function imgPrefix(good) {
        const artcl = good['Артикул'][0]
        let prefix = './img/'

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
}

export default GoodList
