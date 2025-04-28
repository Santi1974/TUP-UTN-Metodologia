// Parte 5: Tipos Genéricos en TypeScript

// Ejercicio 7: Función genérica getRandomItem<T>
export function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// Ejercicio 8: Interfaz genérica Caja<T>
export interface Caja<T> {
  contenido: T
}

// Implementación de la interfaz en una clase
export class CajaClass<T> implements Caja<T> {
  contenido: T

  constructor(contenido: T) {
    this.contenido = contenido
  }

  obtenerContenido(): T {
    return this.contenido
  }
}

// Función para probar la clase genérica
export function probarCajaGenerica(): void {
  // Caja con número
  const cajaNumero = new CajaClass<number>(42)
  console.log("Contenido de caja número:", cajaNumero.obtenerContenido())

  // Caja con string
  const cajaTexto = new CajaClass<string>("Hola TypeScript")
  console.log("Contenido de caja texto:", cajaTexto.obtenerContenido())

  // Caja con objeto
  const cajaObjeto = new CajaClass<{ nombre: string; edad: number }>({
    nombre: "Juan",
    edad: 30,
  })
  console.log("Contenido de caja objeto:", cajaObjeto.obtenerContenido())

  // Caja con array
  const cajaArray = new CajaClass<string[]>(["uno", "dos", "tres"])
  console.log("Contenido de caja array:", cajaArray.obtenerContenido())
}
