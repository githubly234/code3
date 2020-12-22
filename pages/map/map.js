// pages/map/map.js
Page({
  data: {
    //缩放比例
    scale: 13,
    //经纬度
    latitude: "",
    longitude: "",
    //地图上的标记
    markers: [],
    //地图上显示的控件
    controls: [
      {
        id: 1,
        iconPath: "/assets/tabs/profile.png",
        position: {
          left: 320,
          top: 100 - 50,
          width: 40,
          height: 40,
        },
        clickable: true,
      },
      {
        id: 2,
        iconPath: "/assets/tabs/message.png",
        position: {
          left: 340,
          top: 100 - 50,
          width: 40,
          height: 40,
        },
        clickable: true,
      },
    ],
    //半径
    circles: [],
  },
  onLoad: function (options) {
    var _this = this;
    //获取当前用户的位置
    wx.getLocation({
      type: "wgs84",
      //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      //WGS-84：GPS坐标系
      //GCJ-02：火星坐标系，国测局02年发布的坐标体系，高德，腾讯等使用。
      //BD-09：百度坐标系，百度自研，百度地图使用。
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          //地图标注
          markers: [
            {
              id: "1",
              latitude: res.latitude,
              longitude: res.longitude,
              width: 20,
              height: 20,
              iconPath: "/assets/tabs/home.png",
              title: "哪里",
            },
          ],
          circles: [
            {
              latitude: res.latitude,
              longitude: res.longitude,
              color: "#FF0000DD",
              fillColor: "#7cb5ec88",
              radius: 3000,
              strokeWidth: 1,
            },
          ],
        });
      },
    });
  },
  //点击地图上的control控件触发的函数
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale);
    if (e.controlId === 1) {
      that.setData({
        scale: --this.data.scale,
      });
    } else {
      that.setData({
        scale: ++this.data.scale,
      });
    }
  },
  //地图标注的点击事件
  markertap(e) {
    console.log(e.markerId);
    wx.showActionSheet({
      itemList: ["A"],
      success: function (res) {
        console.log(res.tapIndex);
      },
      fail: function (res) {
        console.log(res.errMsg);
      },
    });
  },
  //地图的显示区域发生改变触发的事件
  regionchange(e) {
    console.log("regionchange===" + e.type);
  },
});
