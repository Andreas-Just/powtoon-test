$(function() {

});

//  jQuery с использованием <div>
$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});
