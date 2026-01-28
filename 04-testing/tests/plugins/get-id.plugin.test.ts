import { getUUID } from "../../src/plugins";

describe("Plugin/get-uuid", () => {
  // return a string
  test("return a string", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
  });

  // return a 36 characters
  test("return a 36 characters", () => {
    // arrange
    const uuidLength = 36;
    const uuid = getUUID();

    expect(uuid.length).toBe(uuidLength);
  });
});
