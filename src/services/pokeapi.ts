import { Cache } from "../cache/pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cached = this.cache.get<ShallowLocations>(fullUrl);

    if (cached) {
      return cached;
    }
    let result;

    try {
      const response = await fetch(fullUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      result = (await response.json()) as ShallowLocations;
      this.cache.add(fullUrl, result);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullUrl = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.cache.get<Location>(fullUrl);

    if (cached) {
      return cached;
    }
    let result;

    try {
      const response = await fetch(fullUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      result = (await response.json()) as Location;
      this.cache.add(fullUrl, result);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const fullUrl = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cached = this.cache.get<Pokemon>(fullUrl);

    if (cached) {
      return cached;
    }
    let result;

    try {
      const response = await fetch(fullUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      result = (await response.json()) as Pokemon;
      this.cache.add(fullUrl, result);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
