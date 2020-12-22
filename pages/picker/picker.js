// pages/picker/picker.js
Page({
  data: {
    //普通选择器的数据源
    array: ["美国", "中国", "巴西", "日本"],
    index: 0,

    //多列选择器的数据源
    multiArray: [
      ["无脊柱动物", "脊柱动物"],
      ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"],
    ],
    multiIndex: [0, 0],

    //时间选择器数据源
    time: "12:01",

    //日期选择器数据
    date: "2020-12-12",

    //省市区选择器数据
    region: ["广东省", "广州市", "海珠区"],
    customItem: "全部",
  },
  onLoad: function (options) {},
  //单例选择器数据发生改变
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
    });
  },
  //时间发生改变
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value,
    });
  },
  //日期发生改变
  bindDateChange(e) {
    this.setData({
      date: e.detail.value,
    });
  },
  //省市区发生改变
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value,
    });
  },
  //多列选择器发生改变
  bindMultiPickerChange(e) {
    this.setData({
      multiIndex:e.detail.value
    })
  },
  //多列选择器的列发生改变
  bindMultiPickerColumnChange(e) {
    // console.log("修改的列为", e.detail.column, "，值为", e.detail.value);
    //当选择的列发生改变之后会触发数据源发生变化(所以将原来的数据源复制一份)
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,   //[0,0]
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    //当我们操作的是第0列的时候，第1列数据需要改变
    if(e.detail.column == 0){
      if(e.detail.value == 0){
        data.multiArray[1] = ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"]
      }
      else if(e.detail.value == 1){
        data.multiArray[1] = ['鱼', '两栖动物', '爬行动物']
      }
      data.multiIndex[1] = 0;
    }
    this.setData(data);
  },
});
