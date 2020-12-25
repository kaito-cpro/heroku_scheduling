$(".btn").on("click", function(){
    $("form").submit(); //フォーム実行
    $("#overlay").fadeIn(500); //二度押しを防ぐloading表示
    setTimeout(function(){
        $("#overlay").fadeOut(500);
    },3000);
});