import React from 'react'
import MySelect from '../mySelect'
import goods from '../../../../db/goods'


const FSB = ({ fsbVar, onSelect }) => {
    const goodList = goods.filter(good => good['Количество'] !== '0' && good['Артикул'][0] === '0')
    const fsb = ['33', '66', '100', '133', '166', '200', '333', '400', '533', '667', '800', '1066', '1333', '1600', '2000', '2133', '2400', '2666', '3200']

    let arr = []  // список имеющихся fsb
    goodList.forEach(good => {
        if(good['Частота системной шины'].includes('/')) {
            good['Частота системной шины'].split('/').forEach(fsbGood => !arr.includes(fsbGood) && arr.push(fsbGood))
        }
        else {
            !arr.includes(good['Частота системной шины']) && arr.push(good['Частота системной шины'])
        }
    })

    let variants = ['Все']  // имеющиеся fsb в нужном порядке
    fsb.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect title={'Частота шины'} variants={variants} variant={fsbVar} onSelect={onSelect} />
}

export default FSB
