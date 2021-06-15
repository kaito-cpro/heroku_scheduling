function gather_data(questions) {
    var data = '';
    for (let j = 0; j < questions.length; ++j) {
        data += questions[j] + ': ';
        var elements = document.getElementsByName(questions[j]) ;
        var flg = false;
        for (let i = 0; i < elements.length; ++i) {
            if (elements[i].checked) {
                data += elements[i].value;
                flg = true;
                break;
            }
        }
        if (!flg) data += '未選択';
        if (j !== questions.length) data += '\n';
    }
    return data;
}