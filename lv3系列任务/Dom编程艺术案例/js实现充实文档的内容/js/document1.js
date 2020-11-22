function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_i = abbreviations[i];
        if (current_i.length < 1) return false; //这条语句让IE6的浏览器不在执行后续代码，退出循环
        var definition = current_i.getAttribute("title");
        var key = current_i.firstChild.nodeValue;
        defs[key] = definition;
    } //获取title和文本内容的值，并赋值给一个数组
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        dtitle.appendChild(dtitle_text);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    } //创建自定义的列表
    if (dlist.childNodes.length < 1) return false; //如果dlist后面的子元素是空的就不在执行后面的元素
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // get all the blockquotes
    var quotes = document.getElementsByTagName("blockquote");
    // loop through all the blockquotes
    for (var i = 0; i < quotes.length; i++) {
        // if there is no cite attribute, continue the loop
        if (!quotes[i].hasAttribute("cite")) continue;
        // store the cite attribute
        var url = quotes[i].getAttribute("cite");
        // get all the element nodes in the blockquote
        var quoteChildren = quotes[i].getElementsByTagName('*');
        // if there are no element nodes, continue the loop
        if (quoteChildren.length < 0) continue;
        // get the last element node in the blockquote
        var elem = quoteChildren[quoteChildren.length - 1];
        // create the markup
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        // add the markup to the last element node in the blockquote
        elem.appendChild(superscript);
    }
}
window.onload = function() {
    displayCitations();
    displayAbbreviations();
}