const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    clockInData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    wx.getStorage({
      key: 'userInfo',
      success:  (res) => {
        console.log(res);
        this.setData({
          userInfo: res.data,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorage({
      data: e.detail.userInfo,  
      key: 'userInfo',
    })
    this.getUserClockIn()
  },
  getUserClockIn: function () {
    wx.request({
      url: 'http://localhost:3000/UserClockIn',
      method: 'POST',
      data: {
        username: this.data.userInfo.nickName
      },
      success:  (res) => {
        console.log(res);
        this.setData({
          clockInData: res.data.data
        })
      }
    })
  },
  handleToDetail: function () {
    wx.navigateTo({
      url: '/pages/cardDetail/cardDetail?data=' + JSON.stringify(this.data.clockInData)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('gg');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {    

        console.log(res);
        this.getUserClockIn();
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getUserClockIn()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})