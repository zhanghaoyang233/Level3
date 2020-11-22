var aqiData = {};

function addAqiData() {
    //trim() 可以删除字符串前后的空格字符,但是中间的空格符却消除不了
    var strCity = document.getElementById("aqi-city-input").value.trim(); //trim()方法作用为移除前导空格、尾随空格和行终止符的原始字符串。获取城市名称
    var strAqi = document.getElementById("aqi-value-input").value.trim(); //value作用为获取框内的值的大小。获取城市空气指数
    //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    if (!strCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名必须为中英文字符！");
        return;
    }
    if (!strAqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }
    aqiData[strCity] = strAqi; //定义相应对象的属性值，创建一个数组，aqiData[城市名称]=城市空气指数。存为一个数组
}

function renderAqiList() {
    var table = document.getElementById("aqi-table");
    table.innerHTML = "";
    for (var strCity in aqiData) //循环strCity个
    {
        if (table.children.length === 0) {
            table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
        } //如果表内一个子元素都没有的话，就加入表头：城市，空气质量，操作。第一次插入的时候加入表头
        //创建一个tr对象
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = strCity; //城市
        tr.appendChild(td1); //td1接到tr
        var td2 = document.createElement("td");
        td2.innerHTML = aqiData[strCity]; //空气质量
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = "<button class='del-btn'>删除</button>"; //创建删除按钮class应用多个
        tr.appendChild(td3);
        table.appendChild(tr); //接到文档里，不再是孤儿
    }
}

function addBtnHandle() {
    addAqiData();
    renderAqiList();
} //添加的接口

function delBtnHandle(target) {
    var tr = target.parentElement.parentElement; //"tr"
    var strCity = tr.children[0].innerHTML; //获取第一个子元素的值
    delete aqiData[strCity];
    renderAqiList(); //更新表格显示
}

function init() {
    var btnAdd = document.getElementById("add-btn");
    btnAdd.onclick = addBtnHandle;
    var table = document.getElementById("aqi-table");
    var arrBtnDel = table.getElementsByClassName("del-btn");
    //addEventListener(event,function,useCapture)


    table.addEventListener("click", function(e) {
            if (e.target && e.target.nodeName === "BUTTON") {
                delBtnHandle(e.target); //删除目标节点
            }
        }) //实现删除元素节点
}
init();