Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    activeIndex: 0
  },
  methods: {
    tabControl(el) {
      this.setData({
        activeIndex: el.target.dataset.index
      })
      this.triggerEvent('myevent', { index: this.data.activeIndex}, {})
    }
  }
})