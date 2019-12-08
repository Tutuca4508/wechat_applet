import { config } from '../utils/config.js'
import { requset } from '../utils/network.js'

export function getMultiData() {
  return requset({
    url: `${config.BASE_URL}/home/multidata`
  })
}

export function getGoodsData(type,page) {
  return requset({
    url: `${config.OTHER_URL}/home/data`,
    data: {
      type,
      page
    }
  })
}