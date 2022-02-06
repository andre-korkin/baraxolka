import React from 'react'
import Header from '../header'
import Path from '../main/content/path'
import Main from '../main'
import Footer from '../footer'


const Login =() => {
    return (
        <div className="container">
            <Header page={'/login'} />
            <Path page={'/login'} />
            <Main page={'/login'} />
            <Footer />
        </div>
    )
}

export default Login
