function set_url() {
    var cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("event_url_history") === 0) {
            var url = cookies[i].substr(cookies[i].indexOf("=") + 1);
            if (url === "https://chouseisan.com/s?h=59522eee6900479b8f2ac7b9d33e0f47") break;
            document.getElementById('url').value = url;
            break;
        }
    }
}

var count = 0;
var developer_mode = document.cookie.indexOf("developer_mode") > 0;  // False: normal-mode, True: developer-mode
function developer_access() {
    ++count;
    if (count === 5) {
        count = 0;
        developer_mode = !developer_mode;
        if (developer_mode) {
            alert("開発者モードに変更されました")
            document.cookie = "developer_mode=1; max-age=5184000"; 
        }
        else {
            alert("通常モードに変更されました")        
            document.cookie = "developer_mode=; max-age=0";            
        }
    }
    check_developer_mode();
}

function check_developer_mode() {
    if (document.cookie.indexOf("developer_mode") > 0) {
        document.getElementById("cookie_access_li").style.display = '';
    }
    else {
        document.getElementById("cookie_access_li").style.display = 'none';
    }
}

function open_cookie_access_console() {
    var console = document.getElementById("cookie_access_console");
    console.style.display = '';
    console.children[0].checked = "checked";
}

function write_cookie() {
    var cookie_name = '-', cookie_value = '-', cookie_age = '-';
    var cookie_names = document.getElementsByName("cookie_name");
    for (let i = 0; i < cookie_names.length; ++i) {
        if (cookie_names[i].checked) cookie_name = cookie_names[i].value;
    }
    cookie_value = document.getElementsByName("cookie_value")[0].value;
    var cookie_ages = document.getElementsByName("cookie_age");
    for (let i = 0; i < cookie_ages.length; ++i) {
        if (cookie_ages[i].checked) cookie_age = cookie_ages[i].value;
    }
    if (cookie_name === '-' || cookie_age === '-') {
        alert('未選択です');
    }
    else {
        document.cookie = cookie_name + "=" + cookie_value + "; max-age=" + cookie_age;
    }
}