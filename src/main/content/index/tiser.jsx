import React from 'react'


const Tiser =({ data }) => {
    return (
        <div className='tiser'>
            <img src={imgPrefix() + data['Фото']} alt='' />
            <h2>{goodName()}</h2>
            <h3>{data['Цена'] + ' тг'}</h3>
            <div className='buttons'>
                <div className='tocart'>В корзину</div>
                <div className='tofavorites'>В избранное</div>
            </div>
        </div>
    )


    function imgPrefix() {
        const artcl = data['Артикул'][0]
        let prefix = './img/'

        switch(artcl) {
            case '0':
                prefix += 'cpu/'
                break
            case '1':
                prefix += 'mb/'
                break
            case '2':
                prefix += 'ram/'
                break
            case '3':
                prefix += 'vc/'
                break
            case '4':
                prefix += 'hdd/'
                break
            case '5':
                prefix += 'bp/'
                break
            case '6':
                prefix += 'cool_cpu/'
                break
            case '7':
                prefix += 'cool_case/'
                break
            default:
                break
        }

        return prefix
    }

    function goodName() {
        let title = data['Название']

        const artcl = data['Артикул'][0]

        switch(artcl) {
            case '2':
                title = data['Тип'] + ' ' + data['Бренд'] + ' ' + data['Объем']
                break
            case '4':
                title = data['Тип накопителя'] + ' ' + data['Бренд'] + ' ' + data['Объем']
                break
            case '5':
                title += ' ' + data['Мощность'] + ' Вт'
                break
            case '7':
                title += ' ' + data['Диаметр'] + ' мм'
                break
            default:
                break
        }

        return title
    }
}

export default Tiser
