import React from 'react'


const Pagination = ({ current, all, onPage }) => {
    const arr = new Array(all).fill(0)

    return (
        <div className='pagination'>
            <ul>
                {all <= 5 &&
                    arr.map((item, i) => <li className={i + 1 === current ? 'active' : ''}
                    onClick={() => onPage(i + 1)} key={i}>{i + 1}</li>)}
                {all > 5 && current === 1 && <>
                    <li className='active'>1</li>
                    <li onClick={() => onPage(2)}>►</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
                {all > 5 && current === 2 && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li className='active'>2</li>
                    <li onClick={() => onPage(3)}>►</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
                {all > 5 && current === 3 && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li onClick={() => onPage(2)}>2</li>
                    <li className='active'>3</li>
                    <li onClick={() => onPage(4)}>►</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
                {all > 5 && current === all && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li onClick={() => onPage(all - 1)}>◄</li>
                    <li className='active'>{all}</li>
                </>}
                {all > 5 && current === all - 1 && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li onClick={() => onPage(all - 2)}>◄</li>
                    <li className='active'>{all - 1}</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
                {all > 5 && current === all - 2 && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li onClick={() => onPage(all - 3)}>◄</li>
                    <li className='active'>{all - 2}</li>
                    <li onClick={() => onPage(all - 1)}>{all - 1}</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
                {all > 5 && current > 3 && current < all - 2 && <>
                    <li onClick={() => onPage(1)}>1</li>
                    <li onClick={() => onPage(current - 1)}>◄</li>
                    <li className='active'>{current}</li>
                    <li onClick={() => onPage(current + 1)}>►</li>
                    <li onClick={() => onPage(all)}>{all}</li>
                </>}
            </ul>
        </div>
    )
}

export default Pagination
