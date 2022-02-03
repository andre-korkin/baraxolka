import React from 'react'
import MySelect from '../mySelect'


const Frequency = ({ filters, onSelect }) => {
    const variants = ['Все', 'Ниже 2 ГГц', '2-2.4 ГГц', '2.5-2.9 ГГЦ', 'От 3 ГГЦ и выше']

    return <MySelect filter={'cpuFrequency'} filterObject={filters.cpuFrequency} variants={variants} onSelect={onSelect} />
}

export default Frequency
