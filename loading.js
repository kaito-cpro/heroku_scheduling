// function load() {
//     var loader = document.getElementById('loading');
//     loader.style.display = '';
//     setTimeout(endLoader,30000);
// }

// function endLoader(){
//     var loader = document.getElementById('loading');
//     loader.style.display = 'none';
// }

var $submitBtn = $('button[type="submit"]');
$submitBtn.on('click',function(){
    setTimeout(function(){
        $('body').append('<div id="loading" style="display:none;"><div class="loadingMsg"></div></div>');
    },100);
});