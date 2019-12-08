Component({
  properties: {
    // 组件属性列表
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    isLoad: false
  },
  methods: {
    handleImageLoad() {
      if (!this.data.isLoad) {
        this.triggerEvent('imageLoad')
        this.data.isLoad = true
      }
    }
  }
})