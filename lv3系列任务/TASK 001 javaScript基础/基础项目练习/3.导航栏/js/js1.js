function nav(liID, ulID) {
    var oLi = document.getElementById(liID);
    var oUl = document.getElementById(ulID);

    oLi.onmouseover = function() { //鼠标移近的事件，使高度为130px
        oUl.style.height = '130px';
    };
    oLi.onmouseout = function() { //鼠标移出的事件
        oUl.style.height = '0';
    }
}
nav('li1', 'ul1');
nav('li2', 'ul2');
nav('li3', 'ul3');