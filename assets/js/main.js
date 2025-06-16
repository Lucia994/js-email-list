console.log("Hello");

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
//Generare array per conservare le email random realizzate 
let emailList = [];
// Attraverso il ciclo for ripeto la funzione usata per generare email random
for (let i = 0; i < 10; i++)   // il ciclo è impostato per essere iterato 10 volte

    fetch(endpoint) //funzione che genera email random
        .then(response => response.json())
        .then(data => {
            console.log(data); //Stampo in console la prima email realizzata






        })