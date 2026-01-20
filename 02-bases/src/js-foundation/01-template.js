const emailTemplate = `
<section>
  <h1>Hola {{name}}</h1>
  <p>Gracias por registrarte en nuestro sitio web.</p>
  <p>Por favor, confirma tu correo electrónico haciendo clic en el siguiente enlace:</p>
</section>
`;

console.log("===================");
console.log({ emailTemplate });
console.log("===================");

module.exports = {
  emailTemplate,
};
