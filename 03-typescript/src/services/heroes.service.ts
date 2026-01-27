import { heroes, type IHero } from "../data/heroes.data";

export const findHeroById = (id: number): IHero | undefined => {
  return heroes.find((hero) => hero.id === id);
};
