import React from 'react'
import MySelect from './mySelect'


const Socket = ({ goodsFromDB, category, filters, onSelect }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null
    
    goodList = goodList.filter(good => good['Количество'] !== '0')
    const sockets = ['478', '775', '1156', '1155', '1150', '1151', '462', 'AM2', 'AM2+', 'AM3', 'AM3+', 'AM4']

    let arr = []  // список имеющихся сокетов

    goodList.forEach(good => {
        if(good['Артикул'][0] === category) {
            if(category === '0' || category === '1' || category === '7' || category === '8') {
                if(!arr.includes(good['Сокет'])) {
                    arr.push(good['Сокет'])
                }
            }
            else {
                if(good['Сокет']) {
                    if(good['Сокет'].includes('/')) {
                        let arrSockets = good['Сокет'].split('/')
                        arrSockets = arrSockets.map(item => item.trim())
                        arrSockets.forEach(item => {
                            if(!arr.includes(item)) {
                                arr.push(item)
                            }
                        })
                    }
                    else {
                        if(!arr.includes(good['Сокет'])) {
                            arr.push(good['Сокет'])
                        }
                    }
                }
            }
        }
    })

    let variants = ['Все']  // имеющиеся сокеты в нужном порядке
    sockets.forEach(item => {
        if(arr.includes(item)) {
            variants.push(item)
        }
    })

    return <MySelect filter={'socket'} filterObject={filters.socket} variants={variants} onSelect={onSelect} />
}

export default Socket
