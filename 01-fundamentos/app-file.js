// PAQUETES POR DEFECTO (fs)
const fs = require("fs");

// Leer el contenido de un archivo de texto de forma síncrona
// Codigo bloqueante
console.log("==== INICIANDO LECTURA DE ARCHIVO ====");
const data = fs.readFileSync("README.md", "utf-8");
console.log("==== CONTENIDO DEL ARCHIVO ====");

// data es todo el contenido del archivo
console.log(data);
console.log("==== FIN DE LECTURA DE ARCHIVO ====");

// Reemplazar todas las apariciones de "React" por "Angular" (sin importar mayúsculas/minúsculas)
// tipo de dato de data --> string
const newData = data.replace(/React/gi, "Angular");
// Escribir el nuevo contenido en un archivo diferente
fs.writeFileSync("README-ANGULAR.md", newData);
console.log("==== ARCHIVO MODIFICADO CREADO ====");
