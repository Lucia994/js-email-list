console.log("Hello");

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
//Generare array per conservare le email random realizzate 
let emailList = [];
// Attraverso il ciclo for ripeto la funzione usata per generare email random
for (let i = 0; i < 10; i++)   // il ciclo è impostato per essere iterato 10 volte

    fetch(endpoint) //funzione che genera email random
        .then(response => response.json())
        .then(data => {
            // console.log(data); //Stampo in console le email realizzate

            emailList.push(data); //Inserisco le email create nell'array emailList 

            // console.log(emailList); //Verifico se le email cono state inserite correttamente //Vengono stampate dieci array ciascucna con dieci elementi all'interno

            if (emailList.length === 10){ //Inseriamo condizione per limitare gli array 
                console.log(emailList)
            }

        })