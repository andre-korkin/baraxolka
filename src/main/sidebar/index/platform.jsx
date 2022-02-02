import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const Platform = ({ category, platform, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const pltfrm = ['компьютер', 'ноутбук']

    let arr = []  // список имеющихся платформ
    goodList.forEach(good => !arr.includes(good['Платформа']) && arr.push(good['Платформа']))

    let variants = ['Все']  // имеющиеся платформы в нужном порядке
    pltfrm.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Платформа'} variants={variants} variant={platform} onSelect={onSelect} />
}

export default Platform
