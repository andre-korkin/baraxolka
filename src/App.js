import { useState } from 'react'
import Head from './header/main'
import Categories from './main/content/categories'
import BeforeContent from './beforeContent'
// import Path from './main/content/path'
import Main from './main/main'
// import Pagination from './main/content/pagination'
import Footer from './footer/main'


function App() {
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')
    const [isFavorites, setIsFavorites] = useState(false)

    const [condition, setCondition] = useState('Любое')
    const [typeCooler, setTypeCooler] = useState('Все')
    const [socket, setSocket] = useState('Все')
    const [core, setCore] = useState('Все')
    const [cpuFrequency, setCPUFrequency] = useState('Все')
    const [fsb, setFSB] = useState('Все')
    const [tdp, setTDP] = useState('Все')
    const [ramType, setRAMType] = useState('Все')
    const [ramSize, setRAMSize] = useState('Все')
    const [ramFraq, setRAMFraq] = useState('Все')
    const [videoInterface, setVideoInterface] = useState('Все')
    const [hddInterface, setHDDInterface] = useState('Все')

    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    !localStorage.getItem('favorites') && localStorage.setItem('favorites', JSON.stringify([]))

    return (
        <div className="container">
            <Head />
            <Categories category={category} onChange={handleChange} />
            <BeforeContent search={search} onSearch={handleSearch} isFavorites={isFavorites} onFavorites={handleFavorites} />
            {/* <Path /> */}
            <Main category={category} search={search} isFavorites={isFavorites} onSelect={handleSelect}
                condition={condition} typeCooler={typeCooler} socket={socket} core={core}
                cpuFrequency={cpuFrequency} fsbVar={fsb} tdp={tdp} ramType={ramType} ramSize={ramSize}
                ramFraq={ramFraq} videoInterface={videoInterface} hddInterface={hddInterface} />
            {/* <Pagination /> */}
            <Footer />
        </div>
    )


    function handleChange(artcl) {
        setCategory(artcl)
        setSearch('')
        setIsFavorites(false)
        setCondition('Любое')
        setSocket('Все')
        setCPUFrequency('Все')
        setFSB('Все')
        setTDP('Все')
        setRAMType('Все')
        setRAMSize('Все')
        setRAMFraq('Все')
        setVideoInterface('Все')
        setHDDInterface('Все')
    }

    function handleSearch(event) {
        setSearch(event.target.value)
        setCategory('')
        setIsFavorites(false)
        setCondition('Любое')
        setSocket('Все')
        setCPUFrequency('Все')
        setFSB('Все')
        setTDP('Все')
        setRAMType('Все')
        setRAMSize('Все')
        setRAMFraq('Все')
        setVideoInterface('Все')
        setHDDInterface('Все')
    }

    function handleFavorites() {
        setIsFavorites(!isFavorites)
        setCategory('')
        setSearch('')
        setCondition('Любое')
        setSocket('Все')
        setCPUFrequency('Все')
        setFSB('Все')
        setTDP('Все')
        setRAMType('Все')
        setRAMSize('Все')
        setRAMFraq('Все')
        setVideoInterface('Все')
        setHDDInterface('Все')
    }

    function handleSelect(varSelect, variant) {
        switch(varSelect) {
            case 'Состояние':
                setCondition(variant)
                break
            case 'Тип кулеров':
                variant !== 'Процессорный' && setSocket('Все')
                setTypeCooler(variant)
                break
            case 'Сокет':
                setSocket(variant)
                break
            case 'Количество ядер':
                setCore(variant)
                break
            case 'Частота':
                setCPUFrequency(variant)
                break
            case 'Частота шины':
                setFSB(variant)
                break
            case 'Мощность тепловыделения':
                setTDP(variant)
                break
            case 'Тип ОЗУ':
                setRAMType(variant)
                break
            case 'Объем ОЗУ':
                setRAMSize(variant)
                break
            case 'Частота ОЗУ':
                setRAMFraq(variant)
                break
            case 'Тип видео-интерфейса':
                setVideoInterface(variant)
                break
            case 'Тип HDD-интерфейса':
                setHDDInterface(variant)
                break
            default:
                break
        }
    }
}

export default App
