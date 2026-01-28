import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("Plugins/http client", () => {
  // retyrb a string or result
  test("return a string or result", async () => {
    const fetchURL = "https://jsonplaceholder.typicode.com/todos/1";

    const data = await httpClientPlugin.get(fetchURL);
    // console.log(data);

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  // have POST, PUT and DELETE
  test("Have POST, PUT and DELETE", () => {
    const postMethod = httpClientPlugin.post;
    const putMethod = httpClientPlugin.put;
    const deleteMethod = httpClientPlugin.delete;

    expect(typeof postMethod).toBe("function");
    expect(typeof putMethod).toBe("function");
    expect(typeof deleteMethod).toBe("function");
  });

  // return error not implement
  test("Return error not implement", async () => {
    const expectResult = "Not implemented";

    try {
      await httpClientPlugin.post("", {});

      expect(true).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe(expectResult);
    }
  });
  // return error not implement
  test("Return error not implement", async () => {
    const expectResult = "Not implemented";

    try {
      await httpClientPlugin.post("", {});

      expect(true).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe(expectResult);
    }
  });

  // return error not implement
  test("Return error not implement", async () => {
    const expectResult = "Not implemented";

    try {
      await httpClientPlugin.put("", {});

      expect(true).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe(expectResult);
    }
  });

  // return error not implement
  test("Return error not implement", async () => {
    const expectResult = "Not implemented";

    try {
      await httpClientPlugin.delete("");

      expect(true).toBeFalsy();
    } catch (error) {
      expect((error as Error).message).toBe(expectResult);
    }
  });
});
