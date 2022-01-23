import React from 'react'
import goods from '../../../db/goods'
import Tiser from './tiser'


const TiserList =({ category }) => {
    return (
        <>
            {goods.map(good => (category === '' || good['Артикул'][0] === category) && <Tiser data={good} key={good['Артикул']} />)}
        </>
    )
}

export default TiserList
