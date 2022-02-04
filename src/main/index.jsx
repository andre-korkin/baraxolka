import React from 'react'
import Content from './content'
import Sidebar from './sidebar'


const Main = ({ ...props }) => {
    return (
        <div className="main">
            <Content { ...props } />
            <Sidebar { ...props } />
        </div>
    )
}

export default Main
