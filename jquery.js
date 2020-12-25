$(".btn").on("click", function(){
    $(document).ajaxSend(function() {
        $("#overlay").fadeIn(500);
    });
    $.ajax({
        type: 'GET',
        success: function(data){
            console.log(data);
        }
    }).done(function() {
        setTimeout(function(){
            $("#overlay").fadeOut(500);
        },3000);
    });
    return false;
});