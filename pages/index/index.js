//index.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    articleList: [],
    
    hidden:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    var that = this;
     wx.request({
      url: app.globalData.blog_url+'/article/findHotArticles.action?size=20',
      success: function(res) {
        console.log(res.data)
        var result = res.data;
        var arr = [];
        for(var i=0;i<result.length;i++){
         // console.info(res.data[i].title)
          arr.push({articleID:result[i].articleID,title:result[i].title,summary:result[i].summary,createTime:util.formatTime(new Date(result[i].createTime.time)),supported:result[i].supported,readNumber:result[i].readNumber})
        }  
          that.setData({
           articleList:arr,
           hidden:true
          })
      }
    })
  },
   toDetail: function(data) {
     console.info(data)
     console.info(data.currentTarget.id);
     wx.navigateTo({
       url: '../detail/detail?articleID='+data.currentTarget.id
     })
  },
  onPullDownRefresh: function() {
    console.info("Do something when pull down");
  }
})
