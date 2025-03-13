import { PokemonType } from "../utils/enums";

export interface IPokemon {
  id: number;
  name: string;
  img: string;
  height: number;
  weight: number;
  types: ITypes[];
  base_experience: number;
  abilities: IAbility[];
  stats: IStat[];
  page?: string;
  sprites: ISprites;
  weaknesses?: PokemonType[];
  next_evolution?: IEvolution[];
  prev_evolution?: IEvolution[];
}

export interface IAbility {
  ability: ISpecies;
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: ISpecies;
}

export interface ITypes {
  slot: number;
  type: ISpecies;
}

export interface IEvolution {
  num: string;
  name: string;
}

export interface ISprites {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
}
