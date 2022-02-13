import React from 'react'
import MySelect from '../mySelect'


const Cores = ({ goodsFromDB, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '0')
    const cores = ['1', '2', '3', '4', '6', '8', '10', '12', 'Больше 12']

    let arr = []  // список имеющихся ядер
    goodList.forEach(good => {
        const coreGood = good['Ядер\\потоков'].split('/')[0]
        !arr.includes(coreGood) && arr.push(coreGood)
    })

    let variants = ['Все']  // имеющиеся ядра в нужном порядке
    cores.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'core'} filterObject={filters.core} variants={variants} onSelect={onSelect} />
}

export default Cores
