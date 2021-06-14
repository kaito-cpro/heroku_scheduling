function post(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];
    
            form.appendChild(hiddenField);
        }
    }
  
    document.body.appendChild(form);
    form.submit();
}
  
function load(page, id) {
    var loader = document.getElementById('loading');
    setTimeout(function(){
        loader.style.display = '';
    }, 100);
    setTimeout(endLoader, 30000);
    var value = document.getElementById(id).value;
    post(page, {val: value});
}

function endLoader() {
    var loader = document.getElementById('loading');
    loader.style.display = 'none';
}