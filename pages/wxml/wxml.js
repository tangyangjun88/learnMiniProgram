// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      firstname: 'tang',
      lastname: 'yangjun',
      age:12,
      nowTime:new Date().toLocaleString(),
      active : false,
      isShow : false,
      score : 45
  },
  onChangColor(){
    this.setData({
      active : !this.data.active
    })
  },
  onChangDis(){
    this.setData({
      isShow : !this.data.isShow
    })
  },
  onChangScore(){
    this.setData({
      score : this.data.score+6
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    const that = this
    setInterval(function(){
       that.setData({
          nowTime:new Date().toLocaleString()
        })
    },1000)
    */
   setInterval(() => {
     this.setData({
       nowTime:new Date().toLocaleString()
     })
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})