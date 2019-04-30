//全局
var app = getApp();
Page({
  data: {
    background: ["../../../image/banner1.jpg", '../../../image/banner2.jpg', '../../../image/banner3.jpg'],
    indicatorDots: true,
    autoplay: true,//是否自动切换
    interval: 2000,//自动切换时间间隔
    duration: 500,//滑动动画时长
    circular: true,//滑动衔接
    num:1,
    price:500,
    isIphoneX:'',
    totalPrice:'',
    color:'',
    size:'',
    //商品颜色
    shopcolor: [{
      'color': '红色'
    },
    {
      'color': '蓝色'
    },
    {
      'color': '绿色'
    },
    {
      'color': '黑色'
    },
    {
      'color': '经典白'
    },
    {
      'color': '经典黑'
    }],
    //商品大小
    shopsize:[{
        size:'34'
    },
      {
        size: '35'
      },
      {
        size: '36'
      },
      {
        size: '37'
      },
      {
        size: '38'
      },
      {
        size: '39'
      },
      {
        size: '40'
      },
      {
        size: '41'
      },
      {
        size: '42'
      },
      {
        size: '43'
      },
      {
        size: '44'
      },
      {
        size: '45'
      },]
  },
  //引入获取手机信息
  onLoad:function(){
    let isIphoneXs = app.globalData.isIphoneX;
    this.setData({
      isIphoneX:isIphoneXs
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    var num = this.data.num;
    var price = this.data.price;
    var total=(num * price);
    console.log(total)
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true,
      totalPrice: total
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this))
  },

  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        color:'',
        size:'',
      })
    }.bind(this), 200);
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    var price = this.data.price;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      totalPrice: (num * price)
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    var price = this.data.price;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      totalPrice: (num * price)
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    if (e.detail.value == "" && e.detail.value < 1) {
      e.detail.value = 1;
    }
    var num = e.detail.value;
    
    var price = this.data.price;
    // 将数值与状态写回  
    this.setData({
      num: num,
      totalPrice:(num*price)
    });
  },
  //计算总价
  price:function(){
    console.log(this.data.num);
  },  
  //商品参数弹窗
  showModulArgument:function(){
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModulArgument: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this))
  },
  hideModulArgument:function(){
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModulArgument: false
      })
    }.bind(this), 200);
  },
  //查看全部评价
  view_evaluate:function(){
    wx.navigateTo({
      url: 'evaluate/evaluate',
    })
  },
  //选择颜色
  colorSelect:function(e){
    // console.log(e.currentTarget.dataset.tabindex)
    let color = e.currentTarget.dataset.tabindex;
    this.setData({
      color:color
    })
  },
  //大小选择
  sizeSelect:function(e){
    // console.log(e.currentTarget.dataset.tabindex)
    let size = e.currentTarget.dataset.tabindex;
    this.setData({
      size: size
    })
  }
})