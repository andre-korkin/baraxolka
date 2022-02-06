import React from 'react'
import ToCart from '../toCart'
import ToFavorites from '../toFavorites'


const Text = ({ good, favorites, onFavorites, cart, onCart }) => {
    const isFavorite = favorites.includes(good['Артикул'])
    const isCart = cart.includes(good['Артикул'])
    
    const options = Object.keys(good).filter(item => item !== 'Артикул' && item !== 'Состояние' && item !== 'Цена'
        && item !== 'Количество' && item !== 'Название' && item !== 'Фото')

    return (
        <div className="text">
            <h2>{goodName()}</h2>
            <h3>Артикул: <span>{good['Артикул']}</span></h3>
            <h3 className="price">Цена: <span>{good['Цена']} тг</span></h3>

            <table>
                <tbody>
                    {options.map(item => {
                        return (
                            <tr key={item}>
                                <td>{item}</td>
                                <td>{good[item]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='buttons'>
                <ToCart artcl={good['Артикул']} isCart={isCart} onCart={onCart} />
                <ToFavorites artcl={good['Артикул']} isFavorite={isFavorite} onFavorites={onFavorites} />
            </div>
        </div>
    )

    function goodName() {
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

export default Text
