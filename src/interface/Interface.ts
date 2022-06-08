export interface Pokedex {
  pokemon: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  img: string;
  height: string;
  weight: string;
  types: Types[];
  base_experience: number;
  abilities: Ability[];
  stats: Stat[];
  page?: string;
  sprites: Sprites;
  weaknesses?: Type[];
  next_evolution?: Evolution[];
  prev_evolution?: Evolution[];
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Types {
  slot: number;
  type: Species;
}

export interface Evolution {
  num: string;
  name: string;
}

export interface Sprites {
  front_default: string;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface DreamWorld {
  front_default: string;
}

export enum Type {
  Bug = "Bug",
  Dark = "Dark",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}
