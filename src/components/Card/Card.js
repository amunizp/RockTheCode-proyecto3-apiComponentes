import './Card.css'

// que necesitamos para crear elementos mediante createElement...
export const Card = (nodoPadre, url, titulo, texto) => {
  const cardHTML = document.createElement('figure')

  cardHTML.className = 'card'

  if (url) {
    const img = document.createElement('img')
    img.src = url
    cardHTML.appendChild(img)
  }
  const caption = document.createElement('figcaption')
  const title = document.createElement('h3')
  const p = document.createElement('p')

  title.textContent = titulo
  p.textContent = texto
  caption.appendChild(title)
  caption.appendChild(p)
  cardHTML.appendChild(caption)

  nodoPadre.appendChild(cardHTML)
}
