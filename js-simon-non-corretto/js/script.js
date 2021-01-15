// #1) -Creare un array che generi 5 numeri random con un alert.
//     -Verificare che non vengano emessi numeri random uguali.
// #2) -Far partire un timer di 30 secondi.
// #3) -Creare un prompt che si ripete 5 volte(ciclo for) dove l'utente deve inserire per 5 volte i numeri da indovinare.
//     -Verificare che l'utente non inserisca numeri uguali.
// #4) - Il software deve dire quanti e quali numeri l'utente ha indovinato.
//       !attenzione!inserire solo i numeri indovinati dall'utente


var array=[];
var i=0;
while( array.length<5){
  var numeroRandom=Math.floor(Math.random() * 101);
  if (array.includes(numeroRandom)==false){
    array.push(numeroRandom);
  }
}

alert(array);

//#2) -Far partire un timer di 30 secondi.
      //inseriamo i 30secondi
// var secondi=setTimeout(myFunction, 30000);
// function myFunction();

//#3) -Creare un prompt che si ripete 5 volte(ciclo for)
//-Verificare che l'utente non inserisca numeri uguali.
  var i=0;
  while(i<5){
    var numeriInseriti=[];
    var numeroUtente=parseint(prompt('inserisci un numero tra 1 e 100'));

    if (numeroUtente<0 || numeroUtente>100){
      alert('inserisci un numero tra 1 e 100!!');
    }else if(numeriInseriti.includes(numeroUtente)){
      alert('Hai inserito lo stesso numero');
    }else{
      numeriInseriti.push(numeroUtente);
    }
    i++
  };
  // #4) - Il software deve dire quanti e quali numeri l'utente ha indovinato.
  //       !attenzione!inserire solo i numeri indovinati dall'utente

  if (array.includes(numeroUtente)){
    alert('hai indovinato'+ numeroUtente);
  }
