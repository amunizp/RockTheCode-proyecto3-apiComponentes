import { api } from '../../data/process' //esto esta en git ignore, lo doy aparte
import { Card } from '../Card/Card'
import { pintaSugerencias } from '../pintarSugerencias/pintarSugerencias'
export const pintarBusqueda = (palabraClave = 'gatos', divApp) => {
  var listFotos = []
  divApp.innerHTML = ''
  const mySearch = document.querySelector('#mySearch')
  console.log('estoy repintando my search ' + mySearch)
  mySearch.placeholder = palabraClave

  api.search
    .getPhotos({ query: palabraClave, orientation: 'landscape' })
    .then((result) => {
      // console.log(result.response.results)
      listFotos = result.response.results
      if (listFotos === undefined || !listFotos.length) {
        // console.log(pintaSugerencias())
        pintaSugerencias(divApp)
      } else {
        listFotos.forEach((element) => {
          // console.log(element.user.username)
          Card(
            divApp,
            element.urls.thumb,
            'Unsplash user name: ' + element.user.username,
            element.alt_description + '. Falta enlace a fotografo' //deberia estar enlazado para cumplir guidelines
          )
        })
      }
    })
    .catch((err) => {
      console.log('Algo va mal!')
      console.log(err.name, err.message)
      if (err.message === 'result.response is undefined') {
        console.log('te pille')
        pintaSugerencias(divApp)
      }
    })
}
