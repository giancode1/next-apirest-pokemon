import { Pokemon } from "../interfaces/myPokemon";

interface PokemonData extends Omit<Pokemon, '_id'>{
}

export const seedData: PokemonData[] = [
    {
        name: "alakazam",
        attack: 100,
        defense: 75,
        types: ["psychic"],
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
        abilities: [
            "synchronize",
            "inner-focus",
            "magic-guard"
        ],
        height: 19,
        weight: 481,
        hp: 100,
    },
    {
        name: "pikachu",
        attack: 68,
        defense: 49,
        types: ["electric"],
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
        abilities: [
            "static",
            "lightning-rod",
            "magic-guard"
        ],
        height: 19,
        weight: 60,
        hp: 74,
    }
]

