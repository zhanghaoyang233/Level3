var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];
//filter语法：array.filter(function(currentValue,index,arr), thisValue);
(function() {

    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    var aqiul = document.getElementById('aqi-list');
    var b = aqiData.filter(function(a) {
        return a[1] > 60;
    }); //选择出空气质量大于60的城市，赋值给数组b
    //对空气质量指数由大到小排序

    b.sort(function(a, c) {
        return c[1] - a[1];
    }); //sort进行数组的排序
    (function wirte() { //输出
        for (var i = 0; i < b.length; i++) {
            var r;
            var li = document.createElement('li');
            aqiul.append(li);
            li.innerHTML = "第" + (i + 1) + "名：" + b[i];
        }
    })();
})();