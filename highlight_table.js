const debug = (select) => {
  // debug 関数を作成し引数の値を確認する
  console.log(select);
};

(function(document) {
  'use strict';
  // 検索用 table の処理
  var LightTableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
      var check = row.getElementsByTagName('input');
      if (check[0].checked) row.style.display = 'table-row';
      else row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
      init: function() {
        var inputs = document.getElementsByClassName('light-table-filter');
        Arr.forEach.call(inputs, function(input) {
          input.oninput = _onInputEvent;
        });
      }
    };
  })(Array.prototype);

  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
      LightTableFilter.init();
    }
  });
  
})(document);


// 出欠テーブルのハイライト処理
function HighlightTableFilter() {

      var tables = document.getElementsByClassName('highlight-table');
  
  var table = tables[0];
  for (let i0 = 0; i0 < table.tBodies.length; ++i0) {
    var tbody = table.tBodies[i0];
    for (let i1 = 0; i1 < tbody.rows.length; ++i1) {
      var row = tbody.rows[i1];
      for (let i2 = 0; i2 < row.cells.length; ++i2) {
        var cell = row.cells[i2];
        var popup_content = cell.getElementsByClassName('popup_content');
        if (popup_content.length === 0) continue;
        var person_list = popup_content[0].getElementsByClassName('person_name');
        var open_btn = cell.getElementsByClassName('open_btn')[0];
        open_btn.style.backgroundColor = '#fdf5e0';  // color3
        open_btn.style.color = '#37beb0';  // open_btn
        for (let j = 0; j < person_list.length; ++j) {
          person_list[j].style.background = 'linear-gradient(transparent 100%, rgb(101, 147, 196) 50%)';  // person_name
        }
        
        var order_tables = document.getElementsByClassName('order-table');
        var order_table = order_tables[0];
        var exist = false;
        for (let j = 0; j < order_table.rows.length; ++j) {         
          var check = order_table.rows[j].getElementsByTagName('input')[0];
          if (check.checked) {
            for (let k = 0; k < person_list.length; ++k) {
              if (person_list[k].textContent.toLowerCase() === check.value.toLowerCase()) {
                exist = true;
                person_list[k].style.background = 'linear-gradient(transparent 75%, rgb(101, 147, 196) 50%)';
                // person_list[k].style.color = '#7da9dc';
              }
            }
          }
        }
        if (exist) {
          var open_btn = cell.getElementsByClassName('open_btn')[0];
          open_btn.style.backgroundColor = '#38a3b9';
          open_btn.style.color = 'white';
        }
      }
    }
  }
};