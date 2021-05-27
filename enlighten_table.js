const consoleTest = (select) => {
  // consoleTest関数を作成し引数の値を確認する
  console.log(select);
};

(function(document) {
  'use strict';

  var LightTableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, function(tr) {
            Arr.forEach.call(tr.cells, _filter);
          });
        });
      });
    }
    function _filter(cell) {
      var val = _input.value.toLowerCase();
      var popup_content = cell.getElementsByClassName('popup_content');
      var person_list = popup_content.length === 0 ? new Array() : popup_content[0].getElementsByClassName('person_name');
      cell.style.backgroundColor = 'white';
      for (var i = 0; i < person_list.length; ++i) {
        person_list[i].style.backgroundColor = 'white';
      }
      if (val !== '') {
        for (var i = 0; i < person_list.length; ++i) {
          if (person_list[i].textContent.toLowerCase().indexOf(val) !== -1) {
            cell.style.backgroundColor = 'blue';
            person_list[i].style.backgroundColor = 'blue';
          }
        }
      }
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