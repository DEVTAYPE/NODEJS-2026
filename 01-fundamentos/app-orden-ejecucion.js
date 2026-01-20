// EJEMPLO DE ORDEN DE EJECUCIÓN EN JAVASCRIPT

// PRIMER LOG
console.log("Inicio de programa");

// Segun pensamiento, uno diria que esto va ser el segundo log
setTimeout(() => {
  console.log("Primer Timeout");
}, 3000);

// Pero en realidad, los timeouts con 0ms se ejecutan antes que los timeout con 3000ms
setTimeout(() => {
  console.log("Segundo Timeout");
}, 1);
// }, 0);

// ULTIMO LOG
setTimeout(() => {
  console.log("Tercer Timeout");
}, 0);

// Fin de log
console.log("Fin de programa");
