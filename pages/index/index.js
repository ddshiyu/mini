// //获取应用实例
// const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toast: false,
    warnToast: false,
    textToast: false,
    loading: false,
    hideToast: false,
    hideWarnToast: false,
    hideTextToast: false,
    hideLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready');
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },
  fetchData() {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        console.log(res);
        this.setData({
          loading: true
        });
        wx.request({
          url: 'http://localhost:3000/json',
          method: 'POST',
          data: {
            username: res.data.nickName
          },
          success: (res) => {
            console.log(res);
            this.setData({
              hideLoading: true
            });
            setTimeout(() => {
              this.setData({
                loading: false,
                hideLoading: false,
              });
            }, 300);
            this.setData({
              toast: true
            });
            setTimeout(() => {
              this.setData({
                hideToast: true
              });
              setTimeout(() => {
                this.setData({
                  toast: false,
                  hideToast: false,
                });
              }, 300);
            }, 3000);
          },
          fail:  (error) => {
            console.log(error);
            this.setData({
              hideLoading: true
            });
            setTimeout(() => {
              this.setData({
                loading: false,
                hideLoading: false,
              });
            }, 300);
            this.setData({
              warnToast: true
            });
            setTimeout(() => {
              this.setData({
                hidewarnToast: true
              });
              setTimeout(() => {
                this.setData({
                  warnToast: false,
                  hidewarnToast: false,
                });
              }, 300);
            }, 3000);
          }
        })
      },
      fail: function (error) {
        wx.showToast({
          title: '请登录',
          icon: 'loading',
          duration: 1000
        })
        console.log(error);
      }
    })
  },
  openToast: function () {
    this.setData({
      toast: true
    });
    setTimeout(() => {
      this.setData({
        hideToast: true
      });
      setTimeout(() => {
        this.setData({
          toast: false,
          hideToast: false,
        });
      }, 300);
    }, 3000);
  },
  openWarnToast: function () {
    this.setData({
      warnToast: true
    });
    setTimeout(() => {
      this.setData({
        hidewarnToast: true
      });
      setTimeout(() => {
        this.setData({
          warnToast: false,
          hidewarnToast: false,
        });
      }, 300);
    }, 3000);
  },
  openTextToast: function () {
    this.setData({
      textToast: true
    });
    setTimeout(() => {
      this.setData({
        hideTextToast: true
      });
      setTimeout(() => {
        this.setData({
          textToast: false,
          hideTextToast: false,
        });
      }, 300);
    }, 3000);
  },
  openLoading: function () {
    this.setData({
      loading: true
    });
    setTimeout(() => {
      this.setData({
        hideLoading: true
      });
      setTimeout(() => {
        this.setData({
          loading: false,
          hideLoading: false,
        });
      }, 300);
    }, 3000);
  }
})