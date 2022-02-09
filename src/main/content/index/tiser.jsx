import React from 'react'
import { Link } from 'react-router-dom'
import ToCart from '../toCart'
import ToFavorites from '../toFavorites'


const Tiser =({ data, favorites, onFavorites, cart, onCart }) => {
    const isFavorite = favorites.includes(data['Артикул'])
    const isCart = cart.includes(data['Артикул'])

    return (
        <div className='tiser'>
            {<Link to={goodPath()}><img src={data['Фото'] ? imgPrefix() + data['Фото'] : './img/no-image.png'} alt='' /></Link>}
            <h2>{<Link to={goodPath()}>{goodName()}</Link>}</h2>
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

    function goodPath() {
        const artcl = data['Артикул'][0]
        let url = ''

        switch(artcl) {
            case '0':
                url = '/cpu/'
                break
            case '1':
                url = '/mb/'
                break
            case '2':
                url = '/ram/'
                break
            case '3':
                url = '/vc/'
                break
            case '4':
                url = '/hdd/'
                break
            case '5':
                url = '/bp/'
                break
            case '6':
                url = '/cool/'
                break
            case '7':
                url = '/set/'
                break
            case '8':
                url = '/comp/'
                break
            default:
                break
        }

        url += data['Артикул']

        return url
    }

    function goodName() {
        let title = data['Название']

        const artcl = data['Артикул'][0]

        switch(artcl) {
            case '2':
                title = data['Тип ОЗУ'] + ' ' + data['Бренд'] + ' ' + data['Объем ОЗУ']
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
