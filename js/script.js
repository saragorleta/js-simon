// #1) -Creare un array che generi 5 numeri random con un alert.
//     -Verificare che non vengano emessi numeri random uguali.
// #2) -Far partire un timer di 30 secondi.
// #3) -Creare un prompt che si ripete 5 volte(ciclo for) dove l'utente deve inserire per 5 volte i numeri da indovinare.
//     -Verificare che l'utente non inserisca numeri uguali.
// #4) - Il software deve dire quanti e quali numeri l'utente ha indovinato.
//       !attenzione!inserire solo i numeri indovinati dall'utente

var numeriRandom=Math.floor(Math.random() * 100);
for (var i=0; i<5;i++){
  alert(numeriRandom);
}
console.log(numeriRandom);

//#2) -Far partire un timer di 30 secondi.
      //inseriamo i 30secondi
var secondi=setTimeout(myFunction, 30000);
function myFunction();

//#3) -Creare un prompt che si ripete 5 volte(ciclo for) 
  for(var i=0; i<5; i++){
    var inserisciNumeri=parseint(prompt(inserisci un numero));
  }
