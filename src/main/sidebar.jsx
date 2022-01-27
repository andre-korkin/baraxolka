import React from 'react'
import Condition from './sidebar/index/condition'
import Socket from './sidebar/index/socket'
import TypeCooler from './sidebar/index/typeCooler'
import Frequency from './sidebar/index/cpu/frequency'
import Cores from './sidebar/index/cpu/cores'
import FSB from './sidebar/index/cpu/fsb'
// import SidebarCart from './sidebar/sidebarCart'
// import InCart from './sidebar/inCart'


const Sidebar = ({ category, condition, typeCooler, socket, cpuFrequency, core, fsbVar, onSelect }) => {
    const socketCategories = ['0', '1', '7', '8']

    return (
        <div className="sidebar">
            <Condition condition={condition} onSelect={onSelect} />
            {category === '6' && <TypeCooler type={typeCooler} onSelect={onSelect} />}
            {(socketCategories.includes(category) || typeCooler === 'Процессорный') && <Socket category={category} socket={socket} onSelect={onSelect} />}
            {category === '0' && <Cores core={core} onSelect={onSelect} />}
            {category === '0' && <Frequency frequency={cpuFrequency} onSelect={onSelect} />}
            {category === '0' && <FSB fsbVar={fsbVar} onSelect={onSelect} />}
            {/* <SidebarCart /> */}
            {/* <InCart /> */}
        </div>
    )
}

export default Sidebar
