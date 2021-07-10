function check_notification_ver(ver) {
    var cookies = document.cookie.split("; ");
    var is_latest = true;
    var exists = false;
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("notification_log") === 0) {
            exists = true;
            var logs = cookies[i].substr(cookies[i].indexOf("=") + 1).split("/").map(Number);
            for (let j = 0; j <= ver; ++j) {
                var notification = document.getElementById("notification_" + String(j));
                if (notification !== null) {
                    if (logs.find(v => v === j)) {
                        // 既読
                        notification.children[0].className = "notification_title";
                    }
                    else {
                        // 未読
                        notification.children[0].className = "notification_title notification-badge-small";                        
                        is_latest = false;
                    }
                }
            }
        }
    }
    if (!exists) is_latest = false;
    var notification_large = document.getElementsByClassName("notification-badge-large")[0];
    var notification_small = document.getElementById("li_notification");
    if (is_latest) {
        notification_large.style.display = "none";
        notification_small.className = "";
    }
    else {
        notification_large.style.display = "";
        notification_small.className = "notification-badge-small";
    }
}

function open_notifications() {
    var notification_list = document.getElementById("notification_list");
    notification_list.style.display = "";
    var notification_trigger = notification_list.children[0];
    notification_trigger.checked = "checked";
    
    // TODO: txt ファイルとかに通知内容を書いて、それを js から読み取って書き出す仕様にしたい
    // TODO: ポップアップをすべて埋め込むのではなく、押されたときに js で追加するほうが高速??
    // TODO: 通知をリストにして、通知ごとに ver を管理??
}

function write_notification_log(ver) {
    var cookies = document.cookie.split("; ");
    var exists = false;
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("notification_log") === 0) {
            exists = true;
            var logs = cookies[i].substr(cookies[i].indexOf("=") + 1).split("/").map(Number);
            if (logs.find(v => v === ver)) break;
            logs.push(ver);
            logs.sort((a, b) => a - b);
            document.cookie = "notification_log=" + logs.join("/") + "; max-age=5184000";
        }
    }
    if (!exists) {
        document.cookie = "notification_log=" + String(ver) + "; max-age=5184000";
    }
    check_notification_ver(1);  // 暫定(ホントは max-ver はここで指定すべきではない)
}