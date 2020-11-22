/*
进阶版实现了html与javascript分离
平稳退化
优化了函数
以及一些属性的测试和检查
*/

window.onload = function() {

    function showpic(sss) {
        if (!document.getElementById("mmmm")) return false;
        var s1 = sss.getAttribute("href");
        var s2 = document.getElementById("mmm");
        //if (s2.nodeName != "img") return false;//该语句有问题
        s2.setAttribute("src", s1);
        if (document.getElementById("mmmm")) {
            var text = sss.getAttribute("title") ? sss.getAttribute("title") : "";
            var s3 = document.getElementById("mmmm");
            if (s3.firstChild.nodeType == 3) {
                s3.firstChild.nodeValue = text;
            }
        }
        return true;
    }


    function preparegallery() {
        if (!document.getElementById) return false;
        if (!document.getElementById("imagegallery")) return false;
        if (!document.getElementsByTagName) return false;
        var s1 = document.getElementById("imagegallery");
        var s2 = s1.getElementsByTagName("a");
        for (var i = 0; i < s2.length; i++) {
            s2[i].onclick = function() {
                return showpic(this) ? false : true;
            }
        }
    }
    preparegallery();
}