import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("Callback Functions", () => {
  // Validar que getUserById retorne un error y un usuario undefined
  test("getUserById debe retornar un error si el usuario no existe", (done) => {
    // 1: arrange
    const id = 3;

    // 2: act
    getUserById(id, (err, user) => {
      // 3: assert
      expect(err).toBe(`User not found with id ${id}`); // Mensaje de error esperado
      expect(user).toBeUndefined();
      done();
    });
  });

  // Validar que getUserById retorne un usuario correcto
  test("getUserById debe retornar un usuario si existe", (done) => {
    // 1: arrange
    const id = 1;

    // 2: act
    getUserById(id, (err, user) => {
      // 3: assert
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: "John Doe" }); // Usuario esperado
      done();
    });
  });
});
