import './pintarSugerencias.css'
import { ourButton } from '../OurButton/OurButton'
//import { search } from 'unsplash-js/dist/internals'
export const pintaSugerencias = (nodoProgenitor) => {
  console.log('pintando sugerencias')
  var boton1,
    boton2,
    boton3 = ''
  boton1 = ourButton('gato', 'blue', 'search', nodoProgenitor)
  boton2 = ourButton('perro', 'blue', 'search', nodoProgenitor)
  boton3 = ourButton('rueda', 'blue', 'search', nodoProgenitor)
  console.log(boton1)
  const title = document.createElement('h3')
  title.textContent = 'No encontre lo que buscabas, aqui hay sugerencias'
  nodoProgenitor.appendChild(title)
  nodoProgenitor.appendChild(boton1)
  nodoProgenitor.appendChild(boton2)
  nodoProgenitor.appendChild(boton3)
  //nodoPadre.innerHTML = boton1
}
