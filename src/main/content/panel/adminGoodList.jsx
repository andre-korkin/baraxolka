import React from 'react'
import { Link } from 'react-router-dom'
import EditItem from './editItem'


const AdminGoodList = ({ goodsFromDB, category, search }) => {
    if(goodsFromDB === undefined) return <h2 className='not_found'>Получение списка товаров...</h2>

    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return <h2 className='not_found'>{goodList}</h2>

    goodList = category ? goodList.filter(good => good['Артикул'][0] === category) : goodList

    goodList = search ? goodList.filter(good => (good['Название'] && good['Название'].toLowerCase().includes(search.toLowerCase()))
        || (good['Бренд'] && good['Бренд'].toLocaleLowerCase().includes(search.toLocaleLowerCase()))) : goodList
    
    return goodList.length !== 0
        ? <table className="good-list" style={{ marginTop: '0' }}>
            <thead>
                <tr>
                    <th>Артикул</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Состояние</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {goodList.map(good => {
                    return (
                        <tr key={good['Артикул']}>
                            <td>{good['Артикул']}</td>
                            <td>{<Link to={goodPath(good)}>{goodName(good)}</Link>}</td>
                            <td>{good['Цена']}</td>
                            <td>{good['Количество']}</td>
                            <td>{good['Состояние']}</td>
                            <td><EditItem url={goodPath(good) + '/edit'} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        : <h2 className='not_found'>Ничего не найдено.<br/>Попробуйте изменить условия фильтрации.</h2>

        function goodPath(data) {
            const artcl = data['Артикул'][0]
            let url = ''
    
            switch(artcl) {
                case '0':
                    url = '/cpu/'
                    break
                case '1':
                    url = '/mb/'
                    break
                case '2':
                    url = '/ram/'
                    break
                case '3':
                    url = '/vc/'
                    break
                case '4':
                    url = '/hdd/'
                    break
                case '5':
                    url = '/bp/'
                    break
                case '6':
                    url = '/cool/'
                    break
                case '7':
                    url = '/set/'
                    break
                case '8':
                    url = '/comp/'
                    break
                default:
                    break
            }
    
            url += data['Артикул']
    
            return url
        }
    
        function goodName(data) {
            let title = data['Название']
    
            const artcl = data['Артикул'][0]
    
            switch(artcl) {
                case '2':
                    title = data['Тип ОЗУ'] + ' ' + data['Бренд'] + ' ' + data['Объем ОЗУ']
                    break
                case '4':
                    title = data['Тип накопителя'] + ' ' + data['Бренд'] + ' ' + data['Объем']
                    break
                case '5':
                    title += ' ' + data['Мощность'] + ' Вт'
                    break
                case '6':
                    title += !data['Сокет'] ? ' ' + data['Диаметр'] + ' мм' : ''
                    break
                default:
                    break
            }
    
            return title
        }
}

export default AdminGoodList
