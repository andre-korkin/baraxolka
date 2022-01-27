import React from 'react'


const MySelect = ({ title, variants, variant, onSelect }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {variants.map(item => <li className={item === variant ? 'active' : ''}
                    onClick={() => onSelect(title, item)} key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default MySelect
