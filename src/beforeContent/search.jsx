import React from 'react'


const Search = ({ search, onSearch }) => {
    return (
        <input type='text' placeholder='Поиск...' value={search} onChange={onSearch} className="search" />
    )
}

export default Search
