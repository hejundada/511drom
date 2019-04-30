// pages/circle/circle.js
Page({
    data: {
        showtab: 1,  //顶部选项卡索引
        tabnav: {
            tabnum: 5,
            tabitem: [
              {
                "id": 0,
                "text": "关注"
              },
              {
                "id": 1,
                "text": "推荐"
              },
              {
                "id": 2,
                "text": "腰豆社区"
              },
              {
                "id": 3,
                "text": "学校官方"
              },
              {
                "id": 4,
                "text": "失物招领"
              },
              {
                "id": 5,
                "text": "跳蚤市场"
              },
              {
                "id": 6,
                "text": "学院社团"
              },
              {
                "id": 7,
                "text": "表白墙"
              },
              {
                "id": 8,
                "text": "生活健康"
              },
              {
                "id": 9,
                "text": "问答栏目"
              },
              {
                "id": 10,
                "text": "敬请期待"
              }
            ]
        },
        inforList: [
            {
                "avatar":"../../image/people1.png",
                "nickname": "骑蜗牛的小马",
                "content": "本人在二食堂丢失门禁卡，有捡到本人卡的麻烦联系我本人电话：12312341234，万分感谢！",
                "postImg": "../../image/post-4.jpg",
                "readingNum": "33",
                "commentNum": "2",
                "likeNum": "17",
                "time": "03月18日 17:17",
                "tabid": "5",
                "articleid": "1",
            },
            {
                "avatar": "../../image/people2.png",
                "nickname": "音乐社团",
                "content": "音乐社团，招新啦，想在大学里面学点乐器，丰富业余生活的，赶快来报名了，报名地址：xxxxxx,近期学校影剧院还有我们社团的活动，点赞和评论送入场券哦~",
                "postImg": "../../image/post-1.jpg",
                "readingNum": "56",
                "commentNum": "12",
                "likeNum": "123",
                "time": "03月17日 13:12",
                "tabid": "7",
                "articleid": "2",
            },
            {
                "avatar": "../../image/people3.png",
                "nickname": "一个爱交易的小姐姐",
                "content": "三区二栋402宿舍有一张8成新的沙发椅出售，价格可以谈，请有需要的小姐姐小哥哥来寝室楼下详谈，上课时间一般不在，有需要的在下方留言。嘻嘻",
                "postImg": "../../image/post-2.jpg",
                "readingNum": "23",
                "commentNum": "6",
                "likeNum": "34",
                "time": "03月16日 12:00",
                "tabid": "6",
                "articleid": "3",
            },
            {
                "avatar": "../../image/people4.png",
                "nickname": "511官方",
                "content": "为了给大家更好的体验，近期511软件会进行一次大更新，会停用几天，给大家造成影响了，为了给大家补偿，我们将在10月5号推出一个《最美寝室》的活动，将会评选出1个一等奖，3个二等奖，5个三等奖，快去参与活动，分享你的寝室照片吧，别忘啦要你朋友点赞哦！",
                "postImg": "../../image/post-3.jpg",
                "readingNum": "1426",
                "commentNum": "354",
                "likeNum": "3578",
                "time": "03月15日 09:00",
                "tabid": "3",
                "articleid": "4",
            },
            {
                "avatar": "../../image/people5.png",
                "nickname": "一位要表白的宅男",
                "content": "最近一直在6食堂见到你，自从第一次见到你，我就迷上了你，希望你能做我女朋友，我喜欢你",
                "postImg": "../../image/post-1.jpg",
                "readingNum": "520",
                "commentNum": "13",
                "likeNum": "14",
                "time": "03月14日 16:12",
                "tabid": "8",
                "articleid": "5",
            },
            {
                "avatar": "../../image/people6.png",
                "nickname": "长沙民政职业技术学院",
                "content": "一年一度的国家奖学金评选已经开始了，请各学院做好准备，想参选的同学进我们官网www.xuexiao,com,来填报资料，最终结果出来会第一时间公布，请各位同学关注学校的官方账号...",
                "postImg": "../../image/post-3.jpg",
                "readingNum": "2345",
                "commentNum": "536",
                "likeNum": "3467",
                "time": "03月13日 10:40",
                "tabid": "4",
                "articleid": "6",
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

    //去发布
    goput: function (e) {
      wx.switchTab({
        url: '../release/release'
      })
    },

})