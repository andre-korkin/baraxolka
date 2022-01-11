import Head from './header/main'
import Categories from './categories'
import BeforeContent from './beforeContent'
import Path from './path'
import Main from './main/main'
import Pagination from './pagination'
import Footer from './footer/main'


function App() {
  return (
    <div className="container">
        <Head />
        <Categories />
        <BeforeContent />
        {/* <Path /> */}
        <Main />
        <Pagination />
        <Footer />
    </div>
  )
}

export default App
