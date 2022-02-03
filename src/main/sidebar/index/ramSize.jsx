import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const RAMSize = ({ category, filters, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    let ram = []
    if(category === '1') {
        ram = ['2 x 1 ГБ', '2 x 2 ГБ', '2 x 4 ГБ', '2 x 8 ГБ', '4 x 1 ГБ', '4 x 2 ГБ', '4 x 4 ГБ', '4 x 8 ГБ']
    }
    else {
        ram = ['16 МБ', '32 МБ', '64 МБ','128 МБ', '256 МБ', '512 МБ', '1 ГБ', '2 ГБ', '4 ГБ', '8 ГБ']
    }

    let arr = []  // список имеющихся ram
    goodList.forEach(good => {
        if(good['Объем ОЗУ'].includes('x')) {
            const size = good['Объем ОЗУ'][0] + ' x ' + good['Объем ОЗУ'][2] + ' ГБ'
            !arr.includes(size) && arr.push(size)
        }
        else {
            !arr.includes(good['Объем ОЗУ']) && arr.push(good['Объем ОЗУ'])
        }
    })

    let variants = ['Все']  // имеющиеся ram в нужном порядке
    ram.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'ramSize'} filterObject={filters.ramSize} variants={variants} onSelect={onSelect} />
}

export default RAMSize
