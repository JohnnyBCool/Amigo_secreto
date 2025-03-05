// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
let numeroAmigo=0;
let amigoSecreto='';
const lista = document.getElementById('listaAmigos');
const listaSorteo = document.getElementById('resultado');

function agregarAmigo(){
let nombreInput = document.getElementById("amigo");
const nombre=nombreInput.value.trim();

if(nombre != '' && nombre != null){
    amigos.push(nombre);

    lista.innerHTML='';
    
    nombreInput.value='';
    
    for(let i=0;i<=numeroAmigo;i++){
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent=amigos[i];
        lista.appendChild(nuevoAmigo);
        console.log(i);
        console.log(amigos[i]);
    }
    numeroAmigo++;

}else{
    alert("Por favor ingresa un nombre válido");
}

}

function sortearAmigo(){

    if(amigos.length !== 0){

    randNumber=Math.floor(Math.random()*(numeroAmigo));
    amigoSecreto=amigos[randNumber];
    console.log(randNumber);
    console.log(amigoSecreto);
    lista.innerHTML='';

    listaSorteo.innerHTML="El amigo sorteado es: "+ amigoSecreto;
    
    }else{
        alert('El arreglo está vacío');
    }
    //limpiaLista();
}

function limpiaLista(){
    for(let j=0;j<=numeroAmigo-1;j++){
        amigos[j]='';
    }
    numeroAmigo=0;
}