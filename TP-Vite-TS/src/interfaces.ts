// Definición de interfaz Usuario
export interface Usuario {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean
}

// Definición de type UsuarioType
export type UsuarioType = {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean
}

/* 
  Diferencia entre interfaces y types en TypeScript:
  
  1. Interfaces:
     - Están diseñadas principalmente para definir contratos para clases.
     - Se pueden extender mediante la palabra clave 'extends'.
     - Se pueden declarar múltiples veces y se fusionarán (declaration merging).
     - Son más flexibles para la extensión de tipos.
  
  2. Types:
     - Son más versátiles y pueden representar cualquier tipo, no solo objetos.
     - Pueden usar uniones, intersecciones y otros tipos avanzados más fácilmente.
     - No se pueden redeclarar ni fusionar.
     - Son más adecuados para tipos de unión, tipos condicionales y tipos utilitarios.
  
  En general, se recomienda usar interfaces para API públicas y cuando se necesita
  extender tipos, y usar types para uniones, tuplas y tipos que no necesitan ser extendidos.
*/

// Definición de interfaz para productos
export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}
