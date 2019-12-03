// pages/about/about.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avator: app.globalData.avator
  },
  getInfo: function(ev) {
    console.log(ev)
    console.log(this.data.avator)
  }
})