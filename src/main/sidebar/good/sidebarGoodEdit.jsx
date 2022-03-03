import React from 'react'


const SidebarGoodEdit = ({ goodsFromDB, goodArticle }) => {
    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return null

    const good = goodList.find(good => good['Артикул'] === goodArticle)
    if(!good) return null

    return (
        <div className="cart">
            <h3>Редактирование</h3>
        </div>
    )
}

export default SidebarGoodEdit
