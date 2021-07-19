$(function() {
    var use = navigator.userAgent;
    var yoko1 = $(window).width();
    $(window).resize(function(){
        var yoko2 = $(window).width();
        if (use.indexOf('iPhone') > 0 || use.indexOf('iPad') > 0) {
            if(yoko1 != yoko2) {
                yoko1 = yoko2;
                resize();
            }
        } else {
            resize();
        }
    });
    
    function resize() {
        //リサイズ時に実行する処理
    } 
});

$(function() {
    $(".trigger").on('change', function() {
        var triggers = document.getElementsByClassName("trigger");
        var exists = false;
        for (let i = 0; i < triggers.length; ++i) {
            if (triggers[i].checked) exists = true;
        }
        if (exists) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "";
    }); 
});

// 1.関数の定義
function setHeight() {
    alert("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// 2.初期化
setHeight();
// 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
window.addEventListener('resize', setHeight);