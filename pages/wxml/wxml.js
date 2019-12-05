// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: 5,
    date: new Date().toLocaleString(),
    flag: true,
    movies: [
      '大话西游',
      '冰与火之歌',
      '荒野求生'
    ],
    arr: [
      [1,2,3],
      [6,2,7],
      [3,9,6]
    ],
    vals: [
      '流行','新款','精选'
    ]
  },
  click(ev) {
    const dataset = ev.target.dataset
    console.log(dataset);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() =>{
      this.setData({
        date: new Date().toLocaleString()
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})