import React from 'react'
import BtnFavorite from './btnFavorite'
import BtnSorting from './btnSorting'
import Search from './search'


const BeforeContent = ({ search, onSearch, isFavorites, onFavorites, isSorting, onSorting }) => {
    return (
        <div className="before-content">
            <BtnSorting isSorting={isSorting} onSorting={onSorting} />
            <BtnFavorite isFavorites={isFavorites} onFavorites={onFavorites} />
            <Search search={search} onSearch={onSearch} />
        </div>
    )
}

export default BeforeContent
                                                                