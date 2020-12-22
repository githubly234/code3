// pages/interactive/interactive.js
Page({
  data: {},
  onLoad: function (options) {},
  btnToast() {
    wx.showToast({
      title: "成功",
      // 只支持 success 和 loading
      icon: "success",
      mask: true, //遮盖，不可以点击页面的中其他内容
      duration: 20000,
    });

    setTimeout(() => {
      wx.hideToast();
    }, 2000);
  },
  btnActionSheet() {
    wx.showActionSheet({
      // 显示出来的项目列表
      itemList: ["新增", "删除", "修改"],
      // 点击其中任一项的回调
      success: function (res) {
        // res.cancel 指的是是否点击了取消
        if (!res.cancel) {
          // tapIndex指的是点击的下标
          console.log(res.tapIndex);
        }
      },
    });
  },
  btnModal() {
    wx.showModal({
      title: "提示",
      content: "这是一个模态弹窗",
      success: function (res) {
        if (res.confirm) {
          console.log("用户点击确定");
        }
      },
    });
  },
  btnLoading() {
    wx.showLoading({
      title: "加载中....",
      mask: true,
    });
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
});
