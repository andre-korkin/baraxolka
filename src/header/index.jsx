import React from 'react'
import TopMenu from './topMenu'
import SocialLinks from './socialLinks'


const Header = ({ page }) => {
    return (
        <div className="head">
            <table>
                <tbody>
                    <tr>
                        <td><img src="./logo.jpg" alt="logo" /></td>
                        <td align="right">
                            <h1>Компьютерная барахолка</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TopMenu page={page} />
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

export default Header
