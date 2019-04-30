// pages/shop/shop.js
Page({

  data: {
    background: ["../../image/banner1.jpg", '../../image/banner2.jpg', '../../image/banner3.jpg'],
    indicatorDots:true,
    autoplay:true,//是否自动切换
    interval:2000,//自动切换时间间隔
    duration:500,//滑动动画时长
    circular:true,//滑动衔接
    showtab:0,
    tabnav:{
      tabnum:4,
      tabitem:[
      {
        'id':0,
        'name':'商品'
      },
      {
        'id': 1,
        'name': '邀请福利'
      },
      {
        'id': 2,
        'name': '已兑换'
      },
      {
        'id': 3,
        'name': '物流中心'
      },
      ]
    },
    note: [
      { 
        like_num: '1.5w',
        money_num: '900',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/post-3.jpg',
        avatar: '../../image/wxlike.png'
      },
      {
        like_num: '300',
        money_num: '1000',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/falls-right.jpg',
        avatar: '../../image/wxlike.png'
      },
      {
        like_num: '80',
        money_num: '100',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/falls-right.jpg',
        avatar: '../../image/wxlike.png'
      }, 
      {
        like_num: '700',
        money_num: '500',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/post-3.jpg',
        avatar: '../../image/wxlike.png'
      },
      {
        like_num: '400',
        money_num: '300',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/post-3.jpg',
        avatar: '../../image/wxlike.png'
      },
      {
        like_num: '700',
        money_num: '100',
        title: '祛痘洗面奶，清洁控油，你值得拥有',
        url: '../../image/falls-right.jpg',
        avatar: '../../image/wxlike.png'
      },
       { 
         postId:1,
         like_num: '700',
         money_num: '500',
         title: '祛痘洗面奶，清洁控油，你值得拥有',
         url: '../../image/falls-right.jpg',
        avatar: '../../image/wxlike.png'
      },
    ]
  },
  onLoad: function (options) {
  },
  //导航栏切换
  switchTab:function(e){
      // console.log(e)
      let index = e.currentTarget.dataset.tabindex
      this.setData({
        showtab: index
      })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
  //商品详情
  viewdetails:function(e){
    // console.log(e)
    wx.navigateTo({
      url: 'shop-details/shop-details',
    })
  },
  //收藏
  isLike:function(e){
    console.log(e)
  }
  
})