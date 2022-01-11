import React from 'react'
import BottomMenu from './bottomMenu'


const Footer = () => {
    return (
        <div className="footer">
            <BottomMenu />

            <div className="author">Создание сайта: <a href="#" target="_blank">KStudio</a></div>
        </div>
    )
}

export default Footer
