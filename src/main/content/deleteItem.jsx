import React from 'react'


const DeleteItem = ({ good, onDelete }) => {
    return <div className="delete" onClick={() => onDelete(good['Артикул'])}>×</div>
}

export default DeleteItem
