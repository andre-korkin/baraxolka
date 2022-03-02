import React from 'react'
import { Link } from 'react-router-dom'


const BtnBlue = ({ txt, url }) => {
    return <h3 className="sale"><Link to={url}>{txt}</Link></h3>
}

export default BtnBlue
