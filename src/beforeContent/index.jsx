import React from 'react'
import Search from './common/search'


const BeforeContent = ({ search, onChange }) => {
    return (
        <div className="before-content">
            <div className="sorting">Сортировать по цене</div>
            <div className="toggle-favorites">Показать избранное</div>
            <Search search={search} onChange={onChange} />
        </div>
    )
}

export default BeforeContent
