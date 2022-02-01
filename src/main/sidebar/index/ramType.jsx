import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const RAMType = ({ category, ramType, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const ram = ['DDR', 'DDR2', 'DDR3', 'DDR4', 'DDR5', 'GDDR5', 'GDDR6']

    let arr = []  // список имеющихся ram
    goodList.forEach(good => {
        if(good['Тип ОЗУ'].includes('/')) {
            good['Тип ОЗУ'].split('/').forEach(item => !arr.includes(item) && arr.push(item))
        }
        else {
            !arr.includes(good['Тип ОЗУ']) && arr.push(good['Тип ОЗУ'])
        }
    })

    let variants = ['Все']  // имеющиеся ram в нужном порядке
    ram.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Тип ОЗУ'} variants={variants} variant={ramType} onSelect={onSelect} />
}

export default RAMType
