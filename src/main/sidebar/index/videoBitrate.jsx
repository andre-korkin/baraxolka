import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const VideoBitrate = ({ videoBitrate, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '3')
    const intrface = ['32', '64', '128', '192', '256']

    let arr = []  // список имеющихся интерфейсов
    goodList.forEach(good => !arr.includes(good['Разрядность шины']) && arr.push(good['Разрядность шины']))

    let variants = ['Все']  // имеющиеся интерфейсы в нужном порядке
    intrface.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Разрядность шины'} variants={variants} variant={videoBitrate} onSelect={onSelect} />
}

export default VideoBitrate
