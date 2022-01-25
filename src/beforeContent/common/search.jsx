import React from 'react'


const Search = ({ search, onChange }) => {
    return (
        <input type='text' placeholder='Поиск...' value={search} onChange={onChange} className="search" />
    )
}

export default Search
