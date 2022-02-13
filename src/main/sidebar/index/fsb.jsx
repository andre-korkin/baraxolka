import React from 'react'
import MySelect from './mySelect'


const FSB = ({ goodsFromDB, category, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const fsb = ['33', '66', '100', '133', '166', '200', '333', '400', '533', '667', '800', '1066', '1333', '1600', '2000', '2133', '2400', '2666', '3200', 'Адаптивная']

    let arr = []  // список имеющихся fsb
    goodList.forEach(good => {
        if(good['Частота системной шины'].includes('/')) {
            good['Частота системной шины'].split('/').forEach(fsbGood => !arr.includes(fsbGood) && arr.push(fsbGood))
        }
        else {
            !arr.includes(good['Частота системной шины']) && arr.push(good['Частота системной шины'])
        }
    })

    let variants = ['Все']  // имеющиеся fsb в нужном порядке
    fsb.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'fsb'} filterObject={filters.fsb} variants={variants} onSelect={onSelect} />
}

export default FSB
