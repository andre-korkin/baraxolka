import React, { useState } from 'react'
import Header from '../header'
import Path from '../main/content/path'
import Main from '../main'
import Footer from '../footer'
import goods from '../db/goods'


function Cart() {
    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    const goodArticles = JSON.parse(localStorage.getItem('cart'))
    const goodsInCart = goods.filter(good => goodArticles.includes(good['Артикул']))

    const goodsData = {}
    goodsInCart.forEach(good => {
        goodsData[good['Артикул']] = {
            price: good['Цена'],
            amount: 1,
            amountMax: good['Количество'],
            cost: good['Цена']
        }
    })

    // const order = goodsInCart.map(good => {
    //     return {...good, amount: 1, cost: good['Цена']}
    // })

    const [goodsCost, setGoodsCost] = useState(goodsData)
    const allSumCost = Object.keys(goodsCost).map(data => goodsCost[data].cost).reduce((a, b) => a + b)

    return (
        <div className="container">
            <Header page={'/cart'} />
            <Path page={'/cart'} />
            <Main page={'/cart'} goodsInCart={goodsInCart} goodsCost={goodsCost} allSumCost={allSumCost}
                onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
            <Footer />
        </div>
    )

    function handleIncrement(good) {
        let newAmount = goodsCost[good['Артикул']].amount
        let newCost = goodsCost[good['Артикул']].cost

        if(newAmount < goodsCost[good['Артикул']].amountMax) {
            newAmount++
            newCost = good['Цена'] * newAmount
        }

        const newData = {
            price: good['Цена'],
            amount: newAmount,
            amountMax: good['Количество'],
            cost: newCost
        }
        setGoodsCost({...goodsCost, [good['Артикул']]: newData})
    }

    function handleDecrement(good) {
        let newAmount = goodsCost[good['Артикул']].amount
        let newCost = goodsCost[good['Артикул']].cost

        if(newAmount > 1) {
            newAmount--
            newCost = good['Цена'] * newAmount
        }

        const newData = {
            price: good['Цена'],
            amount: newAmount,
            amountMax: good['Количество'],
            cost: newCost
        }
        setGoodsCost({...goodsCost, [good['Артикул']]: newData})
    }

    function handleDelete(good) {

    }
}

export default Cart
