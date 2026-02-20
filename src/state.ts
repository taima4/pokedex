import { createInterface, Interface } from "readline";
import { getCommands } from "./commands/command.js";
import { PokeAPI, Pokemon } from "./services/pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readL: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Record<string, Pokemon>;
};
export function initState(): State {
  const readL = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  const commands: Record<string, CLICommand> = getCommands();
  const pokemon = new PokeAPI(5000);
  return {
    readL: readL,
    commands: commands,
    pokeAPI: pokemon,
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {},
  };
}
