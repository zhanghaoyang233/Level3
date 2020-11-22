var tds = null; //定义一个空的全局对象
var jg = null,
    dy = null,
    tg = null;
window.onload = function() { //因为以后都是外部引用JS文件，因为程序加载执行顺序的问题，设置一个文档加载完成后调用方法的事件
    tds = document.getElementsByTagName("td"); //找到所有的对象
    jg = document.getElementById("jg");
    dy = document.getElementById("dy");
    tg = document.getElementById("tg");
    addEvent(); //文档加载完成后调用这个方法
}

function addEvent() {
    for (var i = 0; i < tds.length; i++) { //循环下标用来找出所有的单元格
        var zhi = tds[i].getAttribute("id"); //找出带id属性的单元格
        if (zhi) { //当本次循环有带id属性的
            continue; //那么跳过本次循环
        }
        tds[i].onclick = function() { //后给这个单元格添加点击事件并调用方法
            jg.innerHTML += this.innerHTML; //此处用到字符串拼接的方法  每点击一次和上一次的字符串拼接（用来作为下边的计算）
        }

    }
    //给等于号添加点击事件
    dy.onclick = function() { //当点击等于号的时候
            jg.innerHTML = eval(jg.innerHTML); //结果显示在HTML文档中并赋值（eval（）函数会将字符串转换为JavaScript代码执行）
        }
        //当点击退格的时候调用这个函数
    tg.onclick = function() {
        jg.innerHTML = "   " //赋值（substr()这个是字符串方法，用来截取（保留）从0到倒数第二个，也就是当每次点击的时候会退一格） 
    }
}