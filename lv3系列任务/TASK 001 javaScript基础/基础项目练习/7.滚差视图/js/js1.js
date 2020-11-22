$(function() {
    //获取元素相对于屏幕绝对位置
    function getAbsPosition(element) {
        var abs = {
                x: 0,
                y: 0
            }
            //如果浏览器兼容此方法
        if (document.documentElement.getBoundingClientRect) {
            //如果不用jQuery对象，可以使用else分支。
            abs.x = element.getBoundingClientRect().left;
            abs.y = element.getBoundingClientRect().top;

            abs.x += window.screenLeft +
                document.documentElement.scrollLeft -
                document.documentElement.clientLeft;
            abs.y += window.screenTop +
                document.documentElement.scrollTop -
                document.documentElement.clientTop;
        }
        //如果浏览器不兼容此方法
        else {
            while (element != document.body) {
                abs.x += element.offsetLeft;
                abs.y += element.offsetTop;
                element = element.offsetParent;
            }
            //计算相对位置
            abs.x += window.screenLeft +
                document.body.clientLeft - document.body.scrollLeft;
            abs.y += window.screenTop +
                document.body.clientTop - document.body.scrollTop;
        }
        return abs;
    }
    //获取元素中心点相对于屏幕的位移
    function getCenterPosition(element) {
        center = {
            x: 0,
            y: 0
        }
        var leftTop = getAbsPosition(element[0])
            // console.log(leftTop)
            // console.log(element.css('width'),element.css('height'))
        center.x = leftTop.x + parseInt(element.css('width')) / 2
        center.y = leftTop.y + parseInt(element.css('height')) / 2
        return center
    }
    console.log(getCenterPosition($('.layer img')))
    $(document).on('mousemove', '.layerWrap', function(e) {
        //console.log(e.clientX,e.clientY)
        CenterPosition = getCenterPosition($('.layer img'))
        moveY = (CenterPosition.x - e.clientX) / 30
        moveX = 0 - (CenterPosition.y - e.clientY) / 27
            //console.log(moveX,moveY)
        $('.layerWrap').css('transform', 'rotateX(' + moveX + 'deg)' + '' + 'rotateY(' + moveY + 'deg)')
        $('.layerWrap').css('webKitTransform', 'rotateX(' + moveX + 'deg)' + '' + 'rotateY(' + moveY + 'deg)')
    })

})