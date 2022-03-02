import React, { useState, useEffect } from 'react'
import Header from '../header'
// import Path from '../main/content/path'
import Categories from '../main/content/categories'
import Search from '../beforeContent/search'
import Main from '../main'
import Footer from '../footer'
import goods from '../db/goods'


function Panel() {
    const [goodsFromDB, setGoodsFromDb] = useState()
    useEffect(() => goods.then(data => setGoodsFromDb(data)), [])

    const [category, setCategory] = useState(undefined)
    const [search, setSearch] = useState('')

    return (
        <div className="container">
            <Header page={'/panel'} />
            <Categories category={category} onChange={handleChange} />
            <div className="before-content"><Search search={search} onSearch={handleSearch} /></div>
            <Main page={'/panel'} category={category} search={search} goodsFromDB={goodsFromDB} />
            <Footer />
        </div>
    )

    function handleChange(artcl) {
        setCategory(artcl)
        setSearch('')
    }

    function handleSearch(event) {
        setSearch(event.target.value)
        setCategory(undefined)
    }

    // const catLabelInit = match.params.catLabel

    // const catInit = () => {
    //     if(catLabelInit === undefined) return undefined
    //     else {
    //         switch(catLabelInit.toLowerCase()) {
    //             case 'cpu':
    //                 return '0'
    //             case 'mb':
    //                 return '1'
    //             case 'ram':
    //                 return '2'
    //             case 'vc':
    //                 return '3'
    //             case 'hdd':
    //                 return '4'
    //             case 'bp':
    //                 return '5'
    //             case 'cool':
    //                 return '6'
    //             case 'set':
    //                 return '7'
    //             case 'comp':
    //                 return '8'
    //             default:
    //                 return undefined
    //         }
    //     }
    // }

    // const [isFavorites, setIsFavorites] = useState(false)
    // const [isSorting, setIsSorting] = useState(false)

    // const dataFilters = {
    //     condition: {name: 'Состояние', value: 'Все'},
    //     typeCooler: {name: 'Тип кулеров', value: 'Все'},
    //     socket: {name: 'Сокет', value: 'Все'},
    //     core: {name: 'Количество ядер', value: 'Все'},
    //     cpuFrequency: {name: 'Частота', value: 'Все'},
    //     fsb: {name: 'Частота шины', value: 'Все'},
    //     tdp: {name: 'Мощность тепловыделения', value: 'Все'},
    //     ramType: {name: 'Тип ОЗУ', value: 'Все'},
    //     ramSize: {name: 'Объем ОЗУ', value: 'Все'},
    //     ramFraq: {name: 'Частота ОЗУ', value: 'Все'},
    //     videoInterface: {name: 'Тип видео-интерфейса', value: 'Все'},
    //     hddInterface: {name: 'Тип HDD-интерфейса', value: 'Все'},
    //     platform: {name: 'Платформа', value: 'Все'},
    //     videoBitrate: {name: 'Разрядность шины', value: 'Все'},
    //     hddType: {name: 'Тип накопителя', value: 'Все'},
    //     hddSize: {name: 'Объем накопителя', value: 'Все'},
    //     bpPower: {name: 'Мощность', value: 'Все'}
    // }

    // const [filters, setFilters] = useState(dataFilters)

    // !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    // !localStorage.getItem('favorites') && localStorage.setItem('favorites', JSON.stringify([]))

    // const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    // const goodArticle = match.params.goodArticle


    // function handleFavorites() {
    //     setIsFavorites(!isFavorites)
    //     setCategory(undefined)
    //     setSearch('')
    //     setFilters(dataFilters)
    // }

    // function handleSorting() {
    //     setIsSorting(!isSorting)
    // }

    // function handleSelect(filter, filterName, variant) {
    //     if(filter === 'typeCooler' && variant === 'Корпусной') {
    //         setFilters({...filters, socket: {name: 'Сокет', value: 'Все'}, typeCooler: {name: 'Тип кулеров', value: variant}})
    //     }
    //     else {
    //         setFilters({...filters, [filter]: {name: filterName, value: variant}})
    //     }
    // }

    // function toggleFavorites(artcl) {
    //     let newFavorites = []
    //     if(favorites.includes(artcl)) {
    //         newFavorites = favorites.filter(goodArticle => goodArticle !== artcl)
    //     }
    //     else {
    //         newFavorites = [...favorites, artcl]
    //     }
    //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
    //     setFavorites(newFavorites)
    // }

    // function toggleCart(artcl) {
    //     let newCart = []
    //     if(cart.includes(artcl)) {
    //         newCart = cart.filter(goodArticle => goodArticle !== artcl)
    //     }
    //     else {
    //         newCart = [...cart, artcl]
    //     }
    //     localStorage.setItem('cart', JSON.stringify(newCart))
    //     setCart(newCart)
    // }
}

export default Panel
