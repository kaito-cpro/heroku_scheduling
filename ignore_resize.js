$(function() {
    console.log("called");
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
        alert("hoge");
    } 
});