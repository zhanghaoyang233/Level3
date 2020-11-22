window.onload = function() {
    function showpicture(sss) {
        var s1 = document.getElementById("img3");
        var m1 = sss.getAttribute("href");
        s1.setAttribute("src", m1); //改变src的属性为href
        return true;
    }

    function playit() {
        var s2 = document.getElementById("img1");
        var m1 = s2.getElementsByTagName("a");
        for (var i = 0; i < m1.length; i++) {
            m1[i].onclick = function() {
                return showpicture(this) ? false : true; //如果展示成功就返回false，清除a标签默认的属性，不在弹出
            }
        }
    }
    playit(); //调用函数
}