import React from 'react'
import TiserList from './content/index/tiserList'
import GoodList from './content/cart/goodList'
// import Good from './content/good/good'
// import Order from './content/order/order'
// import Login from './content/login/login'
// import AdminGoodList from './content/admin/index/adminGoodList'


const Content = ({ page, ...props }) => {
    return (
        <div className="content">
            {page === '/' && <TiserList { ...props } />}
            {page === '/cart' && <GoodList { ...props } />}
            {/* <Good /> */}
            {/* <Order /> */}
            {/* <Login /> */}
            {/* <AdminGoodList /> */}
        </div>
    )
}

export default Content
