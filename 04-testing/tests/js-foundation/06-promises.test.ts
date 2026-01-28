import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("Get pokemon name by id", () => {
  // GET POKEMON NAME
  test("should return the pokemon name", async () => {
    const pokemonID = 1;
    const pokemonName = await getPokemonById(pokemonID);

    expect(pokemonName).toBe("bulbasaur");
  });

  // ERROR HANDLING
  test("should throw an error if the pokemon does not exist", async () => {
    const pokemonId = 999999;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
