import React from 'react'
import Photo from './photo'
import Text from './text'


const GoodEdit = ({ goodsFromDB, category, goodArticle }) => {
    if(goodsFromDB === undefined) return <h2 className='not_found'>Получение информации о товаре...</h2>

    let goodList = goodsFromDB || []
    if(typeof goodList === 'string') return <h2 className='not_found'>{goodList}</h2>

    const catInit = () => {
        if(category === undefined) return undefined
        else {
            switch(category.toLowerCase()) {
                case 'cpu':
                    return '0'
                case 'mb':
                    return '1'
                case 'ram':
                    return '2'
                case 'vc':
                    return '3'
                case 'hdd':
                    return '4'
                case 'bp':
                    return '5'
                case 'cool':
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

    const good = goodList.find(good => good['Артикул'] === goodArticle)
    if(!good) return <h2 className='not_found'>Такого товара не существует.</h2>

    return (
        <>
            <Photo url={`/img/${category}/${good['Фото']}`} />
            {/* <Text good={good} /> */}
        </>
    )
}

export default GoodEdit
