//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({

  //初始数据
  data: {
    questList: []
  },

  //事件处理函数
  bindQuestion: function() {
    // wx.navigateTo({
    //   url: '../answer/answer'
    // })
  },
  bindAnswer: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    this.getData();
  },

  upper: function () {
    wx.showNavigationBarLoading();
    console.log("upper");
    this.refresh();
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 1000);
  },

  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  getData: function () {
    var indexData = util.getIndexData();
    this.setData({
      questList: indexData.data
    });
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 1000
    });
    var indexData = util.getIndexData();
    console.log("loaddata");
    this.setData({
      questList: indexData.data,
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      questList: this.data.questList.concat(next_data)
    });
  }
})
