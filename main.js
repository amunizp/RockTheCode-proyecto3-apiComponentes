// TODO Layout
// El layout de la aplicación web puede ser una replica de la original, parecida al ejemplo o incluso un rebranding original por vuestra parte:
//Tecnologias
//Todo tiene que estar creado con VITE, usando estilos modulares y componentizando cada una de las partes de la aplicación.
// API
// Unsplash tiene un cliente para JavaScript oficial que nos permitirá, enviándole nuestra API_KEY realizar hasta 50 peticiones diarias.
// https://unsplash.com/developers
// Para utilizarlo instalaremos unsplash-js como dependencia:
// npm i unsplash-js
// TODO Funcionamiento
// Esta aplicación nos debe permitir buscar los resultados introducidos en el input y reflejar las imágenes correspondientes mediante la API.
// Si no se encuentran resultados en la búsqueda deberá informarse con un mensaje y aportar 3 botones de búsquedas sugeridas para que el usuario haga click en uno y el contenido de ese botón se ponga en el input y se realice la petición
// Toda funcionalidad adicional a la básica sera valorable.

import './style.css'
import { Buscon } from './src/components/buscon/buscon'
import { pintarBusqueda } from './src/components/pintarBusqueda/pintarBusqueda'
var palabraClave = 'chorizo'
//pintamos el formulario de busqueda
const divForm = document.querySelector('#buscon')
divForm.innerHTML = `${Buscon(palabraClave)}`
//pintamos el efecto
const divApp = document.querySelector('#app')
pintarBusqueda(palabraClave, divApp)

//puedes buscar al darle enter....
const elemForm = document.querySelector('#mySearch')
elemForm.addEventListener('keydown', (evento) => {
  if (evento.key == 'Enter') {
    evento.preventDefault()
    palabraClave = elemForm.value
    pintarBusqueda(palabraClave, divApp)
    console.log(palabraClave)
  }
})
//o darle al boton.
const elemFormButton = document.querySelector('button#search')
elemFormButton.addEventListener('click', (evento) => {
  //console.log(` you pressed this ${evento.key}`)
  evento.preventDefault()
  palabraClave = elemForm.value
  pintarBusqueda(palabraClave, divApp)
  console.log(palabraClave)
  //let value = e.target.value
})
const elemLogo = document.querySelector('a#logo')
elemLogo.addEventListener('click', (evento) => {
  palabraClave = 'chorizo'
  pintarBusqueda(palabraClave, divApp)
  console.log('toque logo y envie busqueda de ' + palabraClave)
})
