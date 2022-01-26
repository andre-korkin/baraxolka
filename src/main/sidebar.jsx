import React from 'react'
import Condition from './sidebar/condition'
import Socket from './sidebar/socket'
// import SidebarCart from './sidebar/sidebarCart'
// import InCart from './sidebar/inCart'


const Sidebar = ({ category, condition, socket, onSelect }) => {
    const socketCategories = ['0', '1', '6', '7', '8']
    return (
        <div className="sidebar">
            <Condition condition={condition} onSelect={onSelect} />
            {socketCategories.includes(category) && <Socket category={category} socket={socket} onSelect={onSelect} />}
            {/* <SidebarCart /> */}
            {/* <InCart /> */}
        </div>
    )
}

export default Sidebar
