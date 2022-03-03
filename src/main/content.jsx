import React from 'react'
import TiserList from './content/index/tiserList'
import GoodList from './content/cart/goodList'
import Login from './content/login/form'
import Good from './content/good/good'
import GoodEdit from './content/good/goodEdit'
// import Order from './content/order/order'
import AdminGoodList from './content/panel/adminGoodList'


const Content = ({ page, category, goodArticle, isEdit, ...props }) => {
    return (
        <div className="content">
            {page === '/' && <TiserList category={category} { ...props } />}
            {page === '/cart' && <GoodList { ...props } />}
            {page === '/login' && <Login />}
            {page === '' && category && goodArticle && !isEdit && <Good category={category} goodArticle={goodArticle} {...props} />}
            {page === '' && category && goodArticle && isEdit && <GoodEdit category={category} goodArticle={goodArticle} {...props} />}
            {/* <Order /> */}
            {page === '/panel' && <AdminGoodList category={category} {...props} />}
        </div>
    )
}

export default Content
