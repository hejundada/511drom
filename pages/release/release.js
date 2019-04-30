// pages/release/release.js
var app = getApp();
//获取应用实例

Page({
  data: {
    userInfo: {},
    startX: 0, //开始移动时距离左
    endX: 0, //结束移动时距离左
    nowPage: 0, //当前是第几个个页面
    xinList: [
      {
        id: 5,
        title: '普通发布',
        msg: '普通用户发布渠道，这里有着多重种类的栏目，你在这里可以发布你喜欢的东西，快来一起开拓这块荒地吧.',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        title: '学校发布',
        msg: '学校官方活动发布渠道，这里您的学校可以发布公告(竞赛，通知，评比等)，也可以发布活动为同学们谋得福利.',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        title: '官方发布',
        msg: '511Dorm官方发布渠道，这里腰豆社区会及时通知软件更新信息，官方有奖活动，各大学校竞技比赛等',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      }
    ]
  },
  //事件处理函数

  onLoad: function (e) {

    this.checkPage(this.data.nowPage);
  },
  onReady: function () {

  },
  onShow: function () {
    wx.setTabBarBadge({
      index: 3,//导航栏的索引值
      text: '3'//你所需要添加的数字
    })
  },
  onShareAppMessage: function () {
    return {
      title: '解忧小酒馆，专治不开心~'
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });

    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;

    //向左移动
    if (moveX > 20) {

      if (that.data.nowPage >= (that.data.xinList.length - 1)) {
        wx.showToast({
          title: '已经是最后一张了',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage + 1
      });
      this.checkPage(this.data.nowPage);
    }
    if (moveX < -20) {
      if (that.data.nowPage <= 0) {
        wx.showToast({
          title: '这是第一张了喔',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage - 1
      });
      this.checkPage(this.data.nowPage);

      // wx.showToast({
      //  title: '不可以回退噢',
      //  icon:'none'
      // })
    }


  },
  // 页面判断逻辑,传入参数为当前是第几页 
  checkPage: function (index) {
    //信列表数据
    var data = this.data.xinList;
    var that = this;
    var m = 1;
    for (var i = 0; i < data.length; i++) {
      //先将所有的页面隐藏
      var disp = 'xinList[' + i + '].display';
      var sca = 'xinList[' + i + '].scale';
      var slateX = 'xinList[' + i + '].slateX';
      var zIndex = 'xinList[' + i + '].zIndex';
      var style = 'xinList[' + i + '].style';
      that.setData({
        [disp]: 0,
        [style]: "display:block",
      });
      //向左移动上一个页面
      if (i == (index - 1)) {
        that.setData({
          [slateX]: '-120%',
          [disp]: 1,
          [zIndex]: 2,

        });
      }
      //向右移动的最右边要display:none的页面
      if (i == (index + 3)) {
        that.setData({
          [style]: 'display:none',
          [slateX]: '0',
          [zIndex]: -10,
        });
      }
      if (i == index || (i > index && (i < index + 3))) {
        //显示最近的三封
        that.setData({
          [disp]: 1
        });
        //普通发布
        if (m == 1) {
          this.setData({
            [sca]: 1,
            [slateX]: 0,
            [zIndex]: 1,
          });
        }
        //学校发布
        else if (m == 2) {
          this.setData({
            [sca]: 0.8,
            [slateX]: '20px',
            [zIndex]: -1,
          });
        }
        //官方发布
        else if (m == 3) {
          this.setData({
            [sca]: 0.6,
            [slateX]: '40px',
            [zIndex]: -2,
          });
        }
        m++;
      }

    }
  },
  //发布
  puttext: function (event) {
    wx.navigateTo({
      url: 'put/put',
    });
  }
})
