import React from 'react'
import MySelect from '../mySelect'
import goods from '../../../../db/goods'


const HDDType = ({ hddType, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '4')
    const types = ['HDD', 'SSD']

    let arr = []  // список имеющихся типов
    goodList.forEach(good => !arr.includes(good['Тип накопителя']) && arr.push(good['Тип накопителя']))

    let variants = ['Все']  // имеющиеся типы в нужном порядке
    types.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Тип накопителя'} variants={variants} variant={hddType} onSelect={onSelect} />
}

export default HDDType
