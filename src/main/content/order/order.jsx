import React from 'react'


const Order = () => {
    return (
        <form className='order'>
            <div>
                <p>DDR3 Transcend 2Gb 2 x 4000 = 8000</p>
                <p>HDD Western Digital 1Tb 1 x 15000 = 15000</p>
                <hr />
                <p>Итого: 23000 тг</p>
            </div>
            <input type='text' placeholder='Введите имя' />
            <input type='text' placeholder='Введите телефон или email' />
            <button>Заказать</button>
        </form>
    )
}

export default Order
