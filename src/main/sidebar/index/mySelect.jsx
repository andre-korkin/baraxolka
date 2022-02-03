import React from 'react'


const MySelect = ({ filter, filterObject, variants, onSelect }) => {
    return (
        <div>
            <h3>{filterObject.name}</h3>
            <ul>
                {variants.map(item => <li className={item === filterObject.value ? 'active' : ''}
                    onClick={() => onSelect(filter, filterObject.name, item)} key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default MySelect
