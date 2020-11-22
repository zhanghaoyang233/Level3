var show = document.getElementById("show").getElementsByTagName("span");

setInterval(function() {
        var timeing = new Date();
        var time = new Date(2021, 1, 1, 0, 0, 0); //获取当前的日期
        var num = time.getTime() - timeing.getTime(); //获取时间差

        var day = parseInt(num / (24 * 60 * 60 * 1000));
        num = num % (24 * 60 * 60 * 1000);
        var hour = parseInt(num / (60 * 60 * 1000));
        num = num % (60 * 60 * 1000);
        var minute = parseInt(num / (60 * 1000));
        num = num % (60 * 1000);
        var seconde = parseInt(num / 1000);
        //分别获取小时，分钟，秒
        show[0].innerHTML = day;
        show[1].innerHTML = hour;
        show[2].innerHTML = minute;
        show[3].innerHTML = seconde;
    }, 100)
    //分别插入天数，小时，分钟和秒数。每100ms刷新一次