import React from 'react'


const AmountItem = ({ good, amount, onIncrement, onDecrement }) => {
    return (
        <table>
            <tbody>
                <tr><td onClick={() => onIncrement(good)}>▲</td></tr>
                <tr><td>{amount}</td></tr>
                <tr><td onClick={() => onDecrement(good)}>▼</td></tr>
            </tbody>
        </table>
    )
}

export default AmountItem
