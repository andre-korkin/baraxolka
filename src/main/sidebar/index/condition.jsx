import React from 'react'
import MySelect from './mySelect'


const Condition = ({ filters, onSelect }) => {
    const variants = ['Все', 'Новое', 'Отличное', 'Хорошее', 'Среднее']

    return <MySelect filter={'condition'} filterObject={filters.condition} variants={variants} onSelect={onSelect} />
}

export default Condition
