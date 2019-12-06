App({
  data: {
    token: ''
  },
  onLaunch() {
    // 取token
    const has_token = wx.getStorageSync('token')
    if (has_token) {
      wx.showToast({
        title: '登录成功',
      })
    }
    // 获取用户code
    wx.login({
      success: res => {
        const { code } = res
        // 发送请求/获取token
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: { code },
          success: res => {
            this.data.token = res.data.token
            
            // 同步本地存储
            // wx.setStorageSync(key, data)
            // 异步本地存储
            wx.setStorage({
              key: 'token',
              data: res.data.token,
            })
          }
        })
      }
    })
  }
})