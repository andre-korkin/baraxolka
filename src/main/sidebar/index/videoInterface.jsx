import React from 'react'
import MySelect from './mySelect'
import goods from '../../../db/goods'


const VideoInterface = ({ category, videoInterface, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === category)
    const intrface = ['AGP', 'PCI', 'PCI 2.0', 'PCI 3.0']

    let arr = []  // список имеющихся интерфейсов
    goodList.forEach(good => !arr.includes(good['Тип видео-интерфейса']) && arr.push(good['Тип видео-интерфейса']))

    let variants = ['Все']  // имеющиеся интерфейсы в нужном порядке
    intrface.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Тип видео-интерфейса'} variants={variants} variant={videoInterface} onSelect={onSelect} />
}

export default VideoInterface
