import { State } from "../state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Please provide a Pokemon name.");
    return;
  }
  const pokemonName = args[0].toLowerCase();
  try {
    const pokemon = state.pokedex[pokemonName];

    if (!pokemon) {
      console.log("you have not caught that pokemon");
      return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);

    console.log("Stats:");
    pokemon.stats.forEach((s) => {
      console.log(`  -${s.stat.name}: ${s.base_stat}`);
    });

    console.log("Types:");
    pokemon.types.forEach((t) => {
      console.log(`  - ${t.type.name}`);
    });
  } catch (error) {
    console.error(`Error fetching ${pokemonName}:`, error);
  }
}
