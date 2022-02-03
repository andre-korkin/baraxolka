import React from 'react'
import MySelect from './mySelect'


const TypeCooler = ({ filters, onSelect }) => {
    const variants = ['Все', 'Процессорный', 'Корпусной']

    return <MySelect filter={'typeCooler'} filterObject={filters.typeCooler} variants={variants} onSelect={onSelect} />
}

export default TypeCooler
