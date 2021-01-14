// #1) -Creare un array che generi 5 numeri random con un alert.
//     -Verificare che non vengano emessi numeri random uguali.
// #2) -Far partire un timer di 30 secondi.
// #3) -Creare un prompt che si ripete 5 volte(ciclo for) dove l'utente deve inserire per 5 volte i numeri da indovinare.
//     -Verificare che l'utente non inserisca numeri uguali.
// #4) - Il software deve dire quanti e quali numeri l'utente ha indovinato.
//       !attenzione!inserire solo i numeri indovinati dall'utente


var array=[];
var i=0;
while( numeriRandom<5;){
  var numeriRandom=Math.floor(Math.random() * 101);
  i++;
}
if (numeriRandom.includes(array){
    array.push(numeriRandom);
}
alert(numeriRandom);

//#2) -Far partire un timer di 30 secondi.
      //inseriamo i 30secondi
var secondi=setTimeout(myFunction, 30000);
function myFunction();

//#3) -Creare un prompt che si ripete 5 volte(ciclo for)
//-Verificare che l'utente non inserisca numeri uguali.
  var i=0;
  while(i<5;){
    var vuoto:[];
    var numeriUtente=parseint(prompt(inserisci un numero tra 1 e 99));

    if (numeriUtente<0 || numeriUtente>99){
      alert('inserisci un numero tra 1 e 99!!');
    }else (numeriUtente==vuoto)){
    alert('Hai inserito lo stesso numero');
    i++
  };
