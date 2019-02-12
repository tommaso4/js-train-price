var chilometri = prompt("quanti km devi fare?");

var eta = prompt("quanti anni hai?");

var prezzokm = chilometri * 0.21 ;

if (eta < 18) {
  prezzokm = prezzokm - (prezzokm * 0.2);
}

if (eta > 65) {
  prezzokm = prezzokm - (prezzokm * 0.4);
}

alert("il tuo prezzo è :"+ prezzokm + "€");









//
//
// if (numero > 50) {
//   if (numero < 70) {
//     alert("vero");
//   }
//   else {
//     alert("falso");
//   }
// }
// else {
//   alert("falso");
// }
