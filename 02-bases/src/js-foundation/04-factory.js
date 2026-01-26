// Una factory function es mas que nada una funcion que retorna un objeto
// const { v4: uuidv4 } = require("uuid");
// const getAge = require("get-age");

// const { getUUID, getAge } = require("../plugins");

// EJEMPLO BASICO BASICO
// const buildPerson = ({ name, birthdate }) => {
/* 
  PROBLEMAS AQUI:

  Deuda tecnica, donde usamos uuidv4
  y getAge dentro de la factory function, lo cual hace que
  cada vez que queramos testear o usar
  esta funcion, tengamos que lidiar con
  esas dependencias.
  */
//   return {
//     id: uuidv4(),
//     name: name,
//     birthdate: birthdate,
//     age: getAge(birthdate),
//   };
// };

// const juan = buildPerson({ name: "Juan", birthdate: "1990-01-01" });
// const maria = buildPerson({ name: "Maria", birthdate: "1985-05-15" });

// console.log(juan);
// console.log(maria);

// const buildPersonAdapter = ({ name, birthdate }) => {
//   return {
//     id: getUUID(),
//     name: name,
//     birthdate: birthdate,
//     age: getAge(birthdate),
//   };
// };

// const juan = buildPersonAdapter({ name: "Juan", birthdate: "1990-01-01" });
// const maria = buildPersonAdapter({ name: "Maria", birthdate: "1985-05-15" });

// console.log(juan);
// console.log(maria);

/* 
aplicando factory function correctamente
*/

const buildPersonFactory = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

module.exports = { buildPersonFactory };
