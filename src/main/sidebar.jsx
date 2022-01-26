import React from 'react'
import Condition from './sidebar/condition'
// import Socket from './sidebar/socket'
// import SidebarCart from './sidebar/sidebarCart'
// import InCart from './sidebar/inCart'


const Sidebar = ({ condition, onSelect }) => {
    return (
        <div className="sidebar">
            <Condition condition={condition} onSelect={onSelect} />
            {/* <Socket /> */}
            {/* <SidebarCart /> */}
            {/* <InCart /> */}
        </div>
    )
}

export default Sidebar
