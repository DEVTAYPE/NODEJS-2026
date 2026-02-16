import fs from "fs";

export interface ISaveFileUseCase {
  execute(options: ISaveFileUseCaseOptions): boolean;
}

export interface ISaveFileUseCaseOptions {
  content: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFileUseCase implements ISaveFileUseCase {
  execute(options: ISaveFileUseCaseOptions): boolean {
    try {
      const {
        content,
        fileDestination = "outputs",
        fileName = "table",
      } = options;

      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, content);

      return true;
    } catch (error) {
      console.log("Error saving file:", error);

      return false;
    }
  }
}
