import { ServerApp } from "./server-app";

describe("server app", () => {
  test("SHOULD CREATE SERVER APP INSTANCE", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("SHOULD RUN SERVER APP", () => {
    const options = {
      base: 5,
      limit: 10,
      show: false,
      name: "table",
      directory: "outputs",
    };

    ServerApp.run(options);
  });
});
