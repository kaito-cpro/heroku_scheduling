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
    // var trigger = document.getElementById("trigger_notification");
    // ここから下は良くない実装 
    var popup_survey = document.getElementById("popup_survey");  // 暫定
    popup_survey.style.display = "";
    var trigger_popup = document.getElementById("trigger_popuppopup_survey");  // 暫定
    trigger_popup.checked = "checked";
    // ここから上は良くない実装
    
    // TODO: 通知をリストにして、通知ごとに ver を管理??
    // TODO: 開発者モードで特定の cookie を書き換える機能を追加したい
    document.cookie = "notification_ver=" + "0" +  "; max-age=5184000";  // 暫定
    check_notification_ver(0);  // 暫定
}