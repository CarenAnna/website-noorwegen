// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

$(document).ready(function(){
    $("#open").on("click", function() {
      $(".galerij").css("visibility", "visible")
      $("#open").css("display", "none")
      return false;
    });

    $("#sluit").on("click", function() {
      $(".galerij").css("visibility", "hidden")
      $("#open").css("display", "inline")
      $(window).scrollTop(1000);
      return false
    });
});