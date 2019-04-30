// pages/personal/personal.js
var app = getApp();

Page({

  data: {
    motto: '伍壹壹文化工作室',
    cache: [
      { iconurl: "../../image/message.png", title: '圈子消息', tap: 'qzxx' }
    ],

    device: [
      { iconurl: "../../image/wode7.png", title: '我的腰豆', hint: '9个', tap: 'yaodou' },
      { iconurl: "../../image/wode4.png", title: '签到', hint: '每周连续签到领腰豆', tap: 'qd' },
      { iconurl: "../../image/wode5.png", title: '我的收货地址', tap: 'wdssdz' },
      { iconurl: "../../image/wode6.png", title: '推荐给好友', hint: '推荐有礼', tap: 'tjghy' },
      { iconurl: "../../image/wode8.png", title: '关于我们', tap: 'gywm' },
    ]

  },


  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })
  },
  
  //我的收货地址
  wdssdz() {
    const that = this
    const arr = {}
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              arr['name'] = res.userName
              arr['mobile'] = res.telNumber,
              arr['city'] = res.provinceName + res.cityName + res.countyName
              arr['detail'] = res.detailInfo
              that._create_address(arr)
            }
          })
        } else {
          if (res.authSetting['scope.address'] == false) {
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)
              }
            })
          } else {
            wx.chooseAddress({
              success(res) {
                arr['name'] = res.userName
                arr['mobile'] = res.telNumber,
                arr['city'] = res.provinceName + res.cityName + res.countyName
                arr['detail'] = res.detailInfo
                that._create_address(arr)
              }
            })
          }
        }
      }
    })
  },

  // 我的腰豆
  yaodou: function (event) {
    wx.navigateTo({
      url: 'mybean/mybean',
    });
  },

  // 签到
  qd: function (event) {
    wx.navigateTo({
      url: 'signin/signin',
    });
  },

  // 关于我们
  gywm: function (event) {
    wx.navigateTo({
      url: 'aboutus/aboutus',
    });
  }



})