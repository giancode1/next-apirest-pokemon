import mongoose, { Model, Schema } from 'mongoose';
import { Pokemon } from '../interfaces/myPokemon';

export interface IPokemon extends Pokemon { }

const entryPokemonSchema = new Schema({
    name: { type: String, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    types: { type: Array<String>, required: true },
    img: {type: String, required:true},
    abilities: { type: Array<String> },
    height: String,
    weight: String,
    hp: Number,
}, {
    versionKey: false,
    timestamps: true,
    id: false
});


const entryPokemonModel: Model<IPokemon> = mongoose.models.Pokemon || mongoose.model('Pokemon', entryPokemonSchema);

export default entryPokemonModel;
