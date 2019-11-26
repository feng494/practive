import ajax from './ajax'
const BASE = '/api'
export const reqAddress = ({ longitude, latitude }) =>
  ajax.get(BASE + `/position/${latitude},${longitude}`)
// 获取食品分类
export const reqCategorys = () => ajax.get(BASE + `/index_category`)
// 根据经纬度获取商铺
export const reqShopList = ({ longitude, latitude }) => ajax({
  method: 'GET',
  url: BASE + `/shops`,
  params: {
    longitude,
    latitude
  }
})
