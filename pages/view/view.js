// pages/view/view.js
Page({
  data: {
    nodes: "<h1 style='color:red;'>html标题</h1>",
    nodes1: [{
      name: "h1",
      attrs: {
        style: "color:red",
        class: "red"
      },
      children: [{
        type: "text",
        text: '结点列表标题'
      }]
    }],
    nodes2: [{
      name: "ul",
      attrs: {
        style: "padding:20px;border:1px solid blue;",
        class: "red"
      },
      children: [
        {
          name: "li",
          attrs: {
            style: "color:red",
            class: "red"
          },
          children: [{
            type: "text",
            text: '多层结点 无序列表'
          }],
        }, {
          name: "li",
          attrs: {
            style: "color:red",
            class: "red"
          },
          children: [{
            type: "text",
            text: '多层结点 无序列表1'
          }],
        }]
    }]
  },
  onLoad: function (options) {

  },
})