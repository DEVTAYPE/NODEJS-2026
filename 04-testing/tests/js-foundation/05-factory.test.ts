import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("Factory Pattern", () => {
  // ARRANGE
  const getUUID = () => "1234";
  const getAge = () => 32;

  // QUE EL buikdMAKE regrese una funcion
  test("buildMakePerson should return a function", () => {
    // ACT
    const makePerson = buildMakePerson({ getAge, getUUID });

    // ASSERT
    expect(typeof makePerson).toBe("function");
  });

  // QUE LA FUNCION REGRESE UN OBJETO PERSON
  test("makePerson should return a person object", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });

    // ACT
    const person = makePerson({ name: "John", birthdate: "1985-10-21" });

    // ASSERT
    expect(person).toEqual({
      id: "1234",
      name: "John",
      birthdate: "1985-10-21",
      age: 32,
    });
  });
});
