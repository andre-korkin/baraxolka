import React from 'react'
import Condition from './sidebar/condition'
import Socket from './sidebar/socket'
import SidebarCart from './sidebar/sidebarCart'
import InCart from './sidebar/inCart'


const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* <Condition /> */}
            {/* <Socket /> */}
            {/* <SidebarCart /> */}
            <InCart />
        </div>
    )
}

export default Sidebar
