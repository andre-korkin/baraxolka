import React from 'react'
import MySelect from './mySelect'


const Condition = ({ goodsFromDB, category, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null
    
    goodList = goodList.filter(good => good['Количество'] !== '0' && (category ? good['Артикул'][0] === category : true))
    const vars = ['Все', 'Новое', 'Отличное', 'Хорошее', 'Среднее']

    let arr = []  // список имеющихся вариантов товара в наличии
    goodList.forEach(good => !arr.includes(good['Состояние']) && arr.push(good['Состояние']))

    let variants = ['Все']  // имеющиеся варианты товара в нужном порядке
    vars.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'condition'} filterObject={filters.condition} variants={variants} onSelect={onSelect} />
}

export default Condition
