  //用块级元素来实现div的展现和div的清除
  /*点击弹出按钮*/
  function popBox() {
      var popBox = document.getElementById("popBox");
      var popLayer = document.getElementById("popLayer");
      popBox.style.display = "block";
      popLayer.style.display = "block";
  };

  /*点击关闭按钮*/
  function closeBox() {
      var popBox = document.getElementById("popBox");
      var popLayer = document.getElementById("popLayer");
      popBox.style.display = "none";
      popLayer.style.display = "none";
  }
  //原理：设置一个背景层和一个弹出框层，背景层和弹出框层突出层次感