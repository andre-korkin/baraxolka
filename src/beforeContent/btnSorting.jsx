import React from 'react'


const BtnSorting = ({ isSorting, onSorting }) => {
    const btnClass = isSorting ? 'sorting active' : 'sorting'
    const btnText = isSorting ? 'Снять сортировку' : 'Сортировать по цене'
    
    return (
        <div className={btnClass} onClick={onSorting}>{btnText}</div>
    )
}

export default BtnSorting
