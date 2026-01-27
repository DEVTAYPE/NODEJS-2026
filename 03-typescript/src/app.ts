import { findHeroById } from "./services/heroes.service";

console.log("Hello world");

const hero = findHeroById(1);
console.log(`Found hero: ${hero?.name}`);
