import React from 'react'


const DeleteItem = ({ good, onDelete }) => {
    return <div className="delete" onClick={() => onDelete(good)}>×</div>
}

export default DeleteItem
