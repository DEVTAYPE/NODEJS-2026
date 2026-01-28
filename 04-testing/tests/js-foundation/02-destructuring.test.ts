import { characters } from "../../src/js-foundation/02-destructuring";

describe("Destructuring", () => {
  test("Characters should contain Flash and superman", () => {
    // TEST DESPRDENADO EL ARRAY 'characters'
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("flas and superman should be the first two characters", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
