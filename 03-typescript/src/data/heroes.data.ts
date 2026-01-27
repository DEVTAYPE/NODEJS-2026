export interface IHero {
  id: number;
  name: string;
  owner: string;
}

export const heroes: Array<IHero> = [
  {
    id: 1,
    name: "Superman",
    owner: "Marvel",
  },
  {
    id: 2,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 3,
    name: "Spiderman",
    owner: "Marvel",
  },
];
