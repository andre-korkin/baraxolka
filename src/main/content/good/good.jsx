import React from 'react'
import Photo from './photo'
import Text from './text'
import goods from '../../../db/goods'


const Good = ({ category, goodArticle }) => {
    const catInit = () => {
        if(category === undefined) return undefined
        else {
            switch(category.toLowerCase()) {
                case 'cpu':
                    return '0'
                case 'motherboard':
                    return '1'
                case 'ram':
                    return '2'
                case 'videocard':
                    return '3'
                case 'hdd':
                    return '4'
                case 'bp':
                    return '5'
                case 'cooler':
                    return '6'
                case 'set':
                    return '7'
                case 'comp':
                    return '8'
                default:
                    return undefined
            }
        }
    }
    if(!catInit()) return <h2 className='not_found'>Такой категории товаров не существует.</h2>

    const good = goods.find(good => good['Артикул'] === goodArticle)
    if(!good) return <h2 className='not_found'>Такого товара не существует.</h2>
    if(good['Количество'] === '0') return <h2 className='not_found'>Данный товар закончился.</h2>

    return (
        <>
            <Photo url={`../img/${category}/${good['Фото']}`} />
            <Text />
        </>
    )
}

export default Good
