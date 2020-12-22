// pages/media/media.js
Page({
  data: {
    audioCtx: null,
    poster:
      "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
    name: "沧海一声笑",
    author: "xx",
    danmuList: [
      {
        text: "第 1s 出现的弹幕",
        color: "#ff0000",
        time: 1,
      },
      {
        text: "第 3s 出现的弹幕",
        color: "#ff00ff",
        time: 3,
      },
    ],
  },
  onLoad: function (options) {
    this.audioCtx = wx.createAudioContext("myAudio");
    this.videoContext = wx.createVideoContext('myVideo')
  },
  audioPlay: function () {
    this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause();
  },
  audio14: function () {
    this.audioCtx.seek(14);
  },
  audioStart: function () {
    this.audioCtx.seek(0);
  },
});
