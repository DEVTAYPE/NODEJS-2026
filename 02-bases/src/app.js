// console.log("Hola Mundo");
// const { emailTemplate } = require("./js-foundation/01-template");

const { buildLogger } = require("./plugins");

// console.log(emailTemplate);
// console.log("Hello from app.js with nodemon!");

// require("./js-foundation/02-destructuring");

// const { getUserById } = require("./js-foundation/03-callbacks");

// getUserById(2);

// getUserById(3, (error, user) => {
//   if (error) {
//     return console.log(error);
//   }

//   console.log(user);
// });

// const { buildPersonFactory } = require("./js-foundation/04-factory");

// const { getUUID, getAge } = require("./plugins");

// const buildPerson = buildPersonFactory({ getUUID, getAge });

// const juan = buildPerson({ name: "Juan", birthdate: "1990-01-01" });
// const maria = buildPerson({ name: "Maria", birthdate: "1985-05-15" });

// console.log(juan);
// console.log(maria);

// const { getPokemonById } = require("./js-foundation/05-promises");

// getPokemonById(1);

const logger = buildLogger("app-service");

logger.log("Application has started");
logger.error("This is a sample error message");
