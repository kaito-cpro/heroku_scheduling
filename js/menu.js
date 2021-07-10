function expand_menu() {
    document.body.insertAdjacentHTML('afterend', '\
        <input type="checkbox" id="navTgl">\
        <label for="navTgl" class="open"><span><div class="notification-badge-large" style="display:none">!</div></span></label>\
        <label for="navTgl" class="close"></label>\
        <nav class="menu">\
            <h2>menu</h2>\
            <ul>\
                <li><a href="index.php">トップページ</a></li>\
                <li><a class="notification-badge-small" id="li_notification" onclick="open_notifications()">通知</a></li>\
                <li><a href="how_to_use.php">使い方</a></li>\
                <li><a href="about_developer.php">開発者について</a></li>\
                <li><a href="inquiry.php">お問い合わせ</a></li>\
                <!-- 隠しボタン (開発者モード) -->\
                <li><a id="cookie_access_li" onclick="open_cookie_access_console()" style="display:none">cookieの変更</a></li>\
                <input type="checkbox" id="developer_mode_btn" style="transform:scale(3.0); margin-left:50%; margin-top:15px; opacity:0.001;" onclick="developer_access()">\
            </ul>\
        </nav>\
    ');
}

function expand_cookie_access_console() {
    document.body.insertAdjacentHTML('afterend', '\
        <div class="notification_wrap" id="cookie_access_console" style="display:none">\
            <input type="checkbox" id="trigger_cookie_access_console" checked="checked">\
            <div class="notification_overlay">\
                <div class="notification_content" id="cookie_access_console_content">\
                    <div class="text_title">cookieの変更</div>\
                    <p style="text-align: left;">1. cookie名</p>\
                    <p>\
                        <input type="radio" name="cookie_name" value="event_url_history">event_url_history\
                        <input type="radio" name="cookie_name" value="notification_ver">notification_ver\
                        <input type="radio" name="cookie_name" value="popup_ver">popup_ver\
                    </p>\
                    <p style="text-align: left;">2. cookie値</p>\
                    <p>\
                        <input type="text" name="cookie_value" value="">\
                    </p>\
                    <p style="text-align: left;">3. max-age</p>\
                    <p>\
                        <input type="radio" name="cookie_age" value="0">0\
                        <input type="radio" name="cookie_age" value="5184000">5184000\
                    </p>\
                    <div class="space"></div>\
                    <div style="text-align: right; margin-right: 30px;"><input type="button" value="決定" onclick="write_cookie()"></div>\
                    <div class="space"></div>\
                    <label for="trigger_cookie_access_console" class="close_btn">\
                        <img src="img/close_btn.png" width="30">\
                    </label>\
                </div>\
            </div>\
        </div>\
    ');
}

function expand_notification_list() {
    document.body.insertAdjacentHTML('afterend', '\
        <div id="notification_list" class="notification_wrap" style="display:none">\
            <input type="checkbox" id="trigger_notification" checked="checked">\
            <div class="notification_overlay">\
                <div class="notification_content">\
                    <div class="notification_list_title">通知</div>\
                    <hr>\
                    <div class="scroll_element">\
                    <div class="notification_element" id="notification_1" onclick="var notification = document.getElementById(\'notification_survey\'); notification.style.display=\'\'; notification.children[0].checked=\'checked\'; write_notification_log(1);">\
                    <div class="notification_title notification-badge-small">動作確認アンケートのお願い</div>\
                    <div class="notification_date">2021/07/10 00:00</div>\
                        </div>\
                        <div class="notification_element" id="notification_0" onclick="var notification = document.getElementById(\'notification_add_notification\'); notification.style.display=\'\'; notification.children[0].checked=\'checked\'; write_notification_log(0);">\
                            <div class="notification_title notification-badge-small">通知の実装のお知らせ</div>\
                            <div class="notification_date">2021/07/10 00:00</div>\
                        </div>\
                    </div>    \
                    <div class="space"></div>\
                    <label for="trigger_notification" class="close_btn">\
                        <img src="img/close_btn.png" width="30">\
                    </label>\
                </div>\
            </div>\
        </div>\
    ');
}

function expand_popup() {
    popup_not_recommend_line("notification_not_recommend_line", false);
    var use = window.navigator.userAgent.toLowerCase();
    if (use.indexOf("line") > 0) {
        var popup = document.getElementById('notification_not_recommend_line');
        popup.style.display = '';        
    }
    
    popup_survey("notification_survey", false);
    popup_add_notification("notification_add_notification", false);
    // check_popup_ver(1.7, \'popup_survey\');

    check_notification_ver(1);
    check_developer_mode();
}