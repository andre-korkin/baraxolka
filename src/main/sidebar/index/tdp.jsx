import React from 'react'
import MySelect from './mySelect'


const TDP = ({ goodsFromDB, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null
    
    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '0')

    let arr = []  // список имеющихся tdp
    goodList.forEach(good => !arr.includes(Number(good['Мощность тепловыделения'])) && arr.push(Number(good['Мощность тепловыделения'])))

    const variants = ['Все', ...arr.sort(( a, b ) =>  a - b)]  // имеющиеся tdp в порядке возрастания

    return <MySelect filter={'tdp'} filterObject={filters.tdp} variants={variants} onSelect={onSelect} />
}

export default TDP
