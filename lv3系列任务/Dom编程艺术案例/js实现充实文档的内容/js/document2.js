function displayCitations() {
    if (!document.getElementById || !document.getElementsByTagName || !document.createElement) return false;
    var s1 = document.getElementsByTagName("blockquote");
    for (var i = 0; i < s1.length; i++) {
        if (!s1[i].getAttribute("cite")) continue;
        var s2 = s1[i].getAttribute("cite");
        var s3 = s1[i].getElementsByTagName("*");
        if (s3.length < 1) continue;
        var elem = s3[s3.length - 1]; //确定最后一个元素节点的位置

        var link = document.createElement("a");
        var sourse = document.createTextNode("Sourse");
        link.appendChild(sourse);

        link.setAttribute("href", s2);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}


window.onload = function() {
    displayCitations();
};