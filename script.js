// Ev taski:

// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
let ad = prompt("Ad daxil edin: ");
console.log(ad.length);

// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
let word = prompt("Bir soz daxil edin: ");
let symbol = prompt("Bir simvol daxil edin: ");
console.log(word.includes(symbol));

// // 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
console.log(word.startsWith(symbol));

// // 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
console.log(word.endsWith(symbol));

// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
console.log(word.indexOf(symbol));

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
if (word == word.toUpperCase()) {
  console.log("True");
} 
else {
  console.log("False");
}
