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
        console.log("[INFO] called!");
        var triggers = document.getElementsByClassName("trigger");
        var exists = false;
        for (let i = 0; i < triggers.length; ++i) {
            if (triggers[i].checked === "checked") exists = true;
        }
        if (exists) {
            document.body.overflowY = "hidden";
            console.log("[INFO] changed to hidden");
        }
        else {
            document.body.overflowY = "";
            console.log("[INFO] changed to auto");
        }
    }); 
});