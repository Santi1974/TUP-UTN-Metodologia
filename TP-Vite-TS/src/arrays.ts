// Parte 4: Arrays y Métodos de Arrays
import type { Producto } from "./interfaces"

// Ejercicio 5: Crear y manipular array de productos
export function trabajarConArrays(): void {
  const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, stock: 15 },
    { id: 3, nombre: "Tablet", precio: 500, stock: 0 },
    { id: 4, nombre: "Auriculares", precio: 100, stock: 20 },
    { id: 5, nombre: "Monitor", precio: 300, stock: 5 },
  ]

  // Usar map() para mostrar solo los nombres
  const nombresProductos = productos.map((producto) => producto.nombre)
  console.log("Nombres de productos:", nombresProductos)

  // Usar filter() para obtener productos con stock > 0
  const productosDisponibles = productos.filter((producto) => producto.stock > 0)
  console.log("Productos disponibles:", productosDisponibles)
}

// Ejercicio 6: Ordenar y modificar array de productos
export function ordenarYModificarProductos(): void {
  const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, stock: 15 },
    { id: 3, nombre: "Tablet", precio: 500, stock: 0 },
    { id: 4, nombre: "Auriculares", precio: 100, stock: 20 },
    { id: 5, nombre: "Monitor", precio: 300, stock: 5 },
  ]

  // Ordenar productos de menor a mayor precio
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio)
  console.log("Productos ordenados por precio:", productosOrdenados)

  // Agregar un nuevo producto con push()
  const nuevoProducto: Producto = { id: 6, nombre: "Teclado", precio: 80, stock: 30 }
  productos.push(nuevoProducto)
  console.log("Productos después de agregar uno nuevo:", productos)

  // Eliminar el último producto con pop()
  const productoEliminado = productos.pop()
  console.log("Producto eliminado:", productoEliminado)
  console.log("Productos después de eliminar el último:", productos)
}
