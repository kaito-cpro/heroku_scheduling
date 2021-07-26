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
      var table = tables[0];
    var hit_person_list = [];
    var checked_person_list = [];
    var other_person_list = [];
    for (let i0 = 0; i0 < table.tBodies.length; ++i0) {
      var tbody = table.tBodies[i0];
      for (let i1 = 0; i1 < tbody.rows.length; ++i1) {
        var row = tbody.rows[i1];
        var name = row.getElementsByTagName('input')[0].value;
            var text = name.toLowerCase(), val = _input.value.toLowerCase();
            var check = row.getElementsByTagName('input');
            if (check[0].checked) {
          checked_person_list.push(row.children[0]);
            }
            else if (row.style.display = text.indexOf(val) !== -1) {
          hit_person_list.push(row.children[0]);
        }
        else {
          other_person_list.push(row.children[0]);
        }  
      }
    }
    for (let i = 0; i < table.tBodies.length; ++i) {
      table.deleteRow(0);
    }
    // debug(checked_person_list);
    // debug(hit_person_list);
    // debug(other_person_list);
    
    var idx = 0;
    if (val === '') {
      for (let i = 0; i < checked_person_list.length; ++i) {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var lb = checked_person_list[i].children[0].outerHTML.indexOf('checked');
        if (lb === -1) {
          th.innerHTML = checked_person_list[i].children[0].outerHTML.substr(0, checked_person_list[i].children[0].outerHTML.length - 1) + 'checked="checked">' + checked_person_list[i].children[1].outerHTML;
        }
        else {
          th.innerHTML = checked_person_list[i].children[0].outerHTML + checked_person_list[i].children[1].outerHTML;
        }
        tr.appendChild(th);
        table.tBodies[idx].appendChild(tr);
        ++idx;
      }
      for (let i = 0; i < hit_person_list.length; ++i) {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var lb = hit_person_list[i].children[0].outerHTML.indexOf('checked');
        if (lb === -1) {
          th.innerHTML = hit_person_list[i].children[0].outerHTML + hit_person_list[i].children[1].outerHTML;
        }
        else {
          th.innerHTML = hit_person_list[i].children[0].outerHTML.substr(0, lb) + '>' + hit_person_list[i].children[1].outerHTML;
        }
        tr.appendChild(th);
        table.tBodies[idx].appendChild(tr);
        ++idx;
      }
    }
    else {
      for (let i = 0; i < hit_person_list.length; ++i) {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var lb = hit_person_list[i].children[0].outerHTML.indexOf('checked');
        if (lb === -1) {
          th.innerHTML = hit_person_list[i].children[0].outerHTML + hit_person_list[i].children[1].outerHTML;
        }
        else {
          th.innerHTML = hit_person_list[i].children[0].outerHTML.substr(0, lb) + '>' + hit_person_list[i].children[1].outerHTML;
        }
        tr.appendChild(th);
        table.tBodies[idx].appendChild(tr);
        ++idx;
      }
      for (let i = 0; i < checked_person_list.length; ++i) {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var lb = checked_person_list[i].children[0].outerHTML.indexOf('checked');
        if (lb === -1) {
          th.innerHTML = checked_person_list[i].children[0].outerHTML.substr(0, checked_person_list[i].children[0].outerHTML.length - 1) + 'checked="checked">' + checked_person_list[i].children[1].outerHTML;
        }
        else {
          th.innerHTML = checked_person_list[i].children[0].outerHTML + checked_person_list[i].children[1].outerHTML;
        }
        tr.appendChild(th);
        table.tBodies[idx].appendChild(tr);
        ++idx;
      }
      for (let i = 0; i < other_person_list.length; ++i) {
        var tr = document.createElement('tr');
        tr.className = 'hide_row';
        var th = document.createElement('th');
        var lb = other_person_list[i].children[0].outerHTML.indexOf('checked');
        if (lb === -1) {
          th.innerHTML = other_person_list[i].children[0].outerHTML + other_person_list[i].children[1].outerHTML;
        }
        else {
          th.innerHTML = other_person_list[i].children[0].outerHTML.substr(0, lb) + '>' + other_person_list[i].children[1].outerHTML;
        }
        tr.appendChild(th);
        table.tBodies[idx].appendChild(tr);
        ++idx;
      }
    }
    // debug(table);
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
          person_list[j].style.background = '';  // person_name
        }
        
        var order_tables = document.getElementsByClassName('order-table');
        var order_table = order_tables[0];
        var exist = false;
        for (let j = 0; j < order_table.rows.length; ++j) {         
          var check = order_table.rows[j].getElementsByTagName('input')[0];
          if (check.checked) {
            for (let k = 0; k < person_list.length; ++k) {
              var name = check.value.toLowerCase();
              // 読み仮名部分を remove
              var cnt = 0;
              for (let l = 0; l < name.length; ++l) {
                if (name[l] === '(') ++cnt;
              }
              cnt = Math.round((cnt + 1) / 2);
              for (let l = 0; l < name.length; ++l) {
                if (name[l] === '(') --cnt;
                if (cnt === 0) {
                  name = name.substr(0, l);
                  break;
                }
              }
              if (person_list[k].textContent.toLowerCase() === name) {
                exist = true;
                person_list[k].style.background = 'linear-gradient(transparent 40%, #72c0d6d5 70%)';
                // person_list[k].style.color = '#7da9dc';
              }
            }
          }
        }
        if (exist) {
          var open_btn = cell.getElementsByClassName('open_btn')[0];
          open_btn.style.backgroundColor = '#5bb5cd';
          open_btn.style.color = 'white';
        }
      }
    }
  }
};