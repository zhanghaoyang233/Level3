  /**
   * getData方法
   * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
   * 返回一个数组，格式见函数中示例
   */
  function getData() {
      data = [
          ["北京", 90],
          ["上海", 70],
          ["天津", 80],
          ["广州", 50],
          ["深圳", 40],
          ["福州", 32],
          ["成都", 90]
      ]
      return data;
  }
  /**
   * sortAqiData
   * 按空气质量对data进行从小到大的排序
   * 返回一个排序后的数组
   */
  function sortAqiData(data) {

      data.sort(function(a, b) {
          return b[1] - a[1];
      }); //排序

  }
  /**
   * render
   * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
   * 格式见ul中的注释的部分
   */
  function render(data) {
      var ss = document.getElementById("resort");
      for (var i = 0; i < data.length; i++) {
          var li = document.createElement('li');
          ss.append(li);
          li.innerHTML = "第" + (i + 1) + "名：" + data[i];
      }
  }

  function btnHandle() {
      var aqiData = getData(); //获取数组的数据
      sortAqiData(aqiData); //进行数组的排序
      render(aqiData); //添加元素到html中
  }


  function init() {
      var s1 = document.getElementById("sort-btn");
      s1.onclick = function() {
              btnHandle();
          } //添加点击事件给排序按钮
  }
  init();