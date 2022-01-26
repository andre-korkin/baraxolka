import React from 'react'


const ToFavorites = ({ artcl, isFavorite, onFavorites }) => {
    const btnClass = isFavorite ? 'tofavorites active' : 'tofavorites'
    const btnText = isFavorite ? 'В избранном' : 'В избранное'

    return (
        <div className={btnClass} onClick={() => onFavorites(artcl)}>{btnText}</div>
    )
}

export default ToFavorites
