function gather_data(questions) {
    var data = '';
    for (let j = 0; j < questions.length; ++j) {
        data += questions[j] + ': ';
        var elements = document.getElementsByName(questions[j]) ;
        for (var a = "", i = elements.length; --i;) {
            if (elements[i].checked) {
                var a = elements[i].value;
                break;
            }
        }
        if (a === "") {
            data += 'none\n';
        }
        else {
            data += a + '\n';
        }
    }
    return data;
}