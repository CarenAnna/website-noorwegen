// Caren Groenhuijzen
// NOVI Hogeschool - Webontwikkeling
// 30-04-2020

function validate() {
  var naam = document.form.user_naam.value;
  var mail = document.form.user_mail.value;
  var datum = document.form.user_datum.value;
  var letters = /^[A-Za-z ]+$/;
  var positiea = mail.indexOf("@");
  var positiepunt = mail.lastIndexOf(".");

  if (naam == null || naam == "") {
    alert("Vul je naam in.");
    return false;
  }
  if (!naam.match(letters)) {
    alert("Gebruik alleen letters voor je naam.");
    return false;
  }
  if (naam.length < 4 || !/\s/.test(naam)) {
    alert("Vul je voor en achternaam in met een spatie ertussen.");
    return false;
  }
  if (mail == null || mail == "") {
    alert("Vul je emailadres in.");
    return false;
  }
  if (
    positiea < 1 ||
    positiepunt < positiea + 2 ||
    positiepunt + 2 >= mail.length
  ) {
    alert("Ongeldig e-mailadres, probeer het opnieuw.");
    return false;
  }
  if (!controleerDatum(datum)) {
    alert("Vul een geldige geboortedatum in: dd-mm-jjjj. Het jaartal moet liggen tussen 1900 en 2015.");
    return false;
  }
  
  return true;
}

function controleerDatum(datum) {
  var datumdeel = datum.split("-");
  var dag = parseInt(datumdeel[0], 10);
  var maand = parseInt(datumdeel[1], 10);
  var jaar = parseInt(datumdeel[2], 10);
  var maandlengte = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (!/^\d{2}\-\d{2}\-\d{4}$/.test(datum)) return false;
  
  if (jaar < 1900 || jaar > 2015 || maand == 0 || maand > 12) return false;

  return dag > 0 && dag <= maandlengte[maand - 1];
}