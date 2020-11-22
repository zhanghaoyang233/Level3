  /**
   * leftIn方法
   * 点击"左侧入"，将input中输入的数字从左侧插入队列中
   */
  function leftIn(queue) {
      var num = document.getElementById("num").value;
      if (checkInput(num)) {
          var span = document.createElement("span");
          //动态生成的元素在元素生成的时候绑定事件或者利用事件委托，事件委托性能更好
          // span.onclick = function() {alert(this.innerHTML)};
          var spanList = queue.childNodes;
          span.innerHTML = num;
          alert(num);
          queue.insertBefore(span, spanList[0]);
      }
  }

  /**
   * rightIn方法
   * 点击"右侧入"，将input中输入的数字从右侧插入队列中
   */
  function rightIn(queue) {
      var num = document.getElementById("num").value;
      if (checkInput(num)) {
          var span = document.createElement("span");
          span.innerHTML = num;
          //动态生成的元素在元素生成的时候绑定事件或者利用事件委托，事件委托性能更好
          // span.onclick = function() {alert(this.innerHTML)};
          alert(num);
          queue.appendChild(span);

      }
  }

  /**
   * leftOut方法
   * 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值
   */
  function leftOut(queue) {
      var childs = queue.childNodes;
      alert(childs[0].innerHTML); //先显示元素中的数值，因为NodeList具有时效性

      queue.removeChild(childs[0]);
  }

  /**
   * rightOut方法
   * 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值
   */
  function rightOut(queue) {
      var childs = queue.childNodes;
      alert(childs[childs.length - 1].innerHTML); //先显示元素中的数值，因为NodeList具有时效性

      queue.removeChild(childs[childs.length - 1]);
  }

  /**
   * 输入验证
   * 输入不能为空，而且只能是整数
   */
  function checkInput(num) {
      reg = /^[-+]?\d*$/; //整数的正则表达式
      if (num == "") {
          alert("输入不能为空！");
          return false;
      } else if (!reg.test(num)) {
          alert("只能输入整数！");
          return false;
      } else return true;
  }


  function init() {

      var queue = document.getElementById("queue");

      document.getElementById("left-in").onclick = function() {
          leftIn(queue);
      };
      document.getElementById("right-in").onclick = function() {
          rightIn(queue);
      };
      document.getElementById("left-out").onclick = function() {
          leftOut(queue);
      };
      document.getElementById("right-out").onclick = function() {
          rightOut(queue);
      };
      /**
       * deleteClick方法
       * 点击队列中任何一个元素，则该元素会被从队列中删除
       * 动态生成的节点绑定事件需要利用事件委托原理
       */
  }


  init();