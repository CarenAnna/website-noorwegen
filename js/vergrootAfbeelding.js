// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

$(document).ready(function(){ 
    $('.zoom').hover(function(){
        $(this).css({width:"850px"});
    },
    function(){
        $(this).css({width:"600px"});   
    });
});