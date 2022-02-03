import React from 'react'
import MySelect from '../mySelect'
import goods from '../../../../db/goods'


const HDDSize = ({ filters, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '4')
    const sizes = ['80 ГБ', '120 ГБ', '160 ГБ', '240 ГБ', '250 ГБ', '320 ГБ', '500 ГБ', '1 ТБ']

    let arr = []  // список имеющихся размеров
    goodList.forEach(good => !arr.includes(good['Объем']) && arr.push(good['Объем']))

    let variants = ['Все']  // имеющиеся размеры в нужном порядке
    sizes.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'hddSize'} filterObject={filters.hddSize} variants={variants} onSelect={onSelect} />
}

export default HDDSize
