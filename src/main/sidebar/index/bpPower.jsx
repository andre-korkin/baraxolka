import React from 'react'
import MySelect from './mySelect'


const BPPower = ({ goodsFromDB, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    goodList = goodList.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '5')
    const bp = ['300', '350', '400', '450', '500', '550', '600']

    let arr = []  // список имеющихся блоков
    goodList.forEach(good => !arr.includes(good['Мощность']) && arr.push(good['Мощность']))

    let variants = ['Все']  // имеющиеся блоки в нужном порядке
    bp.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'bpPower'} filterObject={filters.bpPower} variants={variants} onSelect={onSelect} />
}

export default BPPower
