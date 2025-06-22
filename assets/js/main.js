console.log("Hello");
//Selezioniamo element ul della DOM
const ulEl = document.getElementById("email")
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
// Attraverso il ciclo for ripeto la funzione usata per generare email random
for (let i = 0; i < 10; i++) { // il ciclo è impostato per essere iterato 10 volte

    fetch(endpoint) //funzione che riceve dati email random
        .then(response => response.json())
        .then(data => {
            console.log(data); //Stampo in console le email ricevute
    //Creiamo un nuovo elemento li per ciascuna email
        const liEl = document.createElement("li");
        liEl.append(data.response);
        ulEl.appendChild(liEl); //Aggiungiamo liEl appena creato all'interno del nodo ulEl del DOM
    })
}
