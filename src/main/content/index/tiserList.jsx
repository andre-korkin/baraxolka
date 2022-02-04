import React, { useState, useEffect } from 'react'
import goods from '../../../db/goods'
import Pagination from '../pagination'
import Tiser from './tiser'
import _ from 'lodash'


const TiserList =({ category, search, isFavorites, isSorting, filters }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => setCurrentPage(1), [category])

    let goodList = goods.filter(good => good['Количество'] !== '0')

    goodList = category ? goodList.filter(good => good['Артикул'][0] === category) : goodList
    
    goodList = search
        ? goodList.filter(good => (good['Название'] && good['Название'].toLowerCase().includes(search.toLowerCase()))
            || (good['Бренд'] && good['Бренд'].toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        : goodList

    goodList = isFavorites ? goodList.filter(good => favorites.includes(good['Артикул'])) : goodList

    goodList = filters.condition.value !== 'Все' ? goodList.filter(good => good['Состояние'] === filters.condition.value) : goodList

    if(category === '6') {
        if(filters.typeCooler.value === 'Процессорный') {
            goodList = goodList.filter(good => good['Сокет'])
        }
        else if(filters.typeCooler.value === 'Корпусной') {
            goodList = goodList.filter(good => !good['Сокет'])
        }
    }

    if(['0', '1', '6', '7', '8'].includes(category)) {
        goodList = filters.socket.value !== 'Все' ? goodList.filter(good => isHasSocket(good)) : goodList
    }

    if(category === '0') {
        goodList = filters.core.value !== 'Все' ? goodList.filter(good => good['Ядер/потоков'].split('/')[0] === filters.core.value) : goodList
        goodList = filters.cpuFrequency.value !== 'Все' ? goodList.filter(good => isHasFrequency(good)) : goodList
        goodList = filters.tdp.value !== 'Все' ? goodList.filter(good => Number(good['Мощность тепловыделения']) === filters.tdp.value) : goodList
    }

    if(['0', '1'].includes(category)) {
        goodList = filters.fsb.value !== 'Все' ? goodList.filter(good => isHasFSB(good)) : goodList
    }

    if(['2', '4'].includes(category)) {
        goodList = filters.platform.value !== 'Все' ? goodList.filter(good => good['Платформа'] === filters.platform.value) : goodList
    }

    if(['1', '2', '3'].includes(category)) {
        goodList = filters.ramType.value !== 'Все' ? goodList.filter(good => good['Тип ОЗУ'] === filters.ramType.value) : goodList
        goodList = filters.ramSize.value !== 'Все' ? goodList.filter(good => isHasRAMSize(good)) : goodList
    }

    if(['1', '2'].includes(category)) {
        goodList = filters.ramFraq.value !== 'Все' ? goodList.filter(good => isHasRAMFraq(good)) : goodList
    }

    if(['1', '3'].includes(category)) {
        goodList = filters.videoInterface.value !== 'Все' ? goodList.filter(good => good['Тип видео-интерфейса'] === filters.videoInterface.value) : goodList
    }

    if(['1', '4'].includes(category)) {
        goodList = filters.hddInterface.value !== 'Все' ? goodList.filter(good => isHasHDDInterface(good)) : goodList
    }

    if(category === '3') {
        goodList = filters.videoBitrate.value !== 'Все' ? goodList.filter(good => good['Разрядность шины'] === filters.videoBitrate.value) : goodList
    }

    if(category === '4') {
        goodList = filters.hddType.value !== 'Все' ? goodList.filter(good => good['Тип накопителя'] === filters.hddType.value) : goodList
        goodList = filters.hddSize.value !== 'Все' ? goodList.filter(good => good['Объем'] === filters.hddSize.value) : goodList
    }

    if(category === '5') {
        goodList = filters.bpPower.value !== 'Все' ? goodList.filter(good => good['Мощность'] === filters.bpPower.value) : goodList
    }

    const sortPriceGoodList = isSorting ? _.orderBy(goodList, ['Цена'], ['asc']) : goodList

    const allNumberPage = goodList && Math.ceil(goodList.length / 12)
    const currentGoodList = goodList && sortPriceGoodList.slice((currentPage - 1) * 12, currentPage * 12)


    return currentGoodList.length !== 0
        ? <>
            {currentGoodList.map(good => <Tiser data={good}
                favorites={favorites} onFavorites={toggleFavorites}
                cart={cart} onCart={toggleCart}
                key={good['Артикул']} />)}
            {allNumberPage > 1 && <Pagination current={currentPage} all={allNumberPage} onPage={handleChangePage} />}
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
            return good['Сокет'] === filters.socket.value
        }
        else {
            if(good['Сокет']) {
                if(good['Сокет'].includes(',')) {
                    let arrSockets = good['Сокет'].split(',')
                    arrSockets = arrSockets.map(item => item.trim())
                    return arrSockets.includes(filters.socket.value)
                }
                else {
                    return good['Сокет'] === filters.socket.value
                }
            }
        }
    }

    function isHasFrequency(good) {
        const freq = Number(good['Частота ядра'])

        switch(filters.cpuFrequency.value) {
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
            return good['Частота системной шины'].split('/').includes(filters.fsb.value)
        }
        else {
            return good['Частота системной шины'] === filters.fsb.value
        }
    }


    function isHasRAMSize(good) {
        if(good['Объем ОЗУ'].includes('x')) {
            const size = good['Объем ОЗУ'][0] + ' x ' + good['Объем ОЗУ'][2] + ' ГБ'
            return size === filters.ramSize.value
        }
        else {
            return good['Объем ОЗУ'] === filters.ramSize.value
        }
    }

    function isHasRAMFraq(good) {
        if(good['Частота ОЗУ'].includes('/')) {
            return good['Частота ОЗУ'].split('/').includes(filters.ramFraq.value)
        }
        else {
            return good['Частота ОЗУ'] === filters.ramFraq.value
        }
    }

    function isHasHDDInterface(good) {
        if(good['Тип HDD-интерфейса'].includes('/')) {
            return good['Тип HDD-интерфейса'].split('/').includes(filters.hddInterface.value)
        }
        else {
            return good['Тип HDD-интерфейса'] === filters.hddInterface.value
        }
    }

    function handleChangePage(numberPage) {
        setCurrentPage(numberPage)
    }
}

export default TiserList
