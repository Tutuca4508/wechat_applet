Component({
  properties: {
    //title: String,
    title: {
      type: String,
      value: '默认标题',
      observer: (newVal,oldVal) => console.log(newVal,oldVal)
    }
  }
})