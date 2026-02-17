export interface ICreateTableUseCase {
  execute(options: ICreateTableUseCaseOptions): string;
}

export interface ICreateTableUseCaseOptions {
  base: number;
  limit?: number;
}

export class CreateTableUseCase implements ICreateTableUseCase {
  /* 
  Podemos hacer DI: dependency injection, inyección de dependencias, para inyectar una clase que se encargue de crear la tabla, y así desacoplar la lógica de creación de la tabla del caso de uso. Esto nos permite cambiar la implementación de la creación de la tabla sin afectar el caso de uso, y también facilita las pruebas unitarias al poder mockear la clase que se encarga de crear la tabla.
  */
  constructor() {}

  execute(options: ICreateTableUseCaseOptions): string {
    let outputMessage: string = "";

    const { base, limit = 10 } = options;

    for (let i = 1; i <= limit; i++) {
      if (i === limit) {
        outputMessage += `${base} x ${i} = ${base * i}`;
        continue;
      }
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
