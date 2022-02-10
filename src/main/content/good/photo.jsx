import React from 'react'


const Photo = ({ url }) => {
    return (
        <div className='photo'>
            <img src={url} alt='' />
        </div>
    )
}

export default Photo
