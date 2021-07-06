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

var count = 0;
var developer_mode = document.cookie.indexOf("developer_mode") > 0;  // False: normal-mode, True: developer-mode
function developer_access() {
    ++count;
    if (count === 5) {
        count = 0;
        developer_mode = !developer_mode;
        if (developer_mode) {
            alert("開発者モードに変更されました")
            document.cookie = "developer_mode=1; max-age=5184000"; 
        }
        else {
            alert("通常モードに変更されました")        
            document.cookie = "developer_mode=; max-age=0";            
        }
    }
}