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
    var notification_large = document.getElementsByClassName("notification-large")[0];
    var notification_small = document.getElementById("li_notification");
    if (is_latest) {
        notification_large.style.display = "none";
        notification_small.className = "";
    }
    else {
        notification_large.style.display = "";
        notification_small.className = "notification-small";        
    }
    document.cookie = "notification_ver=" + ver +  "; max-age=5184000";
}

function open_notifications() {
    var notification_list = document.getElementById("notification_list");
    notification_list.style.display = "";
    var notification_trigger = notification_list.children[0];
    notification_trigger.checked = "checked";
    
    // TODO: txt ファイルとかに通知内容を書いて、それを js から読み取って書き出す仕様にしたい
    // TODO: 通知をリストにして、通知ごとに ver を管理??
    // TODO: 開発者モードで特定の cookie を書き換える機能を追加したい
    // TODO: expand_menu() みたいな js を書いて一括処理したい(通知の最新 ver を指定するのに全ページで指定する必要があるので)
    document.cookie = "notification_ver=" + "0" +  "; max-age=5184000";  // 暫定
    check_notification_ver(0);  // 暫定
}