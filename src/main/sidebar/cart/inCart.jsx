import React from 'react'


const InCart = ({ order }) => {
    const orderCost = order.length !== 0 && order.map(good => good.amount * good['Цена']).reduce((a, b) => a + b)

    return order.length !== 0
        ? <div className="incart">
            <h3 className="sum">Итого: {orderCost} тг</h3>
            <h3 className="sale">Оформить заказ</h3>
        </div>
        : ''
}

export default InCart
