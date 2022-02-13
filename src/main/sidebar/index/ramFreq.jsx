import React from 'react'
import MySelect from './mySelect'


const RAMFraq = ({ goodsFromDB, category, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const ram = ['33', '66', '100', '133', '166', '200', '333', '400', '533', '667', '800', '1066', '1200', '1333', '1600', '2000', '2133', '2400', '2666', '3200']

    let arr = []  // список имеющихся ram
    goodList.forEach(good => {
        if(good['Частота ОЗУ'].includes('/')) {
            good['Частота ОЗУ'].split('/').forEach(item => !arr.includes(item) && arr.push(item))
        }
        else {
            !arr.includes(good['Частота ОЗУ']) && arr.push(good['Частота ОЗУ'])
        }
    })

    let variants = ['Все']  // имеющиеся ram в нужном порядке
    ram.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'ramFraq'} filterObject={filters.ramFraq} variants={variants} onSelect={onSelect} />
}

export default RAMFraq
