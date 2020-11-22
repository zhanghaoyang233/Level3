function showpic(sss) {

    var s1 = sss.getAttribute("href"); //获取元素的href属性
    var s2 = document.getElementById("mmm"); //寻找元素的id值
    s2.setAttribute("src", s1); //改变src的值为href的值
    var text = sss.getAttribute("title"); //得到title的属性值
    var text1 = document.getElementById("mmmm"); //获取元素的id值
    text1.firstChild.nodeValue = text; //改变文本的值
}

function coutbody() {
    var body_element = document.getElementsByTagName("body")[0]; //获取到body元素
    alert(body_element.childNodes.length); //计算得到body元素后面的属性值
}