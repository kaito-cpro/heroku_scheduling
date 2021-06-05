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
        <link rel="stylesheet" href="style.css?202106051817" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.8/brython.js" integrity="sha256-rA89wPrTJJQFWJaZveKW8jpdmC3t5F9rRkPyBjz8G04=" crossorigin="anonymous"></script>
    </head>
    <body onload="brython()"> 
        <h1>調整さん 拡張機能</h1>
        
        <p>お問い合わせ</p>
        
        <div class="inputs">
            <label class="label">開発者へのメッセージ</label>
            <input class="input_form" id="message" type="text" name='message'>
        </div>
            
        <div class="btn-area">
            <input type="submit" value="送信" onclick="goPython()">
        </div>
        
        <script>
            function goPython(){
                $.ajax({
                    url: "send_message.py",
                    context: document.body
                }).done(function() {
                    alert('finished python script');;
                });
            }
        </script>
        
        <input type="checkbox" id="navTgl">
        <label for="navTgl" class="open"><span></span></label>
        <label for="navTgl" class="close"></label>
        <nav class="menu">
            <h2>menu</h2>
            <ul>
                <li><a href="how_to_use.php">使い方</a></li>
                <li><a href="about_developer.php">開発者について</a></li>
                <li><a href="inquiry.php">お問い合わせ</a></li>
            </ul>
        </nav>
        
        <input type="button" onclick="history.back()" value="戻る">
    </body>
</html>