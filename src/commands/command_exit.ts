import { State } from "../state.js";

export async function commandExit(state:State){
    console.log("Closing the Pokedex... Goodbye!");
    state.readL.close();
     process.exit(0);
}

