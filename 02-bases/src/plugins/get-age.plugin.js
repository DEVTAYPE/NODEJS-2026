// ADAPTAR UN PAQUETE DE TERCEROS A NUESTRO CODIGO, ADAPTER
const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
  if (!birthdate) return new Error("Birthdate is required");

  return getAgePlugin(birthdate);
};

module.exports = { getAge };
