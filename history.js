function set_url() {
    var cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("event_url_history") === 0) {
            var url = cookies[i].split("=")[1];
            document.getElementsByName('url')[0].value = url;
            break;
        }
    }
}

function add_cookie() {
    var url = document.getElementsByName('url')[0].textContent;
    document.cookie = "event_url_history=" + url;
}