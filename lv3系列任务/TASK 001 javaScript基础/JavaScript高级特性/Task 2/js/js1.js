  /**
   * leftIn方法
   * 点击"左侧入"，将input中输入的数字从左侧插入队列中
   */
  function leftIn(queue) {
      var num = document.getElementById("num").value; //获取输入框里面的值
      if (checkInput(num)) { //检测输入的数值是否满足要求
          var span = document.createElement("span") //创建一个span元素
          span.style.height = num;
          //动态生成的元素在元素生成的时候绑定事件或者利用事件委托，事件委托性能更好
          // span.onclick = function() {alert(this.innerHTML)};
          var spanList = queue.childNodes;
          if (spanList.length >= 50) {
              alert("队列元素数量最多为50个！");
          } else {
              queue.insertBefore(span, spanList[0]); //将span元素插入到queue集合之中去
          } //如果插入的数值的个数在50个一下就允许插入数值，否则就不允许插入数值，并且报错

      }
  }

  /**
   * rightIn方法
   * 点击"右侧入"，将input中输入的数字从右侧插入队列中
   */
  function rightIn(queue) {
      var num = document.getElementById("num").value;
      if (checkInput(num)) {
          var span = document.createElement("span")
          span.style.height = num;

          //动态生成的元素在元素生成的时候绑定事件或者利用事件委托，事件委托性能更好
          // span.onclick = function() {alert(this.innerHTML)};

          var spanList = queue.childNodes;
          if (spanList.length >= 50) {
              alert("队列元素数量最多为50个！");
          } else {
              queue.appendChild(span);
          } //如果插入的数值的个数在50个一下就允许插入数值，否则就不允许插入数值，并且报错
      }
  }

  /**
   * leftOut方法
   * 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值
   */
  function leftOut(queue) {
      var childs = queue.childNodes; //获取queue里面全部的子元素
      alert(parseInt(childs[0].style.height)); //先显示元素中的数值，因为NodeList具有时效性
      queue.removeChild(childs[0]); //去除第一个子元素
  }

  /**
   * rightOut方法
   * 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值
   */
  function rightOut(queue) {
      var childs = queue.childNodes; //获取queue里面全部的子元素
      alert(parseInt(childs[childs.length - 1].style.height)); //先显示元素中的数值，因为NodeList具有时效性
      queue.removeChild(childs[childs.length - 1]); //去除最后一个子元素
  }

  /**
   * 输入验证
   * 输入不能为空，而且只能是实数
   该函数用于验证输入的数值是否满足以上的要求
   */
  function checkInput(num) {
      reg = /^-?\d+\.?\d*$/; //实数的正则表达式
      if (num == "") {
          alert("输入不能为空！");
          return false;
      } else if (!reg.test(num)) {
          alert("只能输入10-100内的实数！");
          return false;
      } else if (reg.test(num) && (num <= 10 || num >= 100)) {
          alert("只能输入10-100内的实数！");
          return false;
      } else return true;
  }

  /**
   * 清空Input表单
   */
  function emptyInput(input) {
      input.value = "";
  } //清空输入框中的值

  /**
   * 对列排序函数
   * 按照冒泡排序进行排序
   */
  function bubbleSort(queue) {
      var childs = queue.childNodes;
      var flag = false; //记录是否存在交换，如果没有交换则退出

      for (var i = 0; i < childs.length; i++) {

          for (var j = 0; j < childs.length - 1; j++) {

              if (childs[j].style.height > childs[j + 1].style.height) {
                  flag = true;
                  var height = childs[j].style.height;
                  childs[j].style.height = childs[j + 1].style.height;
                  childs[j + 1].style.height = height;
              }
          }
          if (!flag) break; //上一趟比较中不存在交换，则退出排序
      }
  } //利用冒泡算法进行数值的排序


  function init() {

      var queue = document.getElementById("queue");
      var input = document.getElementById("num"); //获取表单元素

      document.getElementById("left-in").onclick = function() {
          leftIn(queue);
          emptyInput(input)
      };
      document.getElementById("right-in").onclick = function() {
          rightIn(queue);
          emptyInput(input)
      };
      document.getElementById("left-out").onclick = function() {
          leftOut(queue);
      };
      document.getElementById("right-out").onclick = function() {
          rightOut(queue);
      };

      document.getElementById("sort").onclick = function() {

          bubbleSort(queue);
      }; //为所有按钮添加点击事件

      /**
       * deleteClick方法
       * 点击队列中任何一个元素，则该元素会被从队列中删除
       * 动态生成的节点绑定事件需要利用事件委托原理
       */
      document.getElementById("queue").onclick = function(e) {
          e = e || window.event;
          var t = e.target || e.srcElement; //t:目标对象
          var tagName = t.tagName;　 //tagName标签名称
          if (tagName == 'SPAN') {
              queue.removeChild(t);
          }
      }
      document.getElementById("random").onclick = function() {
          random();
      }
  }

  function random() {
      var spanList = queue.childNodes;
      queue.innerHTML = "";
      for (var i = 0; i < 50; i++) {
          var random = getRndInteger(11, 99);
          // 基本均衡获取 11 到 99 的随机整数
          //检查输入的值是否为整数，随机数是整数。
          var span = document.createElement("span");
          span.style.height = random;
          var spanList = queue.childNodes;
          queue.insertBefore(span, spanList[0]);

      }
  } //随机产生 50个数字元素

  function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  } //获取数值范围的函数
  init();