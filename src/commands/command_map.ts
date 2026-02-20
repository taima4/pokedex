import type { State } from "../state.js";

export async function fetchAndPrintLocations(state: State, url: string | null) {
  try{
    const locations=  await state.pokeAPI.fetchLocations(url??undefined);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for(const location of locations.results){
        console.log(location.name)
    }

  }catch(error){
console.error("Error fetching locations:", error);
  }
}

export async function commandMap(state: State) {
await fetchAndPrintLocations(state, state.nextLocationsURL);   
}
export async function commandMapb(state: State) {
     if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }
await fetchAndPrintLocations(state, state.prevLocationsURL);   
}