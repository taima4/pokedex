import readline from "readline";
import { getCommands } from "./commands/command.js";
import { initState, State } from "./state.js";

export function cleanInput(input: string): string[] {
  const result = input.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return result;
}

export function startREPL(state: State) {
  state.readL.prompt();
  state.readL.on("line", async (line) => {
    const words = cleanInput(line);
    if (words.length === 0) return state.readL.prompt();

    const commandName = words[0];
    const commands = getCommands();
    const command = commands[commandName];
    if (command) {
      try {
        if (
          command.name === "explore" ||
          command.name === "catch" ||
          command.name === "inspect"
        ) {
          await command.callback(state, ...words.slice(1));
        } else {
          await command.callback(state);
        }
      } catch (err) {
        console.error("error executing command:", err);
      }
    } else {
      console.log("Unknown command");
    }
    state.readL.prompt();
  });
}
