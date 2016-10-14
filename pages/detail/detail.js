//logs.js
var util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    hidden:false,
    content:""
  },
   delHtmlTag:function(str) {
    return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
  },
  onLoad: function (e) {
      console.info(e)
    var that = this;
      wx.request({
      url: app.globalData.blog_url+'/article/findByID.action?articleID='+e.articleID,
      success: function(res) {
        console.log(res.data)
        var result = res.data;
        that.setData({
    title:result.title,
    summary:result.summary,
       content:result.content,
        hidden:true
        })
      }
    })



   
  }
})
