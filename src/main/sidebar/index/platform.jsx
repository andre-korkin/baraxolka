import React from 'react'
import MySelect from './mySelect'


const Platform = ({ platform, onSelect }) => {
    const variants = ['Все', 'компьютер', 'ноутбук']

    return <MySelect title={'Платформа'} variants={variants} variant={platform} onSelect={onSelect} />
}

export default Platform
