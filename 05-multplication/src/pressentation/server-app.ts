import { CreateTableUseCase } from "../domain/use-cases/create-table.use-case.js";
import { SaveFileUseCase } from "../domain/use-cases/save-file.use-case.js";

export interface IRunOptions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  directory: string;
}

export class SeverApp {
  static run(args: IRunOptions) {
    console.log("Server is running...");

    const { base, limit, show, name, directory } = args;

    const tableCreator = new CreateTableUseCase();
    const table = tableCreator.execute({ base, limit });

    const saveFile = new SaveFileUseCase();
    const wasCreated = saveFile.execute({
      content: table,
      fileName: name,
      fileDestination: directory,
    });

    if (show) {
      console.log(table);
    }

    if (wasCreated) {
      console.log("File was created successfully");
    } else {
      console.log("Error creating file");
    }
  }
}
