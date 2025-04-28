// Parte 3: Clases y Objetos
import type { Usuario } from "./interfaces"

// Ejercicio 3: Implementación de la clase UsuarioClass
export class UsuarioClass implements Usuario {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean

  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
    this.id = id
    this.nombre = nombre
    this.edad = edad
    this.email = email
    this.activo = activo
  }

  toggleActivo(): void {
    this.activo = !this.activo
  }
}

// Ejercicio 4: Extensión de la clase UsuarioClass
export class AdminUsuario extends UsuarioClass {
  permisos: string[]

  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
    super(id, nombre, edad, email, activo)
    this.permisos = permisos
  }
}
