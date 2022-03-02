import React from 'react'
import { Link } from 'react-router-dom'


const EditItem = ({ url }) => {
    return <div className="edit"><Link to={url}>&#8943;</Link></div>
}

export default EditItem
