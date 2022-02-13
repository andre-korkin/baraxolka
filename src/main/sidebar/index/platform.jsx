import React from 'react'
import MySelect from './mySelect'


const Platform = ({ goodsFromDB, category, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const pltfrm = ['компьютер', 'ноутбук']

    let arr = []  // список имеющихся платформ
    goodList.forEach(good => !arr.includes(good['Платформа']) && arr.push(good['Платформа']))

    let variants = ['Все']  // имеющиеся платформы в нужном порядке
    pltfrm.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'platform'} filterObject={filters.platform} variants={variants} onSelect={onSelect} />
}

export default Platform
