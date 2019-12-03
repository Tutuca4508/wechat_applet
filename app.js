App({
  data: {
    avator: '',
    list: []
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 异步调用=>获取用户信息
    const res = wx.getUserInfo({
      success: function(res) {
        const { avatarUrl, nickName } = res.userInfo
      }
    })
    //console.log(options)
    // 获取小程序场景值
    //console.log(wx.getLaunchOptionsSync())
    // 请求数据
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //console.log('界面显示出来')
    //console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    //console.log('小程序隐藏/关闭')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    avator: '旧城以西'
  }
})
