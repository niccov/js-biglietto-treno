/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

___________________________________________________________________

-chiedere all'utente di inserire il numero di chilometri che vuole percorrere
-memorizzare il numero di chilometri
-chiedere all'utente di inserire la sua età
-memorizzare l'età dell'utente
-creare una variabile e memorizzarla dove si applica il calcolo dei chilometri inseriti per la tassa fissa al chilometro (0,21 / km)
-creare una variabile costante e memorizzarla dove si applica lo sconto per i minorenni
-creare una variabile costante e memorizzarla dove si applica lo sconto per gli over 65
? SE l'età inserita è minore di 18
   .scrivi in console la variabile dello sconto per i minorenni 
:? ALTRIMENTI SE l'età inserita è maggioner o uguale a 65
   .scrivi in console la variabile dello sconto per gli anziani
: ALTRIMENTI 
   .scrivi in console la variabile senza sconti (totPrezzoKm)   
*/

let km = prompt("Inserisci il numero di kilometri che vuoi percorrere");

let età = prompt("Inserisci la tua età");

let totPrezzoKm = km * 0.21;

const prezzoScontatoMinorenni = (totPrezzoKm - ((totPrezzoKm / 100) * 20)).toFixed(2);

const prezzoScontatoAnziani = (totPrezzoKm - ((totPrezzoKm / 100) * 40)).toFixed(2);

if(età < 18) {
    console.log("Il prezzo del biglietto del treno è " + prezzoScontatoMinorenni + "€");
    document.writeln("Il prezzo del biglietto del treno è " + prezzoScontatoMinorenni + "€");
} else if(età >= 65) {
    console.log("Il prezzo del biglietto del treno è " + prezzoScontatoAnziani + "€");
    document.writeln("Il prezzo del biglietto del treno è " + prezzoScontatoMinorenni + "€");
} else {
    console.log("Il prezzo del biglietto del treno è " + totPrezzoKm + "€");
    document.writeln("Il prezzo del biglietto del treno è " + totPrezzoKm + "€");
}
