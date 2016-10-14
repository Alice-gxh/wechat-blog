//logs.js
var util = require('../../utils/util.js')
var app = getApp();

Page({
  data: {
   hidden:false,
   list:[]
  },
   onLoad: function (e) {
      console.info(e)
    var that = this;
      wx.request({
      url: app.globalData.music_url+'?method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
      success: function(res) {
        console.log(res.data)
        var result = res.data;
        that.setData({
        list:result.song_list,
        hidden:true
        })
      }
    })



   
  }
})
