import React from 'react'
import MySelect from './mySelect'


const Condition = ({ condition, onSelect }) => {
    const variants = ['Любое', 'Новое', 'Отличное', 'Хорошее', 'Среднее']

    return <MySelect title={'Состояние'} variants={variants} variant={condition} onSelect={onSelect} />
}

export default Condition
