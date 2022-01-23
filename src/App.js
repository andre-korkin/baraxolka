import { useState } from 'react'
import Head from './header/main'
import Categories from './categories'
import BeforeContent from './beforeContent'
// import Path from './path'
import Main from './main/main'
import Pagination from './pagination'
import Footer from './footer/main'


function App() {
    const [category, setCategory] = useState('')

    return (
        <div className="container">
            <Head />
            <Categories category={category} onChange={handleChange} />
            <BeforeContent />
            {/* <Path /> */}
            <Main category={category} />
            <Pagination />
            <Footer />
        </div>
    )


    function handleChange(artcl) {
        setCategory(artcl)
    }
}

export default App
