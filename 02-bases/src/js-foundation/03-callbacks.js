const users = [
  {
    id: 1,
    name: "Jhon Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

// Función para obtener un usuario por su ID, ejemplo basico
// const getUserById = (id) => {
//   const user = users.find((user) => user.id === id);

//   console.log({
//     user,
//   });
// };

// getUserById(1);

// Un callback es mas que nada que pasar una funcion como argumento a otra funcion

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  if (user) {
    return callback(null, user);
  }

  callback(`User with id ${id} not found`);
};

module.exports = { getUserById };
