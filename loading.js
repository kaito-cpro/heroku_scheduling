// function load() {
//     var loader = document.getElementById('loading');
//     loader.style.display = '';
//     setTimeout(endLoader, 30000);
// }

// function endLoader(){
//     var loader = document.getElementById('loading');
//     loader.style.display = 'none';
// }

$('input[type="submit"]').on('click', function(){
    console.log("called");
    setTimeout(function(){
        $('body').append('<div id="loading" display=""><div class="loadingMsg"></div></div>');
    }, 100);
});