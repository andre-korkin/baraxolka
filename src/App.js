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

    const dataFilters = {
        condition: {name: 'Состояние', value: 'Все'},
        typeCooler: {name: 'Тип кулеров', value: 'Все'},
        socket: {name: 'Сокет', value: 'Все'},
        core: {name: 'Количество ядер', value: 'Все'},
        cpuFrequency: {name: 'Частота', value: 'Все'},
        fsb: {name: 'Частота шины', value: 'Все'},
        tdp: {name: 'Мощность тепловыделения', value: 'Все'},
        ramType: {name: 'Тип ОЗУ', value: 'Все'},
        ramSize: {name: 'Объем ОЗУ', value: 'Все'},
        ramFraq: {name: 'Частота ОЗУ', value: 'Все'},
        videoInterface: {name: 'Тип видео-интерфейса', value: 'Все'},
        hddInterface: {name: 'Тип HDD-интерфейса', value: 'Все'},
        platform: {name: 'Платформа', value: 'Все'},
        videoBitrate: {name: 'Разрядность шины', value: 'Все'},
        hddType: {name: 'Тип накопителя', value: 'Все'},
        hddSize: {name: 'Объем накопителя', value: 'Все'},
        bpPower: {name: 'Мощность', value: 'Все'}
    }

    const [filters, setFilters] = useState(dataFilters)

    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    !localStorage.getItem('favorites') && localStorage.setItem('favorites', JSON.stringify([]))

    return (
        <div className="container">
            <Head />
            <Categories category={category} onChange={handleChange} />
            <BeforeContent search={search} onSearch={handleSearch} isFavorites={isFavorites} onFavorites={handleFavorites} />
            {/* <Path /> */}
            <Main category={category} search={search} isFavorites={isFavorites} onSelect={handleSelect} filters={filters} />
            {/* <Pagination /> */}
            <Footer />
        </div>
    )


    function handleChange(artcl) {
        setCategory(artcl)
        setSearch('')
        setIsFavorites(false)
        setFilters(dataFilters)
    }

    function handleSearch(event) {
        setSearch(event.target.value)
        setCategory('')
        setIsFavorites(false)
        setFilters(dataFilters)
    }

    function handleFavorites() {
        setIsFavorites(!isFavorites)
        setCategory('')
        setSearch('')
        setFilters(dataFilters)
    }

    function handleSelect(filter, filterName, variant) {
        if(filter === 'typeCooler' && variant === 'Корпусной') {
            setFilters({...filters, socket: {name: 'Сокет', value: 'Все'}, typeCooler: {name: 'Тип кулеров', value: variant}})
        }
        else {
            setFilters({...filters, [filter]: {name: filterName, value: variant}})
        }
    }
}

export default App
