import React from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category, search }) => {
    let goodList = category ? goods.filter(good => good['Артикул'][0] === category) : goods
    
    goodList = search
        ? goodList.filter(good => (good['Название'] && good['Название'].toLowerCase().includes(search.toLowerCase()))
            || (good['Бренд'] && good['Бренд'].toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        : goodList

    return (
        <>
            {goodList.map(good => <Tiser data={good} key={good['Артикул']} />)}
        </>
    )
}

export default TiserList
