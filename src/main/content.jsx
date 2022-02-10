import React from 'react'
import TiserList from './content/index/tiserList'
import GoodList from './content/cart/goodList'
import Login from './content/login/form'
import Good from './content/good/good'
// import Order from './content/order/order'
// import AdminGoodList from './content/admin/index/adminGoodList'


const Content = ({ page, category, goodArticle, ...props }) => {
    return (
        <div className="content">
            {page === '/' && <TiserList category={category} { ...props } />}
            {page === '/cart' && <GoodList { ...props } />}
            {page === '/login' && <Login />}
            {page === '' && category && goodArticle && <Good category={category} goodArticle={goodArticle} {...props} />}
            {/* <Order /> */}
            {/* <AdminGoodList /> */}
        </div>
    )
}

export default Content
