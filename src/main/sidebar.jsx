import React from 'react'
import Condition from './sidebar/index/condition'
import Socket from './sidebar/index/socket'
import TypeCooler from './sidebar/index/typeCooler'
import Frequency from './sidebar/index/cpu/frequency'
import Cores from './sidebar/index/cpu/cores'
import FSB from './sidebar/index/fsb'
import TDP from './sidebar/index/tdp'
import RAMType from './sidebar/index/ramType'
import RAMSize from './sidebar/index/ramSize'
import RAMFraq from './sidebar/index/ramFreq'
import VideoInterface from './sidebar/index/videoInterface'
import HDDInterface from './sidebar/index/hddInterface'
import Platform from './sidebar/index/platform'
import VideoBitrate from './sidebar/index/videoBitrate'
import HDDType from './sidebar/index/hdd/hddType'
import HDDSize from './sidebar/index/hdd/hddSize'
import BPPower from './sidebar/index/bpPower'
import InCart from './sidebar/cart/inCart'
// import SidebarCart from './sidebar/sidebarCart'


const Sidebar = ({ page, category, filters, onSelect, goodsCost, allSumCost}) => {
    return (
        <div className="sidebar">
            {page === '/' && <>
                <Condition category={category} filters={filters} onSelect={onSelect} />
                {category === '6' && <TypeCooler filters={filters} onSelect={onSelect} />}
                {(['0', '1', '7', '8'].includes(category) || filters.typeCooler.value === 'Процессорный')
                    && <Socket category={category} filters={filters} onSelect={onSelect} />}
                {category === '0' && <Cores filters={filters} onSelect={onSelect} />}
                {category === '0' && <Frequency filters={filters} onSelect={onSelect} />}
                {['0', '1'].includes(category) && <FSB category={category} filters={filters} onSelect={onSelect} />}
                {category === '0' && <TDP filters={filters} onSelect={onSelect} />}
                {['2', '4'].includes(category) && <Platform category={category} filters={filters} onSelect={onSelect} />}
                {category === '3' && <VideoInterface category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2', '3'].includes(category) && <RAMType category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2', '3'].includes(category) && <RAMSize category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2'].includes(category) && <RAMFraq category={category} filters={filters} onSelect={onSelect} />}
                {category === '1' && <VideoInterface category={category} filters={filters} onSelect={onSelect} />}
                {category === '4' && <HDDType filters={filters} onSelect={onSelect} />}
                {['1', '4'].includes(category) && <HDDInterface category={category} filters={filters} onSelect={onSelect} />}
                {category === '3' && <VideoBitrate filters={filters} onSelect={onSelect} />}
                {category === '4' && <HDDSize filters={filters} onSelect={onSelect} />}
                {category === '5' && <BPPower filters={filters} onSelect={onSelect} />}
            </>}
            {page === '/cart' && <InCart goodsCost={goodsCost} allSumCost={allSumCost} />}
            {/* <SidebarCart /> */}
        </div>
    )
}

export default Sidebar
