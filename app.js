let day = new Date(
  prompt(
    "1-Tug'ilgan oy." +
      `\n` +
      "2-Tug'ilgan kun." +
      `\n` +
      "3-Tug'ilgan yil" +
      `\n` +
      "01-01-2001 Shu tartibda kirg'izing"
  )
);
let now = Date.now();

console.log("Siz tug'ilganingizga");
console.log(
  "Yil: " + Math.round((now - day) / 1000 / 60 / 60 / 24 / 365.25) + ";"
);
console.log("Kun: " + Math.round((now - day) / 1000 / 60 / 60 / 24) + ";");
console.log("Soat: " + Math.round((now - day) / 1000 / 60 / 60) + ";");
console.log("Sekund: " + Math.round(now - day) + ";");
console.log("bo'ldi, shuncha payt nima qildingiz?");

document.write("Siz tug'ilganingizga");
document.write(
  "Yil: " + Math.round((now - day) / 1000 / 60 / 60 / 24 / 365.25) + ";   "
);
document.write(
  "Kun: " + Math.round((now - day) / 1000 / 60 / 60 / 24) + ";   "
);
document.write("Soat: " + Math.round((now - day) / 1000 / 60 / 60) + ";   ");
document.write("Sekund: " + Math.round(now - day) + ";   ");
document.write("bo'ldi, shuncha payt nima qildingiz?");
