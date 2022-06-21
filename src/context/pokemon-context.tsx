import { createContext } from "react";
import { Pokemon } from "../interface/Interface";

const PokemonData = createContext<Pokemon>(
    {
        "abilities": [
            {
                "ability": {
                    "name": "",
                    "url": ""
                }
            }
        ],
        "base_experience": 0,
        "height": '',
        "weight": '',
        "id": 0,
        "name": "",
        "species": {
            "name": "",
            "url": ""
        },
        "sprites": {
            "front_default": "",
            "other": {
                "dream_world": {
                    "front_default": ""
                }
            }
        },
        "stats": [
            {
                "base_stat": 0,
                "effort": 0,
                "stat": {
                    "name": "",
                    "url": ""
                }
            }
        ],
        "types": [
            {
                "slot": 0,
                "type": {
                    "name": "",
                    "url": ""
                }
            }
        ],
    
});

export default PokemonData;
