// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

$(document).ready(function(){
  $("#hide").on("click", function() {
    $(".hide").hide(true);
    $(".grid-container").css("grid-template-columns", "90px 1fr 1fr 1fr 1fr");
    $("#show").css("visibility", "visible")
    $("#hide").css("visibility", "hidden")
    return false;
  });

  $("#show").on("click", function() {
    $(".hide").show(true);
    $(".grid-container").css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr");
    $("#show").css("visibility", "hidden")
    $("#hide").css("visibility", "visible")
    return false;
  });
});