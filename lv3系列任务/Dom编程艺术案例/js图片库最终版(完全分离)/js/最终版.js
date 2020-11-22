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


    function insertafter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }



    function preparePlaceholder() {
        // if (!document.createTextNode) return false;
        //if (!document.createElement) return false;
        //if (!document.getElementById) return false;
        //if (!document.getElementById("imagegallery")) return false;
        var placeholder = document.createElement("img");
        placeholder.setAttribute("id", "mmm");
        placeholder.setAttribute("src", "../js图片库/images/u=1796762658,4159569164&fm=26&gp=0.jpg");
        placeholder.setAttribute("alt", "My image gallery.")
        var direction = document.createElement("p");
        direction.setAttribute("id", "mmmm");
        var text = document.createTextNode("choose a picture");
        direction.appendChild(text);
        var gallery = document.getElementById("ee");
        gallery.appendChild(placeholder);
        insertafter(direction, placeholder);
        preparegallery();
    }
    preparePlaceholder();

}