// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

var canvas = document.getElementById("img-canvas");
var con = canvas.getContext("2d");

var rendier = new Image();
rendier.src = "Afbeeldingen/rendieren.jpg";

var winter = new Image();
winter.src = "Afbeeldingen/hal-winter.jpg";

var lente = new Image();
lente.src = "Afbeeldingen/hal-lente.jpg";

var zomer = new Image();
zomer.src = "Afbeeldingen/hal-zomer.jpg";

var herfst = new Image();
herfst.src = "Afbeeldingen/hal-herfst.jpg";

function draw_rendier() {
  con.drawImage(rendier, 0, 0, 606, 400);
}

function draw_winter() {
  con.drawImage(winter, 0, 0, 606, 400);
}

function draw_lente() {
  con.drawImage(lente, 0, 0, 606, 400);
}

function draw_zomer() {
  con.drawImage(zomer, 0, 0, 606, 400);
}

function draw_herfst() {
  con.drawImage(herfst, 0, 0, 606, 400);
}

function clear_image() {
  con.clearRect(0, 0, 606, 400);
}