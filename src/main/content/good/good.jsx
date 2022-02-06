import React, { useState } from 'react'
import Photo from './photo'
import Text from './text'
import goods from '../../../db/goods'


const Good = ({ category, goodArticle }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const catInit = () => {
        if(category === undefined) return undefined
        else {
            switch(category.toLowerCase()) {
                case 'cpu':
                    return '0'
                case 'mb':
                    return '1'
                case 'ram':
                    return '2'
                case 'vc':
                    return '3'
                case 'hdd':
                    return '4'
                case 'bp':
                    return '5'
                case 'cool':
                    return '6'
                case 'set':
                    return '7'
                case 'comp':
                    return '8'
                default:
                    return undefined
            }
        }
    }
    if(!catInit()) return <h2 className='not_found'>Такой категории товаров не существует.</h2>

    const good = goods.find(good => good['Артикул'] === goodArticle)
    if(!good) return <h2 className='not_found'>Такого товара не существует.</h2>
    if(good['Количество'] === '0') return <h2 className='not_found'>Данный товар закончился.</h2>

    return (
        <>
            <Photo url={`../img/${category}/${good['Фото']}`} />
            <Text good={good} favorites={favorites} onFavorites={toggleFavorites} cart={cart} onCart={toggleCart} />
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

export default Good
