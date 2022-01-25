import React from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search }) => {
    const goodList = category ? goods.filter(good => good['Артикул'][0] === category) : goods
    goodList = search ? goodList.filter(good => good['Название'].includes(search) || good['Бренд'].includes(search)) : goodList

    return (
        <>
            {goodList.map(good => <Tiser data={good} key={good['Артикул']} />)}
        </>
    )
}

export default TiserList
