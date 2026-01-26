console.log(process);

/* 
Process da acceso a información y funcionalidades del entorno donde se está ejecutando Node.js
Algunas propiedades útiles:
- process.argv: Arreglo que contiene los argumentos pasados al iniciar el proceso de Node.js
- process.env: Objeto que contiene las variables de entorno
- process.cwd(): Función que devuelve el directorio de trabajo actual
- process.exit(): Función para terminar el proceso de Node.js 
*/

const { SHELL } = process.env;
// console.log("SHELL:", SHELL);

const characters = ["flash", "Superman", "Batman", "Mujer Maravilla"];

const [first, second, ...rest] = characters;

// console.log({ first, second, rest });
