// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },
  onBtnClick(){
    console.log("按钮发生了点击")
  },
  onTap(){
    console.log("按钮发生了点击")
  },
  onTouchStart(){
    console.log("开始触摸时调用")
  },
  onTouchMove(){
    console.log("开始移动时调用")
  },
  onTouchEnd(){
    console.log("结束触摸时调用")
  },
  onLongPress(){
    console.log("长按超过350毫秒时调用")
  },
  onTouchends(event){
    console.log("---------",event)
  },
  onTouchendss(event){
    console.log("++++++++++++",event)
  },
  outer(event){
    console.log(event)
  },
  inner(event){
    console.log(event)
  },
  onTitles(event){
    const obj = event.currentTarget.dataset
    console.log(obj.index,obj.item)
  },
  onCaptureView1(){
    console.log('onCaptureView1')
  },
  onCaptureView2(){
    console.log('onCaptureView2')
  },
  onCaptureView3(){
    console.log('onCaptureView3')
  },
  onTapView1(){
    console.log('onTapView1')
  },
  onTapView2(){
    console.log('onTapView2')
  },
  onTapView3(){
    console.log('onTapView3')
  }
  
})