// pages/news/news.js
Page({
  data: {
    showtab: 0,  //顶部选项卡索引
    tabnav: {
      tabnum: 2,
      tabitem: [
        {
          "id": 0,
          "text": "互动消息"
        },
        {
          "id": 1,
          "text": "活动消息"
        }
      ]
    },
    inforList: [
        {
           "img":"../../image/people1.png",
           "username":"骑蜗牛的小马",
           "content":"喂！蜗牛大叔你的出租车什么时候能到我家啊？",
           "time":"17:22",
           "num":'1'
        },
        {
          "img": "../../image/people2.png",
          "username": "昂首间",
          "content": "看天上是什么?",
          "time": "16:30",
          "num": '1'
        },
        {
          "img": "../../image/people3.png",
          "username": "丢东西的小迷糊",
          "content": "谢谢你帮我在食堂捡到的书籍卡",
          "time": "11:20",
          "num": '0'
        },
        {
          "img": "../../image/people4.png",
          "username": "文艺女青年",
          "content": "你在社区发表的文章真的太有趣了",
          "time": "9:12",
          "num": '0'
        },
    ],
    inforList2: [
        {
          "img": "../../image/people5.png",
          "username": "学校官方",
          "content": "同学，恭喜你参加学院阅读日获得一等奖，请在明天前来学院一楼办公室领取！",
          "time": "21:22",
          "num": '1'
        },
        {
          "img": "../../image/people6.png",
          "username": "腰豆社区",
          "content": "最美寝室获得者，恭喜你获得1000腰豆",
          "time": "18:37",
          "num": '0'
        },
    ],
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

  onLoad: function () {
  },

  //tab
  setTab: function (e) {
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: edata.tabindex,
    })
    // console.log(edata)
  },

  //去社交圈
  goto: function (e) {
    wx.switchTab({
      url: '../circle/circle'
    })
  },

})