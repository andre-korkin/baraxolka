import React from 'react'


const ToCart = ({ artcl, isCart, onCart }) => {
    const btnClass = isCart ? 'tocart active' : 'tocart'
    const btnText = isCart ? 'В корзине' : 'В корзину'

    return (
        <div className={btnClass} onClick={() => onCart(artcl)}>{btnText}</div>
    )
}

export default ToCart
