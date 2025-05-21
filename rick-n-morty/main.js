// Variables globales
let allCharacters = []
let currentPage = 1
let totalPages = 0
const API_URL = "https://rickandmortyapi.com/api/character/"

// Elementos del DOM
const characterListElement = document.getElementById("character-list")
const searchInputElement = document.getElementById("search-input")
const loadingElement = document.getElementById("loading")
const errorMessageElement = document.getElementById("error-message")
const paginationElement = document.getElementById("pagination")

// Función para obtener los personajes de la API
async function fetchCharacters(page = 1, name = "") {
  try {
    loadingElement.style.display = "block"
    errorMessageElement.style.display = "none"
    characterListElement.innerHTML = ""

    let url = `${API_URL}?page=${page}`
    if (name) {
      url += `&name=${encodeURIComponent(name)}`
    }

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("No se encontraron personajes con ese nombre")
    }

    const data = await response.json()
    allCharacters = data.results
    totalPages = data.info.pages

    displayCharacters(allCharacters)
    createPagination(data.info)

    loadingElement.style.display = "none"
  } catch (error) {
    loadingElement.style.display = "none"
    errorMessageElement.style.display = "block"
    errorMessageElement.textContent = error.message
    paginationElement.innerHTML = ""
  }
}

// Función para mostrar los personajes en la página
function displayCharacters(characters) {
  characterListElement.innerHTML = ""

  if (characters.length === 0) {
    errorMessageElement.style.display = "block"
    errorMessageElement.textContent = "No se encontraron personajes"
    return
  }

  characters.forEach((character) => {
    const characterCard = document.createElement("div")
    characterCard.className = "character-card"

    // Determinar la clase para el estado
    let statusClass = ""
    switch (character.status.toLowerCase()) {
      case "alive":
        statusClass = "status-alive"
        break
      case "dead":
        statusClass = "status-dead"
        break
      default:
        statusClass = "status-unknown"
    }

    characterCard.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-image">
      <div class="character-info">
        <h2 class="character-name">${character.name}</h2>
        <p class="character-species">Especie: ${character.species}</p>
        <p>Origen: ${character.origin.name}</p>
        <span class="character-status ${statusClass}">
          ${character.status}
        </span>
      </div>
    `

    characterListElement.appendChild(characterCard)
  })
}

// Función para crear la paginación
function createPagination(info) {
  paginationElement.innerHTML = ""

  if (!info || !info.pages) return

  // Botón anterior
  const prevButton = document.createElement("button")
  prevButton.className = "pagination-button"
  prevButton.textContent = "Anterior"
  prevButton.disabled = currentPage === 1
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      fetchCharacters(currentPage, searchInputElement.value)
    }
  })

  // Información de página
  const pageInfo = document.createElement("div")
  pageInfo.className = "pagination-info"
  pageInfo.textContent = `Página ${currentPage} de ${info.pages}`

  // Botón siguiente
  const nextButton = document.createElement("button")
  nextButton.className = "pagination-button"
  nextButton.textContent = "Siguiente"
  nextButton.disabled = currentPage === info.pages
  nextButton.addEventListener("click", () => {
    if (currentPage < info.pages) {
      currentPage++
      fetchCharacters(currentPage, searchInputElement.value)
    }
  })

  paginationElement.appendChild(prevButton)
  paginationElement.appendChild(pageInfo)
  paginationElement.appendChild(nextButton)
}

// Evento para la búsqueda en tiempo real
searchInputElement.addEventListener(
  "input",
  debounce(function () {
    currentPage = 1
    fetchCharacters(currentPage, this.value)
  }, 300),
)

// Función debounce para evitar múltiples llamadas a la API
function debounce(func, delay) {
  let timeout
  return function () {
    
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  fetchCharacters()
})
