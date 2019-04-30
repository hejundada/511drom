// pages/release/puttype/puttype.js
Page({

  data: {
    tabitem: [
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
    ]
  },

  //发布类型选择
  choice: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id)
    wx.setStorageSync('articleId', id);
    wx.navigateTo({
      url: '../put/put',
    });
  },

  
})