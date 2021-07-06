function open_notifications() {
    // var trigger = document.getElementById("trigger_notification");
    var popup_survey = document.getElementById("popup_survey");  // 暫定
    popup_survey.style.display = "";
    var trigger_popup = document.getElementById("trigger_popuppopup_survey");  // 暫定
    trigger_popup.checked = "checked";
    document.cookie = "notification_ver=" + "0" +  "; max-age=5184000";  // 暫定
}