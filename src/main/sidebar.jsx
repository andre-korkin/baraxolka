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
import SidebarCart from './sidebar/good/sidebarCart'


const Sidebar = ({ page, goodsFromDB, category, filters, onSelect, cart, onCart, order, orderCost}) => {
    return (
        <div className="sidebar">
            {page === '/' && <>
                <Condition goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />
                {category === '6' && <TypeCooler goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {(['0', '1', '7', '8'].includes(category) || filters.typeCooler.value === 'Процессорный')
                    && <Socket goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '0' && <Cores goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {category === '0' && <Frequency goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {['0', '1'].includes(category) && <FSB goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '0' && <TDP goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {['2', '4'].includes(category) && <Platform goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '3' && <VideoInterface goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2', '3'].includes(category) && <RAMType goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2', '3'].includes(category) && <RAMSize goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {['1', '2'].includes(category) && <RAMFraq goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '1' && <VideoInterface goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '4' && <HDDType goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {['1', '4'].includes(category) && <HDDInterface goodsFromDB={goodsFromDB} category={category} filters={filters} onSelect={onSelect} />}
                {category === '3' && <VideoBitrate goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {category === '4' && <HDDSize goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
                {category === '5' && <BPPower goodsFromDB={goodsFromDB} filters={filters} onSelect={onSelect} />}
            </>}
            {page === '' && <SidebarCart goodsFromDB={goodsFromDB} cart={cart} onCart={onCart} />}
            {page === '/cart' && <InCart order={order} orderCost={orderCost} />}
        </div>
    )
}

export default Sidebar
