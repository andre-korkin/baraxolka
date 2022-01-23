import React from 'react'


const Categories = ({ category, onChange }) => {
    const catList = [
        {artcl: '', name: 'Все товары'},
        {artcl: '0', name: 'Процессоры'},
        {artcl: '1', name: 'Материнские платы'},
        {artcl: '2', name: 'Оперативная память'},
        {artcl: '3', name: 'Видеокарты'},
        {artcl: '4', name: 'Жесткие диски'},
        {artcl: '5', name: 'Блоки питания'},
        {artcl: 'f', name: 'Разное'}
    ]

    return (
        <div className="categories">
            <ul>
                {catList.map(cat => {
                    return <li className={category === cat.artcl ? 'active' : ''} onClick={() => onChange(cat.artcl)} key={cat.artcl}>{cat.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories
