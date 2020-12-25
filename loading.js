function load() {
    var loader = document.getElementById('loading');
    loader.style.display = '';
    setTimeout(endLoader,2000);
}

function endLoader(){
    var loader = document.getElementById('loading');
    loader.style.display = 'none';
}