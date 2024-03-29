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

function generate_popup(id, title, contents, display) {
    var popup_wrap = document.createElement("div");
    popup_wrap.id = id;
    popup_wrap.className = "popup_wrap";
    // if (!display && document.cookie.indexOf("developer_mode") === -1) popup_wrap.style = "display:none";
    var trigger_popup = document.createElement("input");
    trigger_popup.type = "checkbox";
    trigger_popup.id = "trigger_" + id;
    trigger_popup.className = "trigger";
    if (display) trigger_popup.checked = "checked";
    var popup_overlay = document.createElement("div");
    popup_overlay.className = "popup_overlay";
    var label = document.createElement("label");
    label.htmlFor = "trigger_" + id;
    label.className = "popup_trigger";
    var popup_content = document.createElement("div");
    popup_content.className = "popup_content";
    var content_title = document.createElement("div");
    content_title.className = "text_title";
    content_title.innerHTML = title;
    var close_btn = document.createElement("label");
    close_btn.htmlFor = "trigger_" + id;
    close_btn.className = "close_btn";
    var space = document.createElement("div");
    space.className = "space";
    space.style = "height: 20px";
    var image = document.createElement("img");
    image.src = "img/close_btn.png";
    image.width = 30;
    
    close_btn.appendChild(image);
    popup_content.appendChild(content_title);
    for (let i = 0; i < contents.length; ++i) {
        popup_content.appendChild(contents[i]);
    }
    popup_content.appendChild(space);
    popup_content.appendChild(close_btn);
    popup_overlay.appendChild(label);
    popup_overlay.appendChild(popup_content);
    popup_wrap.appendChild(trigger_popup);
    popup_wrap.appendChild(popup_overlay);
    
    document.body.appendChild(popup_wrap);
}

function popup_maintenance(id, display) {
    var title = "メンテナンスのお知らせ";
    var contents_inner = [];
    contents_inner.push("ただ今、Developer によるメンテナンス中です。");
    contents_inner.push("メンテナンス中も本ツールを利用することは可能ですが、一部の表示等に乱れが生じる場合があります。");
    contents_inner.push("ご迷惑をおかけします。");
    contents_inner.push("なお、メンテナンスは数時間ほどで終了する予定です。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_update4(id, display) {
    var title = "発生中の不具合について";
    var contents_inner = [];
    contents_inner.push("いつも本ツールをご利用いただきありがとうございます。");
    contents_inner.push("現在、おそらく<a href=\"https://chouseisan.com/\">調整さん</a>の仕様変更があったため、本ツールに不具合が発生しています。");
    contents_inner.push("今のところ修正の予定はないので、もし利用したい方がいれば<a href=\"inquiry.php\">お問い合わせ</a>フォームより一言ご連絡ください。(頑張って修正するかもしれません)");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_update3(id, display) {
    var title = "サーバの24時間稼働についてのお知らせ";
    var contents_inner = [];
    contents_inner.push("いつも本ツールをご利用いただきありがとうございます。");
    contents_inner.push("これまでは初回アクセス時に接続しづらい現象が起こっていましたが、この度サーバを24時間稼働させるように変更しました。");
    contents_inner.push("今後は常時サーバが稼働しているので、いつでも高速に接続できるようになります。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_update2(id, display) {
    var title = "アップデートのお知らせ";
    var contents_inner = [];
    contents_inner.push("いつも本ツールをご利用いただきありがとうございます。");
    contents_inner.push("以下のとおりアップデートを行いましたのでお知らせします。");
    contents_inner.push("トップページのURL入力欄に、入力内容を消去できるボタンを設置しました。");
    contents_inner.push("またユーザビリティの向上のため、スクロールに関する仕様も一部変更しましたので、もし不具合がある場合はお問い合わせフォームからご連絡ください。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_add_notification(id, display) {
    var title = "通知の実装のお知らせ";
    var contents_inner = [];
    contents_inner.push("いつも本ツールをご利用いただきありがとうございます。");
    contents_inner.push("通知一覧を見られる機能を実装しましたので、どうぞご利用ください。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_not_recommend_line(id, display) {
    var title = "LINEからご利用の方へのお知らせ";
    var contents_inner = [];
    contents_inner.push("本ツールはGoogle ChromeまたはSafariでのご利用を推奨しております。");
    contents_inner.push("LINEのブラウザで開いた場合において不具合を確認しておりますので、LINEのリンクから開くのではなくGoogle ChromeやSafariから開き、本ページをブックマーク登録しておくことを推奨します。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_survey(id, display) {
    var title = "動作確認アンケート";
    var contents = [];
    var content = document.createElement("p");
    content.innerHTML = "アンケートへのご協力をよろしくお願いします。既にご回答いただいている場合は結構です。";
    contents.push(content);
    var space = document.createElement("div");
    space.className = "space";
    contents.push(space);
    var question_names = [];
    var question_contents = [];
    var answers = [];
    
    question_names.push("URL自動入力");
    question_contents.push("URL欄には前回入力したURLが自動で入力されるか");
    answers.push(new Array("される", "されない"));
    
    question_names.push("table不具合");
    question_contents.push("出欠表ページの動作に不具合はないか");
    answers.push(new Array("不具合はない", "不具合がある"));
    
    question_names.push("tableレイアウト");
    question_contents.push("出欠表の各マスのレイアウトは整っているか(マスの大きさ等)");
    answers.push(new Array("整っている", "整っていない"));
    
    question_names.push("行間");
    question_contents.push("出欠表で人数をタップしたときに現れる名前一覧の行間の間隔はどうか");
    answers.push(new Array("広すぎる", "やや広い", "丁度良い", "やや狭い", "狭すぎる"));
    
    for (let i = 0; i < question_contents.length; ++i) {
        var question = document.createElement("p");
        question.style = "text-align:left";
        question.innerHTML = String(i + 1) + ". " + question_contents[i];
        contents.push(question);
        
        var answer = document.createElement("p");
        for (let j = 0; j < answers[i].length; ++j) {
            var input = document.createElement("input");
            input.type = "radio";
            input.name = question_names[i];
            input.value = answers[i][j];
            var label = document.createElement("label");
            label.innerHTML = answers[i][j];
            answer.appendChild(input);
            answer.appendChild(label);
        }
        contents.push(answer);
        
        // var text_form = document.createElement("input");
        // text_form.id = "text_form_for_question" + String(i + 1);
        // text_form.type = "text";
        // text_form.style = "display:none";
        // contents.push(text_form);
        
        var space = document.createElement("div");
        space.className = "space";
        contents.push(space);
    }
    var submit = document.createElement("div");
    submit.style = "text-align:right; margin-right: 30px;";
    var submit_btn = document.createElement("input");
    submit_btn.type = "button";
    submit_btn.value = "送信";
    var onclick_string = "load_for_survey('send_data.php', gather_data([";
    for (let i = 0; i < question_contents.length; ++i) {
        onclick_string += "'" + question_names[i] + "'";
        if (i != question_contents.length - 1) onclick_string += ", ";
        else onclick_string += "]))";
    }
    submit_btn.onclick = new Function(onclick_string);
    submit.appendChild(submit_btn);
    contents.push(submit);
    
    generate_popup(id, title, contents, display);
}