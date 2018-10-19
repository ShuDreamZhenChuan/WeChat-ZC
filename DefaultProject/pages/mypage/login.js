// pages/mypage/login.js
const app = getApp()

var pageObject ={

  /**
   * 页面的初始数据
   */
  data: {
     isLogin:false,
     userName:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    acceptAuthorize:false
  },
  bindGetUserInfo: function (event) {

    console.log(event.detail.userInfo)
    
    //使用
    wx.getSetting({

      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.login({
            success: function (res) {
              var code = res.code;//登录凭证
              if (code) {
                //2、调用获取用户信息接口

                wx.getUserInfo({
                  success: function (res) {
                    /*
                    console.log({ encryptedData: res.encryptedData, iv: res.iv, code: code })
                    //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
                    wx.request({
                      url: 'https://xxxx.com/wxsp/decodeUserInfo',//自己的服务接口地址
                      method: 'post',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      data: { encryptedData: res.encryptedData, iv: res.iv, code: code },
                      success: function (data) {

                        //4.解密成功后 获取自己服务器返回的结果

                        if (data.data.status == 1) {

                          var userInfo_ = data.data.userInfo;

                          console.log(userInfo_)

                        } else {

                          console.log('解密失败')
                        }

                      },
                      fail: function () {
                        console.log('系统错误')
                      }

                    })
                    */
                    if (this.data.canIUse) {
                      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                      // 所以此处加入 callback 以防止这种情矿
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
                            userName: res.userInfo.nickName,
                            hasUserInfo: true
                          })
                        }
                      })

                      /*
                      wx.redirectTo()({
                        url: '/pages/mypage/login',
                      })
                      */
                    }

                  },
                  fail: function () {
                    console.log('获取用户信息失败')
                  }
                })

              } else {
                console.log('获取用户登录态失败！' + r.errMsg)
              }
            },
            fail: function () {
              console.log('登陆失败')
            }
          })
        } else {
          console.log('获取用户信息失败')
        }
      }
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) { 
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称         
            wx.getUserInfo({            
                success: function(res) 
                {              
                  console.debug(res.userInfo)            
                }          
              })       
           }      
         }   
        })         
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }    
}
Page(pageObject)