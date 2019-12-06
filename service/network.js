const request = ({ url, method = 'get', data = {}}) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success: resolve,
      fail: reject
    })
  })
}
export { request }