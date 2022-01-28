import React, { useState } from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search, isFavorites, condition, typeCooler, socket, core, cpuFrequency, fsbVar, tdp, ramType }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    let goodList = goods.filter(good => good['Количество'] !== '0')

    goodList = category ? goodList.filter(good => good['Артикул'][0] === category) : goodList
    
    goodList = search
        ? goodList.filter(good => (good['Название'] && good['Название'].toLowerCase().includes(search.toLowerCase()))
            || (good['Бренд'] && good['Бренд'].toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        : goodList

    goodList = isFavorites ? goodList.filter(good => favorites.includes(good['Артикул'])) : goodList

    goodList = condition !== 'Любое' ? goodList.filter(good => good['Состояние'] === condition) : goodList

    if(category === '6') {
        if(typeCooler === 'Процессорный') {
            goodList = goodList.filter(good => good['Сокет'])
        }
        else if(typeCooler === 'Корпусной') {
            goodList = goodList.filter(good => !good['Сокет'])
        }
    }

    if(['0', '1', '6', '7', '8'].includes(category)) {
        goodList = socket !== 'Все' ? goodList.filter(good => isHasSocket(good)) : goodList
    }

    if(category === '0') {
        goodList = core !== 'Все' ? goodList.filter(good => good['Ядер/потоков'].split('/')[0] === core) : goodList
        goodList = cpuFrequency !== 'Все' ? goodList.filter(good => isHasFrequency(good)) : goodList
        goodList = tdp !== 'Все' ? goodList.filter(good => Number(good['Мощность тепловыделения']) === tdp) : goodList
    }

    if(['0', '1'].includes(category)) {
        goodList = fsbVar !== 'Все' ? goodList.filter(good => isHasFSB(good)) : goodList
    }

    if(category === '1') {
        goodList = ramType !== 'Все' ? goodList.filter(good => good['Тип ОЗУ'] === ramType) : goodList
    }


    return (
        <>
            {goodList.map(good => <Tiser data={good}
                favorites={favorites} onFavorites={toggleFavorites}
                cart={cart} onCart={toggleCart}
                key={good['Артикул']} />)}
        </>
    )


    function toggleFavorites(artcl) {
        let newFavorites = []
        if(favorites.includes(artcl)) {
            newFavorites = favorites.filter(goodArticle => goodArticle !== artcl)
        }
        else {
            newFavorites = [...favorites, artcl]
        }
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        setFavorites(newFavorites)
    }

    function toggleCart(artcl) {
        let newCart = []
        if(cart.includes(artcl)) {
            newCart = cart.filter(goodArticle => goodArticle !== artcl)
        }
        else {
            newCart = [...cart, artcl]
        }
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    function isHasSocket(good) {
        if(category !== '6') {
            return good['Сокет'] === socket
        }
        else {
            if(good['Сокет']) {
                if(good['Сокет'].includes(',')) {
                    let arrSockets = good['Сокет'].split(',')
                    arrSockets = arrSockets.map(item => item.trim())
                    return arrSockets.includes(socket)
                }
                else {
                    return good['Сокет'] === socket
                }
            }
        }
    }

    function isHasFrequency(good) {
        const freq = Number(good['Частота ядра'])

        switch(cpuFrequency) {
            case 'Ниже 2 ГГц':
                return freq < 2
            case '2-2.4 ГГц':
                return freq >= 2 && freq < 2.5
            case '2.5-2.9 ГГЦ':
                return freq >= 2.5 && freq < 3
            case 'От 3 ГГЦ и выше':
                return freq >= 3
            default:
                break
        }
    }

    function isHasFSB(good) {
        if(good['Частота системной шины'].includes('/')) {
            return good['Частота системной шины'].split('/').includes(fsbVar)
        }
        else {
            return good['Частота системной шины'] === fsbVar
        }
    }
}

export default TiserList
