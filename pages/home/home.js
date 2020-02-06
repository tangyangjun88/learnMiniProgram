// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"动态数据",
    count:0,
    stuentds:[
      {
        name: "张三",
        age: 18,
        sex: '男'
      },
      {
        name: "李四",
        age: 28,
        sex: '女'
      },
      {
        name: "王五",
        age: 38,
        sex: '男'
      }
    ]
  },
  addCount(){
   // this.data.count+=1
    //console.log(this.data.count)
    this.setData({
      count: this.data.count+=1
    })
  },
  subCount(){
    // this.data.count+=1
     //console.log(this.data.count)
     this.setData({
       count: this.data.count-=1
     })
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