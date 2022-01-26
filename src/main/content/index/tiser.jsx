import React from 'react'
import ToCart from '../toCart'
import ToFavorites from '../toFavorites'


const Tiser =({ data, favorites, onFavorites, cart, onCart }) => {
    const isFavorite = favorites.includes(data['Артикул'])
    const isCart = cart.includes(data['Артикул'])

    return (
        <div className='tiser'>
            <img src={data['Фото'] ? imgPrefix() + data['Фото'] : './img/no-image.png'} alt='' />
            <h2>{goodName()}</h2>
            <h3>{data['Цена'] + ' тг'}</h3>
            <div className='buttons'>
                <ToCart artcl={data['Артикул']} isCart={isCart} onCart={onCart} />
                <ToFavorites artcl={data['Артикул']} isFavorite={isFavorite} onFavorites={onFavorites} />
            </div>
        </div>
    )


    function imgPrefix() {
        const artcl = data['Артикул'][0]
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

    function goodName() {
        let title = data['Название']

        const artcl = data['Артикул'][0]

        switch(artcl) {
            case '2':
                title = data['Тип'] + ' ' + data['Бренд'] + ' ' + data['Объем']
                break
            case '4':
                title = data['Тип накопителя'] + ' ' + data['Бренд'] + ' ' + data['Объем']
                break
            case '5':
                title += ' ' + data['Мощность'] + ' Вт'
                break
            case '6':
                title += !data['Сокет'] ? ' ' + data['Диаметр'] + ' мм' : ''
                break
            default:
                break
        }

        return title
    }
}

export default Tiser
