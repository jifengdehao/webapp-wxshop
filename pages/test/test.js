// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        id: 1,
        isSelect: false,
        // 数据设定
        count: 2
      },
      {
        id: 2,
        isSelect: true,
        // 数据设定
        count: 1
      },
      {
        id: 3,
        isSelect: true,
        // 数据设定
        count: 1
      }
    ]
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
  
  },
  /* 减数 */
  delCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加一");
    var count = this.data.items[index].count;
    // 商品总数量-1
    if (count > 1) {
      this.data.items[index].count--;
    }
    // 将数值与状态写回  
    this.setData({
      items: this.data.items
    });
    console.log("items:" + this.data.items);
  },
  /* 加数 */
  addCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加+");
    var count = this.data.items[index].count;
    // 商品总数量+1  
    if (count < 10) {
      this.data.items[index].count++;
    }
    // 将数值与状态写回  
    this.setData({
      items: this.data.items
    });
    console.log("items:" + this.data.items);
  },
})