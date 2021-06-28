function generate_popup(id, title, contents) {
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
    var label = document.createElement("label");
    label.htmlFor = "trigger_popup" + id;
    label.className = "popup_trigger";
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

function popup_not_recommend_line(id, display) {
    var title = "お知らせ";
    var contents_inner = [];
    contents_inner.push("本ツールは Google Chrome または Safari でのご利用を推奨しております。");
    contents_inner.push("LINE のリンクから開くのではなく、上記ブラウザで本ページをお気に入り登録しておくことを推奨します。");
    var contents = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents, display);
}