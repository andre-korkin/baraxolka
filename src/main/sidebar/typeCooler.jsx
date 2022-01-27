import React from 'react'
import MySelect from './mySelect'


const TypeCooler = ({ type, onSelect }) => {
    const variants = ['Все', 'Процессорный', 'Корпусной']

    return <MySelect title={'Тип кулеров'} variants={variants} variant={type} onSelect={onSelect} />
}

export default TypeCooler
