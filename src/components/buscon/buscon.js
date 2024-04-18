import './buscon.css'

// console.log('Estoy en buscon')

export const Buscon = ({
  placeholder = `rueda`,
  texto = 'Busca',
  type = 'search',
  id = 'mySearch',
  name = 'busqueda',
  size = '30'
}) => {
  return `<form>
  <div>
    <input
      type="${type}"
      id="${id}"
      name="${name}"
      placeholder="${placeholder}",
      size="${size}" ,
      method="post"/>
    <button id="search">${texto}</button>
  </div>
</form>
`
}
