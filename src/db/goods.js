const goods = getGoods()

async function getGoods() {
    try {
        const req = await fetch('https://baraxolka-kz-default-rtdb.asia-southeast1.firebasedatabase.app/goods.json')
        const res = await req.json()
        return Object.values(res)
    }
    catch {
        return 'Ошибка получения данных с сервера'
    }
}  

export default goods
