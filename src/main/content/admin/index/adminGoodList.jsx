import React from 'react'


const AdminGoodList = () => {
    return (
        <table className="good-list">
            <thead>
                <tr>
                    <th>Артикул</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Состояние</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>000001</td>
                    <td>Игровая сборка</td>
                    <td>140 000</td>
                    <td>1</td>
                    <td>Отличное</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td>000002</td>
                    <td>775 Pentium E6700</td>
                    <td>4 500</td>
                    <td>1</td>
                    <td>Хорошее</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td>000003</td>
                    <td>1155 Acer IPISB-VR</td>
                    <td>18 000</td>
                    <td>1</td>
                    <td>Хорошее</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td>000004</td>
                    <td>DDR3 Transcend 2Gb</td>
                    <td>4 000</td>
                    <td>6</td>
                    <td>Отличное</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td>000005</td>
                    <td>HDD Western Digital 1Tb</td>
                    <td>15 000</td>
                    <td>1</td>
                    <td>Хорошее</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
                <tr>
                    <td>000006</td>
                    <td>AeroCool VX-500</td>
                    <td>12 000</td>
                    <td>1</td>
                    <td>Хорошее</td>
                    <td><div className="edit">&#8943;</div></td>
                    <td><div className="delete">×</div></td>
                </tr>
            </tbody>
        </table>
    )
}

export default AdminGoodList
