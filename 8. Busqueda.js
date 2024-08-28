// Creamos un array de nombres
let nombres = ["Juan", "Maria", "Pedro"];

// Nombre que queremos buscar
let nombreABuscar = "Pedro";

// Verificar si el nombre esta en el array
if (nombres.includes(nombreABuscar)) {
    console.log("El nombre '" + nombreABuscar + "' existe en el array");
} else {
    console.log("El nombre '" + nombreABuscar + "' no existe en el array");
}

// La salida en consola es: El nombre 'Pedro' existe en el array