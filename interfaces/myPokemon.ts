export interface Pokemon {
    _id: String;
    name: String;
    types: Array<String>;
    attack: Number;
    defense: Number;
    abilities: Array<String>;
    hp: Number;
    weight: Number;
    height: Number;
    img: String;
}