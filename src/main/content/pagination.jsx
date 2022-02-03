import React from 'react'


const Pagination = ({ current, all, onPage }) => {
    const arr = new Array(all).fill(0)

    return (
        <div className='pagination'>
            <ul>
                {arr.map((item, i) => <li className={i + 1 === current ? 'active' : ''} onClick={() => onPage(i + 1)} key={i}>{i + 1}</li>)}
            </ul>
        </div>
    )
}

export default Pagination
