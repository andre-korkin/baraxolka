import React from 'react'


const BtnFavorite = ({ isFavorites, onFavorites }) => {
    const btnClass = isFavorites ? 'toggle-favorites active' : 'toggle-favorites'
    const btnText = isFavorites ? 'Показать все товары' : 'Показать избранное'
    
    return (
        <div className={btnClass} onClick={onFavorites}>{btnText}</div>
    )
}

export default BtnFavorite
