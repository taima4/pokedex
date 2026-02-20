# Pokedex CLI 🛡️

A professional command-line interface (CLI) application built with **TypeScript** and **Node.js** that interacts with the [PokeAPI](https://pokeapi.co/).

## Features ✨

- **Custom Caching System:** Features a high-performance cache with an automated "reaper" process to manage memory and speed up repeated requests.
- **Interactive REPL:** A smooth "Read-Eval-Print Loop" for a seamless user experience.
- **World Exploration:** Navigate through different Pokemon regions using pagination.
- **Catching Mechanics:** Catch Pokemon based on their base experience levels.
- **Pokedex Management:** Store and inspect the stats/types of all caught Pokemon.

## Getting Started 🚀

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm

### Installation
1. Clone the repository:
   
   ```bash
   git clone [https://github.com/YOUR_USERNAME/pokedex-cli.git](https://github.com/YOUR_USERNAME/pokedex-cli.git)
   ```
   
2. Install dependencies:

```bash
npm install
```

### Usage

 ```bash
npm run dev
```

### Commands 

| Command | Description |
| :--- | :--- |
| `help` | Displays help menu and command descriptions. |
| `map` | Displays the next 20 location areas. |
| `mapb` | Displays the previous 20 location areas. |
| `explore <area>` | Shows all Pokemon found in a specific area. |
| `catch <name>` | Attempts to catch a Pokemon and add it to your collection. |
| `inspect <name>` | View stats and types of a Pokemon you have caught. |
| `pokedex` | Lists all Pokemon currently in your Pokedex. |
| `exit` | Closes the application. |
