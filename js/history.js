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

function check_popup_ver(ver, popup_wrap_id) {
    var cookies = document.cookie.split("; ");
    var exist = false;
    var is_equal_ver = true;
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("popup_ver") === 0) {
            exist = true;
            var ver_log = Number(cookies[i].substr(cookies[i].indexOf("=") + 1));
            if (ver_log !== ver) {
                is_equal_ver = false;
            }
        }
    }
    if (!exist || !is_equal_ver) {
        var popup = document.getElementById(popup_wrap_id);
        popup.style.display = '';        
    }
    document.cookie = "popup_ver=" + ver +  "; max-age=5184000";
}

var count = 0;
var developer_mode = document.cookie.indexOf("developer_mode") > 0;  // False: normal-mode, True: developer-mode
function developer_access() {
    if (!developer_mode) ++count;
    else --count;
    if (count === 5) {
        developer_mode = !developer_mode;
        document.cookie = "developer_mode; max-age=5184000";
        alert("開発者モードに変更されました")
    }
    else if (count === 0) {
        developer_mode = !developer_mode;
        document.cookie = "developer_mode=; max-age=0";
        alert("通常モードに変更されました")        
    }
}