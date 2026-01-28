import { buildLogger } from "../../src/plugins";
import { logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe("Logger plugin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // esperar que el logger devuelva una funcion
  test("buildLogger returns a logger object", () => {
    const logger = buildLogger("test-service");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  // que se llame al logger de winston
  test("logger methods call winston logger", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");

    const message = "Test log message";
    const service = "test-service";

    const logger = buildLogger(service);

    logger.log(message);

    /* 
    ESPERAMOS LO SIGUIENTE

    que al llamar a logger.log, se llame a winstonLoggerMock con los parametros correctos

    */
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        message,
        service,
      }),
    );
  });

  test("logger.error should call winston logger with error level", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");

    const message = "Test error message";
    const service = "test-service";

    const logger = buildLogger(service);

    logger.error(message);
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      }),
    );
  });
});
