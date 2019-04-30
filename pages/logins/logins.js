// pages/logins/logins.js
var app = getApp();

Page({

  data: {
    focus1: false,
    focus2: false,
    hintphone: '',
    hintpass: '',
    hintinfo: '',
    userPhone: '',
    passWd: '',
    IP:''
  },
  onLoad: function () {
    var that = this; // console.log('onLoad')
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据   
    })
  },
  //获取用户IP地址
  onReady:function(){
    console.log("进来获取ip地址");
    var that = this;
    wx.request({
      url: 'https://pv.sohu.com/cityjson?ie=utf-8',
      success: function (e) {
        console.log(e.data);
        var aaa = e.data.split(' ');
        var bbb=aaa[4]
        var ccc = bbb.replace('"','')
        var ddd = ccc.replace('"', '')
        var eee = ddd.replace(',', '')
        console.log(eee)
        that.setData({
          IP: eee
        })
      },
      fail:function(){
        console.log("失败了");
      }
    })
  },
  //用户名和密码输入框事件键盘输入时触发
  userPhoneInput: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      passWd: e.detail.value
    })
  },
  //输入框聚焦时触发（文字弹起）
  userfocus: function (e) {
    this.setData({
      focus1: true,
      hintinfo: '',
    })
  },
  passfocus: function (e) {
    this.setData({
      focus2: true,
      hintinfo: '',
    })
  },
  //输入框失焦时触发（文字掉下）
  userblur: function (e) {
    if (this.data.userPhone.length == 0) {
      this.setData({
        hintphone: '',
        focus1: false
      })
    }
  },
  passblur: function (e) {
    if (this.data.passWd.length == 0) {
      this.setData({
        hintpass: '',
        focus2: false
      })
    }
  },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  loginBtnClick: function () {
    var that = this;
    if(that.data.userPhone.length == 0 || that.data.passWd.length == 0){
      that.setData({
        hintinfo: '*手机号和密码不能为空！',
      })
    }else if(that.data.userPhone != 'admin'){
      that.setData({
        hintphone: '*你的学号填写有误！',
        hintpass: '',
      })
    }else if(that.data.passWd != '123456') {
      that.setData({
        hintpass: '*你的密码填写有误！',
        hintphone: '',
      })
    }else{
      wx.switchTab({
        url: '../release/release',
      });
    }
  },

  forgetpassword: function (e) {
    wx.navigateTo({
      url: 'forget/forget',
    });
  }

})