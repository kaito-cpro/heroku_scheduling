<html>
<html lang="ja">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-198118895-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-198118895-1');
        </script>
        <title>調整さん 拡張機能</title>
        <meta charset="utf-8" name="viewport"
              content="width=320,
                       height=480,
                       initial-scale=1.0,
                       minimum-scale=1.0,
                       maximum-scale=2.0,
                       user-scalable=yes" />
        <meta name="keywords" content="調整さん,拡張機能" />
        <link rel="stylesheet" href="style.css?202107201500" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script type="text/javascript" src="js/history.js?202107150935"></script>
        <script type="text/javascript" src="js/scroll.js?202107191544"></script>
        <script type="text/javascript" src="js/popup.js?202107201500"></script>
        <script type="text/javascript" src="js/notification.js?202107181731"></script>
        <script type="text/javascript" src="js/gather_data.js"></script>
        <script type="text/javascript" src="js/loading.js"></script>
    </head>
    <body onload="brython(); set_url()">
        <div class="container">
            <h1>調整さん 拡張機能</h1>
            
            <p> 日程調整ツール「<a href="https://chouseisan.com/">調整さん</a>」を見やすく表示するためのツールです。
                下の枠内に「調整さん」のイベントURLを入力して次へ進んでください。
                空欄のまま読み込むとサンプルのイベントが表示されます。</p>
            <br>

            <form class="url_form">
                <div class="inputs">
                    <label class="label">URL</label>
                    <input type="reset" value="✕">
                    <input class="input_form" id="url" type="text" name='url'>
                </div>
                
                <div class="btn-area">
                    <input type="button" value="読み込む" onclick="load('table.php', 'url')">
                </div>
            </form>
            
            <br>
            <br>
            <br>
            <h3><span>本ツールについて</span></h3>
            <p>「読み込む」ボタンを押すことによって「調整さん」の最新のデータが読み込まれます。必ず読み込みボタンを押して最新のデータに更新してからご利用ください。</p>
            <p>本ツールは <a href="https://jp.heroku.com/what">Heroku</a> の無料プラットフォームで動作しており、毎月550時間まで利用可能です。(ほぼ大丈夫ですが)これをを超えた場合は本ツールを一時的に利用できなくなる場合があります。</noframes></p>
            
            <p style="text-align: right">Developer: Kai 2020.12.25 </p>
            
            <input type="checkbox" id="navTgl" class="trigger">
            <label for="navTgl" class="open"><span><div class="notification-badge-large" style="display:none"></div></span></label>
            <label for="navTgl" class="close"></label>
            <nav class="menu">
                <h2>menu</h2>
                <ul>
                    <li><a href="index.php">トップページ</a></li>
                    <li><a class="notification-badge-small" id="li_notification" onclick="open_notifications()">通知</a></li>
                    <li><a href="how_to_use.php">使い方</a></li>
                    <li><a href="about_developer.php">開発者について</a></li>
                    <li><a href="inquiry.php">お問い合わせ</a></li>
                    <!-- 隠しボタン (開発者モード) -->
                    <li><a id="cookie_access_li" onclick="open_cookie_access_console()" style="display:none">cookieの変更</a></li>
                    <input type="checkbox" id="developer_mode_btn" style="transform:scale(3.0); margin-left:50%; margin-top:15px; opacity:0.001;" onclick="developer_access()">
                </ul>
            </nav>
            
            <div class="notification_wrap" id="cookie_access_console">
                <input type="checkbox" id="trigger_cookie_access_console" class="trigger">
                <div class="notification_overlay">
                    <label for="trigger_cookie_access_console" class="notification_trigger"></label>
                    <div class="notification_content" id="cookie_access_console_content">
                        <div class="notification_list_title">cookieの変更</div>
                        <hr>
                        <div class="scroll_element">
                            <p style="text-align: left;">1. cookie名</p>
                            <p>
                                <input type="radio" name="cookie_name" value="event_url_history">event_url_history<br>
                                <input type="radio" name="cookie_name" value="notification_ver">notification_ver<br>
                                <input type="radio" name="cookie_name" value="popup_ver">popup_ver<br>
                                <input type="radio" name="cookie_name" value="notification_log">notification_log
                            </p>
                            <p style="text-align: left;">2. cookie値</p>
                            <p>
                                <input type="text" name="cookie_value" value="">
                            </p>
                            <p style="text-align: left;">3. max-age</p>
                            <p>
                                <input type="radio" name="cookie_age" value="0">0<br>
                                <input type="radio" name="cookie_age" value="5184000">5184000
                            </p>
                            <div class="space"></div>
                            <div style="text-align: right; margin-right: 30px;"><input type="button" value="決定" onclick="write_cookie()"></div>
                        </div>
                        <div class="space"></div>
                        <label for="trigger_cookie_access_console" class="close_btn">
                            <img src="img/close_btn.png" width="30">
                        </label>
                    </div>
                </div>
            </div>
                
            <div id="notification_list" class="notification_wrap">
                <input type="checkbox" id="trigger_notification" claass="trigger">
                <div class="notification_overlay">
                    <label for="trigger_notification" class="notification_trigger"></label>
                    <div class="notification_content">
                        <div class="notification_list_title">通知</div>
                        <hr>
                        <div class="scroll_element">
                            <div class="notification_element" id="notification_2" onclick="var notification = document.getElementById('notification_update1'); notification.children[0].checked='checked'; write_notification_log(2);">
                                <div class="notification_title" style="padding-right:50px">アップデートのお知らせ
                                    <div class="ribbon-content">
                                        <span class="ribbon">NEW</span>
                                    </div>
                                </div>
                                <div class="notification_date">2021/07/19 17:15</div>
                            </div>
                            <div class="notification_element" id="notification_1" onclick="var notification = document.getElementById('notification_survey'); notification.children[0].checked='checked'; write_notification_log(1);">
                                <div class="notification_title" style="padding-right:50px">動作確認アンケートのお願い
                                    <div class="ribbon-content">
                                        <span class="ribbon">NEW</span>
                                    </div>
                                </div>
                                <div class="notification_date">2021/07/10 00:00</div>
                            </div>
                            <div class="notification_element" id="notification_0" onclick="var notification = document.getElementById('notification_add_notification'); notification.children[0].checked='checked'; write_notification_log(0);">
                                <div class="notification_title" style="padding-right:50px">通知の実装のお知らせ
                                    <div class="ribbon-content">
                                        <span class="ribbon">NEW</span>
                                    </div>
                                </div>
                                <div class="notification_date">2021/07/10 00:00</div>
                            </div>
                        </div>    
                        <div class="space"></div>
                        <label for="trigger_notification" class="close_btn">
                            <img src="img/close_btn.png" width="30">
                        </label>
                    </div>
                </div>
            </div>
            
            <script type="text/javascript">
                popup_not_recommend_line("notification_not_recommend_line", false);
                var use = window.navigator.userAgent.toLowerCase();
                if (use.indexOf("line") > 0) {
                    var popup = document.getElementById('notification_not_recommend_line');
                    popup.children[0].checked = "checked";        
                }
            </script>
                    
            <script type="text/javascript">
                popup_update1("notification_update1", false);
                popup_survey("notification_survey", false);
                popup_add_notification("notification_add_notification", false);
                // check_popup_ver(1.7, 'popup_survey');
            </script>
            
            <!-- <script type="text/javascript">
                popup_maintenance("popup_maintenance", true);
            </script> -->
            
            <!-- check notification-version and developer-mode -->
            <script type="text/javascript">
                check_notification_ver(2);
                check_developer_mode();
            </script>
                    
            <div id="loading" style="display:none;">
                <div class="loadingMsg"></div>
            </div>
        </div>
    </body>
</html>