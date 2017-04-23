$(document).ready(function(){
  $("#book-select").click(function() {
    loadHtml("#myContainer","/BookManagerSystem/html/bookTable.html","/BookManagerSystem/css/bookTable.css","/BookManagerSystem/js/bookTable.js","");
  });
})
