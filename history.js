function set_url() {
    var cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("event_url_history") === 0) {
            var url = cookies[i].substr(cookies[i].indexOf("=") + 1);
            if (url === "https://chouseisan.com/s?h=59522eee6900479b8f2ac7b9d33e0f47") break;
            document.getElementById('url').value = url;
            break;
        }
    }
}