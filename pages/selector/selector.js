// pages/selector/selector.js
Page({
  data: {},
  onLoad: function (options) {
    //创建一个节点查询对象
    const query = wx.createSelectorQuery();
    //query.select(".divider")相当于document.querySelctor()  查询一个元素
    var firstDivider = query.select(".divider");
    //query.selectAll(".divider")相当于document.querySelectorAll()  查询所有元素
    var dividers = query.selectAll(".divider");
    //获取NodeRef的字段信息
    dividers.fields(
      {
        id: false, //是否返回节点id
        rect: true, //是否返回节点布局位置
        dataset: true, //返回数据集
        size: true, //返回宽高
        scrollOffset: true, //返回 scrollLeft,scrollTop
        properties: ["hover-class"], //只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取
        computedStyle: ["margin", "backgroundColor"], //此处返回指定要返回的样式名
      },
      function (res) {
        console.log(res, "aaa");
      }
    );

    //获取元素的位置信息
    dividers.boundingClientRect(function (rect) {
      console.log(rect, "bbb");
    });

    //query.selectViewport():选择显示区域，用于获取显示区域的尺寸、滚动位置等信息
    query.selectViewport().scrollOffset(function (res) {
      console.log(res,"ccc")
    });
    //执行所有请求
    query.exec();
  },
});
