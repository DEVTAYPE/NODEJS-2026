// PAQUETES POR DEFECTO (fs)
const fs = require("fs");

// Leer el contenido de un archivo de texto de forma síncrona
// Codigo bloqueante
console.log("==== INICIANDO LECTURA DE ARCHIVO ====");
const content = fs.readFileSync("README.md", "utf-8");

// CONTEO PALABRAS
console.log("==== CONTENIDO DEL ARCHIVO ====");
const wordCount = content.split(/\s+/);

console.log(`El archivo tiene ${wordCount.length} palabras.`);
console.log("==== FIN DE LECTURA DE ARCHIVO ====");

// conteo de palabras especificas

const getSpecificWordCount = (text, word) => {
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  const matches = text.match(regex) ?? [];
  return matches ? matches.length : 0;
};

const specificWord = "React";
const specificWordCount = getSpecificWordCount(content, specificWord);
console.log(
  `La palabra "${specificWord}" aparece ${specificWordCount} veces en el archivo.`,
);
