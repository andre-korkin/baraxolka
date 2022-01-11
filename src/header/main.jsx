import React from 'react'
import TopMenu from './topMenu'
import SocialLinks from './socialLinks'


const Head = () => {
    return (
        <div className="head">
            <table>
                <tbody>
                    <tr>
                        <td><img src="./logo.jpg" alt="logo" /></td>
                        <td>
                            <h1>Компьютерная барахолка</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TopMenu />
                                        </td>
                                        <td align="right">
                                            <SocialLinks />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Head
