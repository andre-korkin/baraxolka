import React from 'react'


const InCart = ({ order, orderCost }) => {
    return order.length !== 0
        ? <div className="incart">
            <h3 className="sum">Итого: {orderCost} тг</h3>
            <h3 className="sale">Оформить заказ</h3>
        </div>
        : ''
}

export default InCart
