
App({

  globalData: {
    openid: null,
    realOpenId: null,
    //识别手机型号
    isIphoneX: false,
  },

  getUserInfo: function (cb) {
    var self = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口  
      wx.login({
        success: function () {

          wx.getUserInfo({
            success: function (res) {
              self.globalData.userInfo = res.userInfo;
              console.log(res.userInfo);
              typeof cb == "function" && cb(self.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  onShow: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        let model = res.model;
        if (model.search('iPhone X') != -1) {
          that.globalData.isIphoneX = true
        }
      },
    })
  }
})