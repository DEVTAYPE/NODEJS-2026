/* 
EVENT LOOP (DEFINICIÓN, FUNCIONAMIENTO, REGLAS, EJEMPLOS, PREGUNTAS FRECUENTES)

DEFINICION:
El Event Loop es un mecanismo fundamental en JavaScript que permite la ejecución de código asíncrono. Su función principal es gestionar la cola de tareas y asegurar que el código se ejecute de manera no bloqueante, permitiendo que las operaciones asíncronas (como llamadas a APIs, temporizadores, etc.) se manejen eficientemente.

FUNCIONAMIENTO:
1. Call Stack: Es una pila donde se almacenan las funciones que se están ejecutando. Cuando una función se llama, se agrega a la pila y cuando termina, se elimina.
2. Web APIs: Son APIs proporcionadas por el entorno (navegador o Node.js) que permiten realizar operaciones asíncronas como setTimeout, fetch, etc.
3. Callback Queue: Es una cola donde se almacenan las funciones callback que están listas para ser ejecutadas una vez que el Call Stack esté vacío.
4. Event Loop: Es un proceso que verifica continuamente si el Call Stack está vacío. Si lo está, toma la primera función de la Callback Queue y la coloca en el Call Stack para su ejecución.

REGLAS:
- El Call Stack sigue el principio LIFO (Last In, First Out).
- Las tareas asíncronas se manejan fuera del Call Stack mediante Web APIs.
- El Event Loop asegura que las tareas en la Callback Queue se ejecuten solo cuando el Call Stack esté vacío.
- Las Promesas tienen su propia cola llamada Microtask Queue, que tiene prioridad sobre la Callback Queue.

EJEMPLOS:
1. setTimeout:
console.log('Inicio');
setTimeout(() => {
  console.log('Timeout ejecutado');
}, 0);
console.log('Fin');
// Salida:
// Inicio
// Fin
// Timeout ejecutado

2. Promesas:
console.log('Inicio');
Promise.resolve().then(() => {
  console.log('Promesa resuelta');
});
console.log('Fin');
// Salida:
// Inicio
// Fin
// Promesa resuelta

PREGUNTAS FRECUENTES:
1. ¿Por qué el Event Loop es importante en JavaScript?
   El Event Loop es crucial porque permite que JavaScript maneje operaciones asíncronas sin bloquear el hilo principal, mejorando la eficiencia y la experiencia del usuario.

2. ¿Cuál es la diferencia entre la Callback Queue y la Microtask Queue?
   La Callback Queue contiene tareas asíncronas como setTimeout, mientras que la Microtask Queue contiene tareas de mayor prioridad como las resoluciones de Promesas. Las tareas en la Microtask Queue se ejecutan antes que las de la Callback Queue.

3. ¿Cómo afecta el Event Loop al rendimiento de una aplicación web?
   Un buen manejo del Event Loop puede mejorar significativamente el rendimiento de una aplicación web, ya que permite que las operaciones asíncronas se realicen sin bloquear la interfaz de usuario, manteniendo la aplicación receptiva.
*/
