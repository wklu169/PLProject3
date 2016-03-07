$(document).ready (function() {
  $("#jdom a").click(function() {
      $(this).prev().toggleClass("hide");
      if ($(this).prev().attr("class") != "hide") {
          $(this).prev().hide;
          $(this).text("Show less");
      }
      else {
          $(this).prev().show;
          $(this).text("Show more");
      }
   });
});