import React from 'react'
import TiserList from './content/index/tiserList'
// import Good from './content/good/good'
// import GoodList from './content/cart/goodList'
// import Order from './content/order/order'
// import Login from './content/login/login'
// import AdminGoodList from './content/admin/index/adminGoodList'


const Content = ({ ...props }) => {
    return (
        <div className="content">
            <TiserList { ...props } />
            {/* <Good /> */}
            {/* <GoodList /> */}
            {/* <Order /> */}
            {/* <Login /> */}
            {/* <AdminGoodList /> */}
        </div>
    )
}

export default Content
