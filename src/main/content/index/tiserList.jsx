import React, { useState } from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search, isFavorites, condition, typeCooler, socket, core, cpuFrequency, fsbVar, tdp, ramType, ramSize, ramFraq, videoInterface, hddInterface, platform, videoBitrate, hddType, hddSize }) => {
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

    if(['2', '4'].includes(category)) {
        goodList = platform !== 'Все' ? goodList.filter(good => good['Платформа'] === platform) : goodList
    }

    if(['1', '2', '3'].includes(category)) {
        goodList = ramType !== 'Все' ? goodList.filter(good => good['Тип ОЗУ'] === ramType) : goodList
        goodList = ramSize !== 'Все' ? goodList.filter(good => isHasRAMSize(good)) : goodList
    }

    if(['1', '2'].includes(category)) {
        goodList = ramFraq !== 'Все' ? goodList.filter(good => isHasRAMFraq(good)) : goodList
    }

    if(['1', '3'].includes(category)) {
        goodList = videoInterface !== 'Все' ? goodList.filter(good => good['Тип видео-интерфейса'] === videoInterface) : goodList
    }

    if(['1', '4'].includes(category)) {
        goodList = hddInterface !== 'Все' ? goodList.filter(good => isHasHDDInterface(good)) : goodList
    }

    if(category === '3') {
        goodList = videoBitrate !== 'Все' ? goodList.filter(good => good['Разрядность шины'] === videoBitrate) : goodList
    }

    if(category === '4') {
        goodList = hddType !== 'Все' ? goodList.filter(good => good['Тип накопителя'] === hddType) : goodList
        goodList = hddSize !== 'Все' ? goodList.filter(good => good['Объем'] === hddSize) : goodList
    }


    return goodList.length !== 0
        ? <>
            {goodList.map(good => <Tiser data={good}
                favorites={favorites} onFavorites={toggleFavorites}
                cart={cart} onCart={toggleCart}
                key={good['Артикул']} />)}
        </>
        : <h2 className='not_found'>Ничего не найдено.<br/>Попробуйте изменить условия фильтрации.</h2>


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


    function isHasRAMSize(good) {
        if(good['Объем ОЗУ'].includes('x')) {
            const size = good['Объем ОЗУ'][0] + ' x ' + good['Объем ОЗУ'][2] + ' ГБ'
            return size === ramSize
        }
        else {
            return good['Объем ОЗУ'] === ramSize
        }
    }

    function isHasRAMFraq(good) {
        if(good['Частота ОЗУ'].includes('/')) {
            return good['Частота ОЗУ'].split('/').includes(ramFraq)
        }
        else {
            return good['Частота ОЗУ'] === ramFraq
        }
    }

    function isHasHDDInterface(good) {
        if(good['Тип HDD-интерфейса'].includes('/')) {
            return good['Тип HDD-интерфейса'].split('/').includes(hddInterface)
        }
        else {
            return good['Тип HDD-интерфейса'] === hddInterface
        }
    }
}

export default TiserList
