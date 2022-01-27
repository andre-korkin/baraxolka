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
    const [cpuFrequency, setCPUFrequency] = useState('Все')

    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    !localStorage.getItem('favorites') && localStorage.setItem('favorites', JSON.stringify([]))

    return (
        <div className="container">
            <Head />
            <Categories category={category} onChange={handleChange} />
            <BeforeContent search={search} onSearch={handleSearch} isFavorites={isFavorites} onFavorites={handleFavorites} />
            {/* <Path /> */}
            <Main category={category} search={search} isFavorites={isFavorites} onSelect={handleSelect}
                condition={condition} typeCooler={typeCooler} socket={socket} cpuFrequency={cpuFrequency} />
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
    }

    function handleSearch(event) {
        setSearch(event.target.value)
        setCategory('')
        setIsFavorites(false)
        setCondition('Любое')
        setSocket('Все')
        setCPUFrequency('Все')
    }

    function handleFavorites() {
        setIsFavorites(!isFavorites)
        setCategory('')
        setSearch('')
        setCondition('Любое')
        setSocket('Все')
        setCPUFrequency('Все')
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
            case 'Частота':
                setCPUFrequency(variant)
                break
            default:
                break
        }
    }
}

export default App
