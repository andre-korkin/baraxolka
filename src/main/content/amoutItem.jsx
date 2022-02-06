import React from 'react'


const AmountItem = ({ good, onIncrement, onDecrement }) => {
    return (
        <table>
            <tbody>
                <tr><td onClick={() => onIncrement(good['Артикул'])}>▲</td></tr>
                <tr><td>{good.amount}</td></tr>
                <tr><td onClick={() => onDecrement(good['Артикул'])}>▼</td></tr>
            </tbody>
        </table>
    )
}

export default AmountItem
