//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://m.360buyimg.com/babel/jfs/t1/5639/26/8472/87651/5ba9b0a3Eeed73c2a/496cd54e18534cea.jpg',
      'http://img1.360buyimg.com/da/jfs/t1/5156/4/9379/71180/5bac734eE0825a8e8/17a86b775ab3b2aa.jpg',
      'http://img1.360buyimg.com/pop/jfs/t25183/195/1828690506/77025/10825f22/5bbc108eN49cedfc8.jpg',
      'http://m.360buyimg.com/babel/jfs/t1/5650/13/9197/97041/5bac4211E5dfc1e8b/cd9853ba63f8f6f5.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '首页'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
