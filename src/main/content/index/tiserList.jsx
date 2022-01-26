import React, { useState } from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search, isFavorites, condition, socket }) => {
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

    goodList = socket !== 'Все' ? goodList.filter(good => isHasSocket(good)) : goodList


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
}

export default TiserList
