//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    boughtGoods:
      [{ logo: '//img14.360buyimg.com/n7/jfs/t21913/35/233091605/514679/d044527d/5b062f7eN7d054204.jpg', desc:'小米（MI）小米电视4S 55英寸 曲面 L55M5-AQ 2GB+8GB HDR 4K超高清 蓝牙语音 人工智能语音网络液晶平板电视', price: 3298 },
        { logo: '//img13.360buyimg.com/n7/jfs/t1/884/20/276/401580/5b8e53b0E8bb854d7/f377c7e912fdee9b.jpg', desc:'东芝（TOSHIBA）55U6780C 55英寸 人工智能语音曲面4K超高清 2G+16G大内存液晶电视机', price: 3199 },
        { logo: '//img13.360buyimg.com/n7/jfs/t24652/40/1379357850/298616/1028c0c4/5baee74cNc1ef75d3.jpg', desc: '海尔模卡 （MOOKA）U55Q81J 55英寸 4K曲面安卓智能UHD高清LED液晶电视（银色/金色/黑色）随机发货', price: 2299 },
        { logo:'//img13.360buyimg.com/n7/jfs/t1/5933/6/9055/123033/5bab5ec8E3d0cb427/c176c1bd59344b48.jpg', desc: '海信（Hisense）LED65E7CY  65英寸 超高清4K 曲面电视 HDR 人工智能电视',price: 4988 }
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
