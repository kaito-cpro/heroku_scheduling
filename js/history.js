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

function check_notification_ver(ver) {
    var cookies = document.cookie.split("; ");
    var is_latest = false;
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("notification_ver") === 0) {
            var ver_log = Number(cookies[i].substr(cookies[i].indexOf("=") + 1));
            if (ver_log === ver) {
                is_latest = true;
            }
        }
    }
    var notification_large = document.getElementById("notification-large");
    var notification_small = document.getElementById("notification-small");
    if (is_latest) {
        notification_large.style.display = "none";
        notification_small.className = "";
    }
    else {
        notification_large.style.display = "";
        notification_small.className = "notification-small";        
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
            if (ver_log < ver) {
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