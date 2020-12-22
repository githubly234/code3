//logs.js
const util = require("../../utils/util.js");

Page({
  data: {
    logs: [],
    message:"请输入用户名"
  },
  /*事件对象默认情况下会作为函数的第一个参数传递进来 */
  buttonTapHandle(event) {
    console.log("触发了", event.currentTarget.dataset);
    console.log(
      event.currentTarget.dataset.hello,
      event.currentTarget.dataset.helloWorld
    );
  },
  innerHandler: function () {
    console.log("innerHandler");
  },
  outerHandler: function () {
    console.log("outerHandler");
  },
  modifyMessage:function(){
    this.setData({
      message:"张三"
    })
  },
  inputHandle:function(event){
    this.setData({
      message:event.detail.value
    })
  },
  onLoad: function () {},
});
