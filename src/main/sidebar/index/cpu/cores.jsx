import React from 'react'
import MySelect from '../mySelect'
import goods from '../../../../db/goods'


const Cores = ({ core, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '0')
    const cores = ['1', '2', '3', '4', '6', '8', '10', '12', 'Больше 12']

    let arr = []  // список имеющихся ядер
    goodList.forEach(good => {
        const coreGood = good['Ядер/потоков'].split('/')[0]
        !arr.includes(coreGood) && arr.push(coreGood)
    })

    let variants = ['Все']  // имеющиеся ядра в нужном порядке
    cores.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Количество ядер'} variants={variants} variant={core} onSelect={onSelect} />
}

export default Cores
