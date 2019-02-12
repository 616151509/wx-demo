<<<<<<< HEAD
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: [
      { image: '../../image/index-tiele1.jpg' },
      { image: '../../image/index-tiele2.jpg' },
      { image: '../../image/index-tiele3.jpg' },
    ],
    navList: [
      { image: '../../image/indexIPH.png', title: '手机', url: './mbPhone/mbPhone' },
      { image: '../../image/indexTV.png', title: '电视', url: './TV/Tv' },
      { image: '../../image/indexPC.png', title: '电脑', url: './PC/PC' },
      { image: '../../image/indexLY.png', title: '智能', url: './zhiNeng/zhiNeng' },
      { image: '../../image/indexNewGoods.png', title: '新品', url: './newGs/newGs' }
    ]
=======
const app = getApp();
Page({
  data: {
    slides: [],
    navList: [],
    goodList:[],
    index_activity:[],
    index_block:[]
  },
  onLoad (){
    console.log(app.globalData)
    this.setData({
      slides: app.globalData.index_slides
    })
    this.setData({
      navList: app.globalData.nav_data
    })
    this.setData({
      index_activity: app.globalData.index_activity
    })
    this.setData({
      index_block: app.globalData.index_block
    })
  },
  showcDetail:function(e){
    const id = e.currentTarget.dataset.cid;
    console.log(id);
    wx.navigateTo({
      url: `/pages/goods/show?id=${id}`
    })
  },
  showDetail: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.pid;
    console.log(id);
    wx.navigateTo({
      url: `/pages/goods/show?id=${id}`
    })
>>>>>>> first
  },
  search: function (e) {
    wx.navigateTo({
      url: './search/search'
    })
  }
})