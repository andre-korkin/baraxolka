import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const HDDInterface = ({ category, filters, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const intrface = ['ATA', 'SATA', 'SATAII', 'SATA3']

    let arr = []  // список имеющихся интерфейсов
    goodList.forEach(good => !arr.includes(good['Тип HDD-интерфейса']) && arr.push(good['Тип HDD-интерфейса']))

    let variants = ['Все']  // имеющиеся интерфейсы в нужном порядке
    intrface.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'hddInterface'} filterObject={filters.hddInterface} variants={variants} onSelect={onSelect} />
}

export default HDDInterface
