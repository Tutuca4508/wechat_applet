import { getMultiData, getGoodsData } from '../../service/home.js'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    tab_control_list: ['流行', '新款', '精选'],
    tab_type_list: ['pop','new','sell'],
    goods: {
      pop: {page: 0,list: []},
      new: {page: 0,list: []},
      sell: {page: 0,list: []}
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    top_distance: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图以及推荐数据
    this._getMultiData()

    // 请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // -----------  网络请求函数 --------------------
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },
  // @param type: 请求类型 pop/new/sell
  _getGoodsData(type) {
    // 获取页码
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      const list = res.data.data.list
      const type_list = this.data.goods[type].list.concat(list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: type_list,
        [pageKey]: page
      })
    })
  },

  // ------------  事件监听函数  ------------------
  myclick(event) {
    const { index } = event.detail
    this.setData({
      currentType: this.data.tab_type_list[index]
    })
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.setData({
        top_distance: rect.top
      })
    }).exec()
  },

  // 监听事件
  onReachBottom: function () {
    // 下拉加载
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll: function(options) {
    const flag = options.scrollTop > 1000
    if (flag != this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }
    // 修改isTabFixed属性
    const flag2 = options.scrollTop >= this.data.top_distance
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})