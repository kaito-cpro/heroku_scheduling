function check_popup_ver(ver, popup_wrap_id) {
    var cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("popup_ver") === 0) {
            var ver_log = Number(cookies[i].substr(cookies[i].indexOf("=") + 1));
            if (ver_log !== ver) {
                var popup = document.getElementById(popup_wrap_id);
                popup.style.display = '';
            }
        }
    }
    document.cookie = "popup_ver=" + ver;
}