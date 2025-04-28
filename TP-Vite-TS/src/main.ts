import "./style.css"
import type { Usuario } from "./interfaces"
import { UsuarioClass, AdminUsuario } from "./classes"
import { trabajarConArrays, ordenarYModificarProductos } from "./arrays"
import { getRandomItem, probarCajaGenerica } from "./generics"
import { obtenerDatos, fetchUsuariosAPI } from "./async"
import { configurarBoton } from "./dom"

// Parte 2: Interfaces y Types - Ejercicio 2
const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", edad: 28, email: "ana@example.com", activo: true },
  { id: 2, nombre: "Carlos", edad: 35, email: "carlos@example.com", activo: false },
  { id: 3, nombre: "Elena", edad: 24, email: "elena@example.com", activo: true },
]

const usuariosActivos = usuarios.filter((usuario) => usuario.activo)
console.log("Usuarios activos:", usuariosActivos)

// Parte 3: Clases y Objetos - Ejercicio 3
const usuario1 = new UsuarioClass(4, "Miguel", 30, "miguel@example.com", true)
const usuario2 = new UsuarioClass(5, "Laura", 27, "laura@example.com", false)

console.log("Usuario 1:", usuario1)
console.log("Usuario 2:", usuario2)

usuario1.toggleActivo()
console.log("Usuario 1 después de toggle:", usuario1)

// Parte 3: Clases y Objetos - Ejercicio 4
const admin = new AdminUsuario(6, "Admin", 40, "admin@example.com", true, ["crear", "editar", "eliminar"])
console.log("Admin:", admin)

// Parte 4: Arrays y Métodos de Arrays
trabajarConArrays()
ordenarYModificarProductos()

// Parte 5: Tipos Genéricos
const numeros = [1, 2, 3, 4, 5]
const palabras = ["hola", "mundo", "typescript", "vite"]

console.log("Item aleatorio de números:", getRandomItem(numeros))
console.log("Item aleatorio de palabras:", getRandomItem(palabras))
console.log("Item aleatorio de usuarios:", getRandomItem(usuarios))

probarCajaGenerica()

// Parte 6: Promesas y Asincronía
async function iniciarAsync() {
  try {
    const datos = await obtenerDatos()
    console.log("Datos obtenidos:", datos)

    const usuariosAPI = await fetchUsuariosAPI()
    console.log("Usuarios de API:", usuariosAPI)
  } catch (error) {
    console.error("Error:", error)
  }
}

iniciarAsync()

// Parte 7: Manipulación del DOM
document.addEventListener("DOMContentLoaded", () => {
  configurarBoton()
})
