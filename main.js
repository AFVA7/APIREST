const botonReiniciar = document.getElementById("boton-reiniciar")

const URL = ' https://api.thecatapi.com/v1/images/search'

fetch(URL)//fetch nos devuelve una promesa y las promesas las resolvemos con then
    .then(res => res.json())//res es la respuesta de la promesa, y la convertimos a un objeto js (json) y esto nos devuelve otra promesa
    .then(data => {// de nuevo hacemos callback en data que es el objeto js
        const img = document.querySelector('img')//seleccionamos el nodo img de html para manipular el dom
        img.src = data[0].url//cambiamos el src del nodo img por el url de la imagen que nos devuelve la api        
})

botonReiniciar.addEventListener('click',reiniciarJuego)
function reiniciarJuego(){
    location.reload()
}