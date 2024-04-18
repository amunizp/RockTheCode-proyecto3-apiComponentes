import './OurButton.css'
//import { pintaSugerencias } from '../pintarSugerencias/pintarSugerencias'
import { pintarBusqueda } from '../pintarBusqueda/pintarBusqueda'

export const ourButton = (texto, bgColor, clase = '', nodoProgenitor) => {
  const myBotton = document.createElement('button')
  myBotton.textContent = texto
  myBotton.style.backgroundColor = bgColor
  myBotton.className = `ourButton ${clase}`
  myBotton.addEventListener('click', (evento) => {
    //console.log(` you pressed this ${evento.key}`)
    evento.preventDefault()
    const palabraClave = myBotton.textContent
    pintarBusqueda(palabraClave, nodoProgenitor)
    console.log(palabraClave, nodoProgenitor)
    //let value = e.target.value
  })
  return myBotton
  //return `<button style="background-color: ${bgColor}" class="ourButton ${clase}">${texto}</button>`
}
