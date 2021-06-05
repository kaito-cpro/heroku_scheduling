function make_history_table() {
    var table = document.getElementsByClassName('history-table')[0];
    var cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; ++i) {
        if (cookies[i].indexOf("event_url_history") === 0) {
            console.log(cookies[i]);
            var newRow = table.insertRow();
            newRow.content = cookies[i];
            break;
        }
    }
}