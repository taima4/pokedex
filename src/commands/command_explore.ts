import { State } from "../state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Please provide a location area name.");
    return;
  }
  const locationName = args[0].toLowerCase();

  try {
    const locations = await state.pokeAPI.fetchLocation(locationName);

    console.log(`Exploring ${locationName}...`);
    console.log("Found Pokemon:");
    for (const location of locations.pokemon_encounters) {
      console.log(` - ${location.pokemon.name}`);
    }
  } catch (error) {
    console.error(`Error fetching ${locationName}:`, error);
  }
}
