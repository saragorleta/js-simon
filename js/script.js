var numeriCasuali=[];
var numeriUtente=[];
// #1) -Creare un array che generi 5 numeri random con un alert.
while(numeriCasuali.length<5){
  var numero=(10,100); // -Verificare che non vengano emessi numeri random uguali.
  if (!numeriCasuali.includes(numero)){
    numeriCasuali.push(numero);
  }
}
//popoliamo l'array dei numeri casuali - opzione funzione fatta da noi
while (numeriCasuali.length<5){
  var numero=(10,100);
  if ricerca(numeriCasuali,numero)){
    numeriCasuali.push(numero);
 }
}
console.log(numeriCasuali);

setTimeout(inserimento, 30000);
// function myFunction();

// FUNZIONI
function generaRandom(min,max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}
    // if (numeriCasuali.includes(numero)){
    //   numeriCasuali.push(numero);         questa parte la possiamo trasformare in funzione , quindi senza utilizzare .includes
    // alert(numeriCasuali);
function ricerca(array,elemento){
  for(var i=0; i<array.length;i++){     //abbiamo utilizzato il ciclo for
    if(elemento==array[i]){  //questo è un confronto per capire se elemento è pr
      return true;
    }
  }
  return false;
}
// function ricerca(array,elemento){
//   var i=0;
//   while(array.length<5;){
//     if(elemento==array[i]){           //stessa funzione ma il ciclo while
//       return true;
//     }
//   }
//   i++;
// }
function inserimento(){
  for(var i=0; i<5;i++){
    var n=parseInt(prompt('inserisci un numero'));
    if(ricerca(numeriCasuali,n)){
      numeriUtente.push(n);
    }
  }console.log(numeriUtente);
}
