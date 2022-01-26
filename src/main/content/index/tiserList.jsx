import React, { useState } from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search, isFavorites }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    let goodList = category ? goods.filter(good => good['Артикул'][0] === category) : goods
    
    goodList = search
        ? goodList.filter(good => (good['Название'] && good['Название'].toLowerCase().includes(search.toLowerCase()))
            || (good['Бренд'] && good['Бренд'].toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        : goodList

    goodList = isFavorites ? goodList.filter(good => favorites.includes(good['Артикул'])) : goodList


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
}

export default TiserList
