// pages/goods/show.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    selected: true,
    selected1: false,
    goods_num: "" 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    console.log(id);
    const goods = app.globalData.goodsDetail.filter(item => {
      return item.id == id;
    });
    console.log(goods);
    this.setData({
      goods: goods[0]
    });
  },
  selectBrief(e) {
    this.setData({
      selected: true,
      selected1: false
    });
  },
  selectParameter(e) {
    this.setData({
      selected: false,
      selected1: true
    });
  },
  toSelect(e) {
    // 获取参数
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../selectGoods/selectGoods?id=${id}`
    });
  },
  goCart() {
    wx.switchTab({
      url: "../cart/cart"
    })
  },
})