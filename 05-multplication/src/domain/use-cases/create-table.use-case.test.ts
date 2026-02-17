import { CreateTableUseCase } from "./create-table.use-case.js";

describe("Comprobar la función de multiplicación", () => {
  test("instancia correcta", () => {
    // Arrange
    const createTable = new CreateTableUseCase();

    // Act
    expect(createTable).toBeInstanceOf(CreateTableUseCase);
  });

  test("debería retornar la tabla de multiplicar del 5", () => {
    // Arrange
    const createTable = new CreateTableUseCase();

    // Act
    const result = createTable.execute({ base: 5, limit: 10 });
    const rows = result.split("\n").length;

    // Assert
    expect(rows).toBe(10);
  });
});
