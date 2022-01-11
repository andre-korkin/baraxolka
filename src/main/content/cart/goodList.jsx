import React from 'react'


const GoodList = () => {
    return (
        <table className="good-list">
            <thead>
                <tr>
                    <th>Фото</th>
                    <th>Название</th>
                    <th>Артикул</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="./img/ram/transcend-2-1333.png" alt="" /></td>
                    <td className="link">DDR3 Transcend 2Gb</td>
                    <td>000002</td>
                    <td>4 000 тг</td>
                    <td>
                        <table>
                            <tbody>
                                <tr><td>▲</td></tr>
                                <tr><td>2</td></tr>
                                <tr><td>▼</td></tr>
                            </tbody>
                        </table>
                    </td>
                    <td>8 000 тг</td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td><img src="./img/hdd/wd-1tb.jpg" alt="" /></td>
                    <td className="link">HDD Western Digital 1Tb</td>
                    <td>000106</td>
                    <td>15 000 тг</td>
                    <td>
                        <table>
                            <tbody>
                                <tr><td>▲</td></tr>
                                <tr><td>1</td></tr>
                                <tr><td>▼</td></tr>
                            </tbody>
                        </table>
                    </td>
                    <td>15 000 тг</td>
                    <td><div className="delete">×</div></td>
                </tr>
            </tbody>
        </table>
    )
}

export default GoodList
