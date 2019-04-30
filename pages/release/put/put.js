// pages/release/put/put.js
Page({

  data: {
    length: 0,
    images: [],
    puttype:'未选择',
    id:'',
  },

  onLoad(options) {
    var id = wx.getStorageSync("articleId");
    this.setData({
      id: id,
    })
  },

  onShow(){
    if(this.data.id=='2'){
      this.setData({
        puttype: '腰豆社区'
      })
    } else if (this.data.id == '3'){
      this.setData({
        puttype: '学校官方'
      })
    } else if (this.data.id == '4') {
      this.setData({
        puttype: '失物招领'
      })
    } else if (this.data.id == '5') {
      this.setData({
        puttype: '跳蚤市场'
      })
    } else if (this.data.id == '6') {
      this.setData({
        puttype: '学院社团'
      })
    } else if (this.data.id == '7') {
      this.setData({
        puttype: '表白墙'
      })
    } else if (this.data.id == '8') {
      this.setData({
        puttype: '生活健康'
      })
    } else if (this.data.id == '9') {
      this.setData({
        puttype: '问答栏目'
      })
    }else{

    }
  },

  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        this.setData({
          images: images.length <= 3 ? images : images.slice(0, 3)
        })
      }
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
    this.setData({
      images: this.data.images
    })
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },

  //统计输入长度
  userInput: function (e) {
    this.setData({
      length: e.detail.value.length
    })
  },

  //发布类型
  putindex: function (e) {
    wx.navigateTo({
      url: '../puttype/puttype',
    });
  },

  //发布帖子
  submitForm: function (e) {
    wx.removeStorageSync("articleId")
    if(this.data.length==0){
      wx.showToast({
        title: '你未填写发布内容',
        icon: 'none'
      })
    } else if (this.data.id ==''){
      wx.showToast({
        title: '你未选择发布类型',
        icon: 'none'
      })
    }else{
      wx.switchTab({
        url: '../../circle/circle',
      });
    }
  },

})