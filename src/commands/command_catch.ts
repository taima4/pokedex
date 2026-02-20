import { State } from "../state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Please provide a Pokemon name.");
    return;
  }
  const pokemonName = args[0].toLowerCase();
  try {
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

    const difficulty = pokemon.base_experience / 400;
    const chance = Math.max(1 - difficulty, 0.1);

    if (Math.random() < chance) {
      console.log(`${pokemonName} was caught!`);
      state.pokedex[pokemonName] = pokemon;
    } else {
      console.log(`${pokemonName} escaped!`);
    }
  } catch (error) {
    console.error(`Error fetching ${pokemonName}:`, error);
  }
}
