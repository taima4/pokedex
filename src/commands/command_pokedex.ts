import { State } from "../state.js";

export async function commandPokedex(state: State) {
  try {
    console.log("Your Pokedex:");
    const names = Object.keys(state.pokedex);
    if (names.length === 0) {
      console.log("empty");
      return;
    }
    names.forEach((name) => {
      console.log(` - ${name}`);
    });
  } catch (error) {
    console.error(`Error fetching pokemon:`, error);
  }
}
