// Parte 6: Promesas y Asincronía
import type { Usuario } from "./interfaces"

// Ejercicio 9: Función que simula una API con setTimeout
export function obtenerDatos(): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", precio: 300 },
      ]
      resolve(datos)
    }, 3000)
  })
}

// Ejercicio 10: Llamar a una API pública usando fetch
export async function fetchUsuariosAPI(): Promise<Usuario[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error al obtener usuarios:", error)
    throw error
  }
}
