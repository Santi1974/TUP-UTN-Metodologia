// Parte 7: Manipulación del DOM con TypeScript
import { fetchUsuariosAPI } from "./async"

// Ejercicio 11: Función para renderizar usuarios en el DOM
export function renderizarUsuarios(usuarios: any[]): void {
  const contenedor = document.getElementById("lista-usuarios")

  if (!contenedor) {
    console.error("Elemento #lista-usuarios no encontrado")
    return
  }

  let html = '<ul class="lista">'

  usuarios.forEach((usuario) => {
    html += `
      <li class="usuario-item">
        <strong>${usuario.name || usuario.nombre}</strong>
        <p>${usuario.email}</p>
      </li>
    `
  })

  html += "</ul>"
  contenedor.innerHTML = html
}

// Ejercicio 12: Configurar evento de botón
export function configurarBoton(): void {
  const boton = document.getElementById("cargar-usuarios")

  if (!boton) {
    console.error("Elemento #cargar-usuarios no encontrado")
    return
  }

  boton.addEventListener("click", async () => {
    try {
      // Mostrar mensaje de carga
      const contenedor = document.getElementById("lista-usuarios")
      if (contenedor) {
        contenedor.innerHTML = "<p>Cargando usuarios...</p>"
      }

      // Obtener usuarios de la API
      const usuarios = await fetchUsuariosAPI()

      // Renderizar usuarios
      renderizarUsuarios(usuarios)
    } catch (error) {
      console.error("Error:", error)
      const contenedor = document.getElementById("lista-usuarios")
      if (contenedor) {
        contenedor.innerHTML = "<p>Error al cargar usuarios</p>"
      }
    }
  })
}
