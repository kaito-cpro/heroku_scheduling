$(function() {
    $("form").on('submit', function(){
        $.LoadingOverlay("show", {
            text :"Now Loading..."
        });
    });
});