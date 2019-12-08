// 请求封装
const requset = ({url,method = 'get',data = {}}) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      success: resolve,
      fail: reject
    })
  })
}

export { requset }