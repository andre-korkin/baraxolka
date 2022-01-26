import React from 'react'
import BtnFavorite from './btnFavorite'
import Search from './search'


const BeforeContent = ({ search, onSearch, isFavorites, onFavorites }) => {
    return (
        <div className="before-content">
            <div className="sorting">Сортировать по цене</div>
            {/* <div className="toggle-favorites">Показать избранное</div> */}
            <BtnFavorite isFavorites={isFavorites} onFavorites={onFavorites} />
            <Search search={search} onSearch={onSearch} />
        </div>
    )
}

export default BeforeContent
