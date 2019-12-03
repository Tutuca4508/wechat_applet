// pages/home/home.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    btn: '记录',
    count: 0,
    user: '旧城以西',
    list: []
  },
  handleBtnClick: function() {
    // 小程序不同于vue,没有双向数据绑定
    this.setData({
      count: this.data.count + 1,
      user: this.data.user == '旧城以西' ? '刘世杰' : '旧城以西'
    })
  },
  getList() {
    console.log(this.data)
  },
  onLoad() {
    // 请求数据
    wx.request({
      url: 'http://123.207.32.32:8000/api/v2/recommend',
      success: (res) => {
        const list = res.data.data.list
        this.setData({
          list: list
        })
      }
    })
  }
})