import React, { useState } from 'react'
import Header from '../header'
import Categories from '../main/content/categories'
import Path from '../main/content/path'
import BeforeContent from '../beforeContent'
import Main from '../main'
import Footer from '../footer'


function Home({ match }) {
    const catLabelInit = match.params.catLabel
    const catInit = () => {
        if(catLabelInit === undefined) return undefined
        else {
            switch(catLabelInit.toLowerCase()) {
                case 'cpu':
                    return '0'
                case 'motherboard':
                    return '1'
                case 'ram':
                    return '2'
                case 'videocard':
                    return '3'
                case 'hdd':
                    return '4'
                case 'bp':
                    return '5'
                case 'cooler':
                    return '6'
                case 'set':
                    return '7'
                case 'comp':
                    return '8'
                default:
                    return undefined
            }
        }
    }

    const [category, setCategory] = useState(catInit)
    const [search, setSearch] = useState('')
    const [isFavorites, setIsFavorites] = useState(false)
    const [isSorting, setIsSorting] = useState(false)

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

    const goodArticle = match.params.goodArticle

    return (
        <div className="container">
            {!goodArticle && <>
                <Header page={'/'} />
                <Categories category={category} onChange={handleChange} />
                <BeforeContent search={search} onSearch={handleSearch}
                    isFavorites={isFavorites} onFavorites={handleFavorites}
                    isSorting={isSorting} onSorting={handleSorting} />
                <Main page={'/'} search={search} isFavorites={isFavorites} isSorting={isSorting}
                    category={category} onSelect={handleSelect} filters={filters} />
            </>}
            {catLabelInit && goodArticle && <>
                <Header page={''} />
                <Path page={''} category={catLabelInit} />
                <Main page={''} category={catLabelInit} goodArticle={goodArticle} />
            </>}
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
        setCategory(undefined)
        setIsFavorites(false)
        setFilters(dataFilters)
    }

    function handleFavorites() {
        setIsFavorites(!isFavorites)
        setCategory(undefined)
        setSearch('')
        setFilters(dataFilters)
    }

    function handleSorting() {
        setIsSorting(!isSorting)
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

export default Home
