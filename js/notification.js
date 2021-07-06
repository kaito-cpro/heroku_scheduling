function open_notifications() {
    // var trigger = document.getElementById("trigger_notification");
    var trigger = document.getElementById("trigger_popuppopup_survey");  // 暫定
    trigger.checked = "checked";
    document.cookie = "notification_ver=" + "0" +  "; max-age=5184000";  // 暫定
}