function generate_popup(id, title, contents, display) {
    var popup_wrap = document.createElement("div");
    popup_wrap.id = id;
    popup_wrap.className = "popup_wrap";
    if (!display) popup_wrap.style = "display:none";
    var trigger_popup = document.createElement("input");
    trigger_popup.type = "checkbox";
    trigger_popup.id = "trigger_popup" + id;
    trigger_popup.setAttribute("checked", "checked");
    var popup_overlay = document.createElement("div");
    popup_overlay.className = "popup_overlay";
    // var label = document.createElement("label");
    // label.htmlFor = "trigger_popup" + id;
    // label.className = "popup_trigger";
    var popup_content = document.createElement("div");
    popup_content.className = "popup_content";
    var content_title = document.createElement("div");
    content_title.className = "text_title";
    content_title.innerHTML = title;
    var close_btn = document.createElement("label");
    close_btn.htmlFor = "trigger_popup" + id;
    close_btn.className = "close_btn";
    var space = document.createElement("div");
    space.className = "space";
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
    // popup_overlay.appendChild(label);
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

function popup_not_recommend_line(id, display) {
    var title = "お知らせ";
    var contents_inner = [];
    contents_inner.push("本ツールはGoogle ChromeまたはSafariでのご利用を推奨しております。");
    contents_inner.push("LINEのブラウザで開いた場合において不具合を確認しておりますので、LINEのリンクから開くのではなくGoogle ChromeやSafariで本ページをブックマーク登録しておくことを推奨します。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}

function popup_survey(id, display) {
    if (document.cookie.indexOf("developer_mode") === -1) return;
    var title = "動作確認アンケート";
    var contents = [];
    var content = document.createElement("p");
    content.innerHTML = "デバッグのためにアンケートを実施しておりますので、ご協力をよろしくお願いいたします。";
    contents.push(content);
    var space = document.createElement("div");
    space.className = "space";
    contents.push(space);
    var question_names = [];
    question_names.push("URL自動入力");
    question_names.push("table不具合");
    question_names.push("tableレイアウト");
    question_names.push("行間");
    var question_contents = [];
    question_contents.push("URL欄には前回入力したURLが自動で入力されるか");
    question_contents.push("出欠表ページの動作に不具合はないか");
    question_contents.push("出欠表の各マスのレイアウトは整っているか(マスの大きさ等)");
    question_contents.push("出欠表で人数をタップしたときに現れるメンバー一覧の行間の間隔はどうか");
    var answers = [];
    answers.push(new Array("はい", "いいえ"));
    answers.push(new Array("ある", "ない"));
    answers.push(new Array("はい", "いいえ"));
    answers.push(new Array("広すぎる", "やや広い", "丁度よい", "やや狭い", "狭すぎる"));
    for (let i = 0; i < question_contents.length; ++i) {
        var question = document.createElement("p");
        question.style = "text-align:left";
        question.innerHTML = String(i + 1) + ". " + question_contents[i];
        contents.push(question);
        
        var answer = document.createElement("p");
        for (let j = 0; j < answers[i].length; ++j) {
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "question" + String(i + 1);
            input.value = answers[i][j];
            var label = document.createElement("label");
            label.innerHTML = answers[i][j];
            answer.appendChild(input);
            answer.appendChild(label);
        }
        contents.push(answer);
        
        var text_form = document.createElement("input");
        text_form.id = "text_form_for_question" + String(i + 1);
        text_form.type = "text";
        text_form.style = "display:none";
        contents.push(text_form);
        
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
        onclick_string += "'question" + String(i + 1) + "'";
        if (i != question_contents.length - 1) onclick_string += ", ";
        else onclick_string += "]))";
    }
    submit_btn.onclick = new Function(onclick_string);
    submit.appendChild(submit_btn);
    contents.push(submit);
    
    generate_popup(id, title, contents, display);
}

$(function(){
        $('input[name="question1"]:radio').change(function() {
            var value = $(this).val();
            if (value == "いいえ") {
                document.getElementById("text_form_for_question1").style.display = "";
            }
            else {
                document.getElementById("text_form_for_question1").style.display = "none";
            }
        });         
 });