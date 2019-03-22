function slideClass() {
    init();
};
init = function () {
    this.bindEvent();
};
bindEvent = function () {
    var init = 0;//section的索引
    var zind = 666;
    var wraps = document.getElementById('wraps');
    var sec = document.getElementsByTagName('section');
    var setPage = {
        x: 0,
        y: 0
    }
    if (wraps) {
        wraps.addEventListener('touchstart', function (e) {
            setPage.x = e.changedTouches[0].pageX;
            setPage.y = e.changedTouches[0].pageY;
        }, false);
        wraps.addEventListener('touchmove', function (e) {
            e.preventDefault();//阻止默认事件
            var getX = e.changedTouches[0].pageX;
            var getY = e.changedTouches[0].pageY;
            // this.style.top = getY - setPage.y + 'px';
            //向下切换
            // if((setPage.y - getY)>(window.innerHeight / 3)){
            //     init++;
            //     [].forEach.call(sec, function (item, index) {
            //         item.id = "";
            //         if (init === index) {
            //             item.id = "page" + (index + 1);                    
            //         }
            //     })
            // }
        }, false);
        wraps.addEventListener('touchend', function (e) {
            var getx = e.changedTouches[0].pageX;
            var gety = e.changedTouches[0].pageY;
            if ((setPage.y - gety) > (window.innerHeight / 3)) {
                init++;
                if (init > 5) {
                    init = 0;
                    sec[init].style.zIndex += zind;
                    sec[5].style.zIndex = 0;
                } else {
                    sec[init].style.zIndex += zind;
                    sec[init - 1].style.zIndex = 0;
                }
                //给背景图片加动画效果 通过增加类名来控制
                [].forEach.call(sec, function (item, index) {
                    item.id = "";
                    if (init === index) {
                        item.id = "page" + (index + 1);
                        
                    }
                })
            } else {
                if ((gety - setPage.y) > (window.innerHeight / 3)) {
                    if (init < 1) {
                        init = sec.length - 1;
                        sec[init].style.zIndex += zind;
                    } else {
                        sec[init].style.zIndex = 0;
                        init--;
                        sec[init].style.zIndex = zind;
                    }
                    [].forEach.call(sec, function (item, index) {
                        item.id = "";
                        if (init === index) {
                            item.id = "page" + (index + 1);
                        }
                    })
                }
            }
        }, false);
    }
}
new slideClass();
