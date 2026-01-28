// Descripción: Prueba básica para la aplicación
describe("Test in the app file", () => {
  test("should run a basic test", () => {
    // 1: Arrange (Arrancar)
    const num1 = 5;
    const num2 = 10;
    const expectedSum = 15;

    // 2: Act (Actuar)
    const actualSum = num1 + num2;

    // 3: Assert (Afirmar)
    expect(actualSum).toBe(expectedSum);
  });
});
