// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let MisAmigos = [];

function agregarAmigo() {
   const inputAmigo = document.getElementById("amigo");
   const nombreAmigo = inputAmigo.value.trim();

   if (nombreAmigo === "") {
       alert("Debe ingresar un nombre...");
       return;
   }
   
   MisAmigos.push(nombreAmigo);

   limpiaLista();

   inputAmigo.value = "";
   inputAmigo.focus();  

}

function limpiaLista() {

   const listaAmigoUl =document.getElementById("listaAmigos")
   listaAmigoUl.innerHTML = "";

    MisAmigos.forEach(amigo => {
       const li =document.createElement("li");
       li.textContent = amigo;
       listaAmigoUl.appendChild(li);
    });
}
   
function sortearAmigo() {
     if (MisAmigos.length === 0) {
        alert("Debe ingresar nombres para poder sortear");
        return
     }

     const idxRandom = Math.floor(Math.random() * MisAmigos.length);
   
     const amigoSorteado = MisAmigos[idxRandom];

     const salidaUl = document.getElementById("resultado");  
     salidaUl.innerHTML = `El amigo secreto sorteado es <li>${amigoSorteado}</li>`;
 
}
   
