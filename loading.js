function load() {
    var loader = document.getElementById('loading');
    setTimeout(function(){
        loader.style.display = '';
    }, 100);
    setTimeout(endLoader, 30000);
}

function endLoader(){
    var loader = document.getElementById('loading');
    loader.style.display = 'none';
}