import React from 'react'


const Text = () => {
    return (
        <div className="text">
            <h2>Pentium E6700</h2>
            <h3>Артикул: <span>000016</span></h3>
            <h3 className="price">Цена: <span>4 500 тг</span></h3>

            <table>
                <tbody>
                    <tr>
                        <td>Сокет:</td>
                        <td>775</td>
                    </tr>
                    <tr>
                        <td>Ядер/потоков:</td>
                        <td>2/2</td>
                    </tr>
                    <tr>
                        <td>Тактовая частота:</td>
                        <td>3.2 ГГц</td>
                    </tr>
                    <tr>
                        <td>Частота системной шины:</td>
                        <td>1066 МГц</td>
                    </tr>
                    <tr>
                        <td>Объем кэш-памяти:</td>
                        <td>2 МБ</td>
                    </tr>
                    <tr>
                        <td>Мощность тепловыделения:</td>
                        <td>65 Вт</td>
                    </tr>
                    <tr><td colSpan="2">
                        <hr />
                    </td></tr>
                    <tr>
                        <td>Состояние:</td>
                        <td>Отличное</td>
                    </tr>
                    <tr>
                        <td>В наличии:</td>
                        <td>1 шт</td>
                    </tr>
                </tbody>
            </table>

            <div className="buttons">
                <div className="tocart">В корзину</div>
                <div className="tofavorites active">В избранном</div>
            </div>
        </div>
    )
}

export default Text
