import React from 'react'


const InCart = ({ goodsCost, allSumCost }) => {
    return Object.keys(goodsCost).length !== 0
        ? <div className="incart">
            <h3 className="sum">Итого: {allSumCost} тг</h3>
            <h3 className="sale">Оформить заказ</h3>
        </div>
        : ''
}

export default InCart
