// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

$(document).ready(function () {
  $("#contact-form").submit(function (form) {
    form.preventDefault();

    if (validate(form)) {
      var nieuwsbrief = "";

      if ($("#nieuwsbrief").prop("checked")) {
        nieuwsbrief = "ja";
      } else {
        nieuwsbrief = "nee";
      }

      var tabel =
        "Bedankt voor het achterlaten van je gegevens." +
        '<table class="sum-table"><tr>' +
        '<td class="sum-col1">Naam</td>' +
        '<td class="sum-col2">' +
        $("#naam").val() +
        "</td></tr>" +
        "<tr>" +
        '<td class="sum-col1">E-mailadres</td>' +
        '<td class="sum-col2">' +
        $("#mail").val() +
        "</td></tr>" +
        "<tr>" +
        '<td class="sum-col1">Geboortedatum</td>' +
        '<td class="sum-col2">' +
        $("#geboortedatum").val() +
        "</td></tr>" +
        "<tr>" +
        '<td class="sum-col1">Bericht</td>' +
        '<td class="sum-col2">' +
        $("#bericht").val() +
        "</td></tr>" +
        "<tr>" +
        '<td class="sum-col1">Nieuwsbrief ontvangen?</td>' +
        '<td class="sum-col2">' +
        nieuwsbrief +
        "</td></tr></table>";

      $("#result").append(tabel);

      $("#contact-form")[0].reset();
    }
  });
});