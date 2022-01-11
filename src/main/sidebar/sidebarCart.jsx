import React from 'react'


const SidebarCart = () => {
    return (
        <div className="cart">
            <h3>Товары в корзине</h3>

            <div className="good">
                <img src="./img/ram/transcend-2-1333.png" alt="" />
                <span>×</span>
                <h4>DDR3 Transcend 2Gb</h4>
                <h4 className="num">Количество: <span>2 шт</span></h4>
                <h4 className="price">Цена: <span>8 000 тг</span></h4>
            </div>

            <div className="good">
                <img src="./img/hdd/wd-1tb.jpg" alt="" />
                <span>×</span>
                <h4>HDD Western Digital 1Tb</h4>
                <h4 className="num">Количество: <span>1 шт</span></h4>
                <h4 className="price">Цена: <span>15 000 тг</span></h4>
            </div>

            <h3 className="sum">Итого: 23 000 тг</h3>
            <h3 className="link">Перейти в корзину</h3>
        </div>
    )
}

export default SidebarCart
