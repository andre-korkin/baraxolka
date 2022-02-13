import React, { useState, useEffect } from 'react'
import Header from '../header'
import Path from '../main/content/path'
import Main from '../main'
import Footer from '../footer'
import goods from '../db/goods'


function Cart() {
    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    const goodArticles = JSON.parse(localStorage.getItem('cart'))

    const [goodsFromDB, setGoodsFromDb] = useState()
    useEffect(() => goods.then(data => setGoodsFromDb(data)), [])

    const goodsInCart = goodsFromDB.filter(good => goodArticles.includes(good['Артикул']))

    const orderInit = goodsInCart.map(good => {
        return {...good, amount: 1, cost: good['Цена']}
    })

    const [order, setOrder] = useState(orderInit)
    const orderCost = goodsInCart.length !== 0 && order.map(good => good.amount * good['Цена']).reduce((a, b) => a + b)

    return (
        <div className="container">
            <Header page={'/cart'} />
            <Path page={'/cart'} />
            <Main page={'/cart'} order={order} orderCost={orderCost}
                onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
            <Footer />
        </div>
    )

    function handleIncrement(artcl) {
        const newOrder = order.map(good => {
            if(good['Артикул'] === artcl && good.amount < good['Количество']) {
                good.amount++
            }
            return good
        })

        setOrder(newOrder)
    }

    function handleDecrement(artcl) {
        const newOrder = order.map(good => {
            if(good['Артикул'] === artcl && good.amount > 1) {
                good.amount--
            }
            return good
        })

        setOrder(newOrder)
    }

    function handleDelete(artcl) {
        const newOrder = order.filter(good => good['Артикул'] !== artcl)
        setOrder(newOrder)
        localStorage.setItem('cart', JSON.stringify(goodArticles.filter(item => item !== artcl)))
    }
}

export default Cart
