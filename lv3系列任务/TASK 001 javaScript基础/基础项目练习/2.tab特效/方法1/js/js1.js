function tab(pid) {
    var tabs = ["tab1", "tab2", "tab3", "tab4"]; //定义一个数组分别存储4个li的id值
    for (var i = 0; i < 4; i++) {
        if (tabs[i] == pid) {
            document.getElementById(tabs[i]).style.display = "block";
        } else {
            document.getElementById(tabs[i]).style.display = "none";
        } //如果使传入函数的id值显示为block，其他的id值进行隐藏
    }
}