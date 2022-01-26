import React from 'react'


const Categories = ({ category, onChange }) => {
    const catList = [
        {artcl: '', name: 'Все товары'},
        {artcl: '0', name: 'Процессоры'},
        {artcl: '1', name: 'Мат. платы'},
        {artcl: '2', name: 'Оп. память'},
        {artcl: '3', name: 'Видеокарты'},
        {artcl: '4', name: 'Накопители'},
        {artcl: '5', name: 'Бл. питания'},
        {artcl: '6', name: 'Кулеры'},
        {artcl: '7', name: 'Комплекты'},
        {artcl: '8', name: 'Сборки'}
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
