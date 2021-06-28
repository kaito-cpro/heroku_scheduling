function generate_popup(id, title, contents) {
    var popup_wrap = document.createElement("div");
    popup_wrap.id = "popup" + id;
    popup_wrap.className = "popup_wrap";
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

function popup_not_recommend_line() {
    var id = "line";
    var title = "お知らせ";
    var contents = [];
    contents_inner.push("test messgae");
    contents_inner.push("hogehoge");
    contents_inner.push("aaaaaaaaaaaaaaaaaaaaa");
    var content = [];
    for (let i = 0; i < contents_inner.length; ++i) {
        var content = document.createElement("p");
        content.innerHTML = contents_inner[i];
        contents.push(content);
    }
    generate_popup(id, title, contents);
}