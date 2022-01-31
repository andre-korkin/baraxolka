import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const RAMFraq = ({ category, ramFraq, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const ram = ['33', '66', '100', '133', '166', '200', '333', '400', '533', '667', '800', '1066', '1333', '1600', '2000', '2133', '2400', '2666', '3200']

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

    return <MySelect title={'Частота ОЗУ'} variants={variants} variant={ramFraq} onSelect={onSelect} />
}

export default RAMFraq
