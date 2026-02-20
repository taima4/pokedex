import { inspect } from "node:util";
import { commandCatch } from "../commands/command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "../commands/command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { CLICommand } from "../state.js";
import { commandInspect } from "../commands/command_inspect.js";
import { commandPokedex } from "../commands/command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Display previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explore a specific location for Pokemon",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempt to catch a pokemon",
      callback: commandCatch,
    },

    inspect: {
      name: "inspect",
      description: "Inspect a caught pokemon's details",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Display all caught Pokemon",
      callback: commandPokedex,
    },
  };
}
