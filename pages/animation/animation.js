// pages/animation/animation.js
Page({
  data: {
    animationData:null
  },
  //缩放 宽度 透明度 背景颜色 一起动画
  scaleWidthOpcityBg:function(){
    // wx.createAnimation创建一个动画对象
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    })
    //scale width opacity动画的方法
    //step 动画分步进行
    //export 导出动画队列
    animation.scale(2.0,3.0).width(100).opacity(0.5).backgroundColor("yellow").step()
    this.setData({
      animationData:animation.export()
    })
  },
  //旋转 缩放一起动画
  rotateAndScale:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    })
    animation.rotate(360).scale(2.5,2.5).step()
    this.setData({
      animationData:animation.export()
    })
  },
  //先旋转 再缩放
  rotateThenScale:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    })
    animation.rotate(360).step()
    animation.scale(2.5,2.5).step()
    this.setData({
      animationData:animation.export()
    })
  },
  //先旋转缩放再平移
  rotateAndScaleThenTranslate:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    })
    animation.rotate(360).scale(2.5,2.5).step()
    animation.translate(100,100).step()
    this.setData({
      animationData:animation.export()
    })
  },
  onLoad: function (options) {

  },

})