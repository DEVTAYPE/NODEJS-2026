import { getAge } from "../../src/plugins";

describe("plugin/get-age.plugin.ts", () => {
  // RETURN A NUMBER
  test("test age return a number", () => {
    const birthdate = "2004-06-09";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  // return age
  test("test return current age", () => {
    // arrange
    const birthdate = "2004-06-09";
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    // act
    const age = getAge(birthdate);

    // assert
    expect(age).toBe(calculatedAge);
  });

  // Return a 0
  test("test return a 0", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2004);
    const birthdate = "2004-06-09";

    const age = getAge(birthdate);

    expect(age).toBe(0);
  });
});
