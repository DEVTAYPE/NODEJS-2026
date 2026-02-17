import { SaveFileUseCase } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  beforeEach(() => {
    // Clean up the outputs directory before each test
    const outputDir = "outputs";
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true, force: true });
    }
  });

  afterEach(() => {
    // Clean up the outputs directory after each test
    const outputDir = "outputs";
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true, force: true });
    }
  });

  test("should save a file successfully", () => {
    // Arrange
    const saveFileUseCase = new SaveFileUseCase();

    const filePath = "outputs/table.txt";
    const content = "This is a test file.";

    // Act
    const result = saveFileUseCase.execute({
      content,
      fileDestination: "outputs",
      fileName: "table",
    });

    // Assert

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const fileExists = fs.existsSync(filePath);

    expect(result).toBe(true);
    expect(fileContent).toBe(content);
    expect(fileExists).toBe(true);
  });

  test("should handle errors when saving a file", () => {
    const saveFileUseCase = new SaveFileUseCase();

    /* 
      Creamos un mock para simular un error al crear el directorio, lo que hará que el método `execute` retorne `false` y podamos verificar que el error se maneja correctamente.
    */
    const mkdirSyncSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("Mocked mkdirSync error");
    });

    const result = saveFileUseCase.execute({
      content: "This is a test file.",
      fileDestination: "outputs",
      fileName: "table",
    });

    expect(result).toBe(false);

    // Verificamos que el método `mkdirSync` fue llamado, lo que indica que se intentó crear el directorio antes de que ocurriera el error.
    expect(mkdirSyncSpy).toHaveBeenCalled();

    // Restauramos el comportamiento original del método `mkdirSync` para evitar que afecte a otros tests.
    mkdirSyncSpy.mockRestore();
  });
});
