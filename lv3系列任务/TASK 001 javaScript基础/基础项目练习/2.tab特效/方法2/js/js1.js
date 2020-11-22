var tabs = document.getElementById("tab").getElementsByTagName("li");
var divs = document.getElementById("tabCon").getElementsByTagName("div");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        change(this);
    }
} //事件委托，为所有li元素添加点击事件

function change(obj) {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == obj) {
            tabs[i].className = "fli";
            divs[i].className = "fdiv";
        } else {
            tabs[i].className = "";
            divs[i].className = "";
        }
    } //点击的元素则添加样式来显示，其他的元素则添加样式来隐藏
}