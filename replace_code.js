//監視する要素の指定
var element = document.getElementById('message');
 
//MutationObserver（インスタンス）の作成
var mo = new MutationObserver(function(record, observer) {
  element.value = element.value.replace("a", "b");
});
 
//監視する「もの」の指定（必ず1つ以上trueにする）
var config = {
  childList: true,//「子ノード（テキストノードも含む）」の変化
  attributes: true,//「属性」の変化
  characterData: true,//「テキストノード」の変化
};
 
//監視の開始
mo.observe(element, config);
 
//監視の終了
mo.disconnect();