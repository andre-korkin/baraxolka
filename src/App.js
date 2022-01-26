import { useState } from 'react'
import Head from './header/main'
import Categories from './main/content/categories'
import BeforeContent from './beforeContent'
// import Path from './main/content/path'
import Main from './main/main'
import Pagination from './main/content/pagination'
import Footer from './footer/main'


function App() {
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')
    const [isFavorites, setIsFavorites] = useState(false)

    const [condition, setCondition] = useState('Любое')
    const [socket, setSocket] = useState('Все')

    !localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify([]))
    !localStorage.getItem('favorites') && localStorage.setItem('favorites', JSON.stringify([]))

    return (
        <div className="container">
            <Head />
            <Categories category={category} onChange={handleChange} />
            <BeforeContent search={search} onSearch={handleSearch} isFavorites={isFavorites} onFavorites={handleFavorites} />
            {/* <Path /> */}
            <Main category={category} search={search} isFavorites={isFavorites} onSelect={handleSelect}
                condition={condition} socket={socket} />
            <Pagination />
            <Footer />
        </div>
    )


    function handleChange(artcl) {
        setCategory(artcl)
        setSearch('')
        setIsFavorites(false)
        setCondition('Любое')
        setSocket('Все')
    }

    function handleSearch(event) {
        setSearch(event.target.value)
        setIsFavorites(false)
        setCondition('Любое')
        setSocket('Все')
    }

    function handleFavorites() {
        setIsFavorites(!isFavorites)
        setSearch('')
        setCondition('Любое')
        setSocket('Все')
    }

    function handleSelect(varSelect, variant) {
        switch(varSelect) {
            case 'Состояние':
                setCondition(variant)
                break
            case 'Сокет':
                setSocket(variant)
                break
            default:
                break
        }
    }
}

export default App
