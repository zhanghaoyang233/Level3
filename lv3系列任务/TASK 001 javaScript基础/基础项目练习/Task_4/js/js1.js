var idd = function(id) {
    return document.getElementById(id);
}
var number = [],
    hobby = [];

//输入tag并显示
idd("tag").onkeypress = function(e) {
        var key;
        if (window.event) key = e.keyCode;
        else if (e.which) key = e.which;

        switch (key) {
            //判断输入的是否是空格、回车、逗号
            case 13:
            case 32:
            case 10:
            case 44:
                {
                    var input = idd("tag").value;
                    var content = input.split(/[\s\n\r\，\,]/); //去掉输入的空格、回车、逗号
                    for (var i = 0; i < content.length; i++) {
                        if (content[i] == "" || typeof(content[i]) == "undefined") {
                            content.splice(i, 1);
                            i--;
                        }
                    }
                    number = content;
                    norepeat(number); //去重    
                    //number中只能有10个tag
                    if (number.length > 10) {
                        number.splice(0, number.length - 10);
                    }
                    show(); //显示tag
                }
        }
    }
    //去掉重复的tag
function norepeat(array) {
    var num = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) array.splice(j, 1);
        }
        num.push(array[i]);
    }
    array = num;
}
//鼠标在tag上
function over(target) {
    var cont = target.innerHTML;
    target.innerHTML = "删除" + cont;
    target.className = "red";
}
//鼠标离开tag
function out(target) {
    var cont = target.innerHTML;
    target.innerHTML = cont.slice(2);
    target.className = "";
}
//显示tag
function show() {
    var detail = " ";
    for (var i = 0; i < number.length; i++) {
        detail += "<li οnmοuseοver='over(this)' οnmοuseοut='out(this)' id='" + i + "'>" + number[i] + "</li>";
    }
    idd("tag-result").innerHTML = detail;
}
//点击tag即可删除tag
idd("tag-result").addEventListener('click', function(e) {
    var target = e.target;
    if (target.nodeName != "LI") return;
    var tar = parseInt(target.getAttribute("id")); //得到被点击元素的id属性，之前id绑定的是元素在数组中的序号
    number.splice(tar, 1); //删除被点击的元素，1代表只删除一个元素
    show();
})

//点击确认爱好按钮时
idd("test").addEventListener("click", function() {
        cutString(); //分割输入的内容
        norepeat(hobby); //去重
        //hobby中只能有10个爱好
        if (hobby.length > 10) {
            hobby.splice(0, hobby.length - 10);
        }
        //显示爱好
        var detail = " ";
        for (var i = 0; i < hobby.length; i++) {
            detail += "<li class='hobby' id='" + i + "'>" + hobby[i] + "</li>";
        }
        idd("hobby-result").innerHTML = detail;
    })
    //把输入的所有爱好按照分隔符分割并存入数组中
function cutString() {
    var value = idd("hobby").value;
    var content = value.split(/[\s\n\r\，\,\、\t\ ]/);
    for (var i = 0; i < content.length; i++) {
        if (content[i] == "" || typeof(content[i]) == "undefined") {
            content.splice(i, 1);
            i--;
        }
    }
    hobby = content;
}