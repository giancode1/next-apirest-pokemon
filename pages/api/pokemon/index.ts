import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import entryPokemonModel, { IPokemon } from '../../../models/Entry';

type Data = 
   | {message: string}
   | IPokemon[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getPokemons(res)
        default:
            return res.status(400).json({ message: 'Endpoint no existe' })
    }

}

const getPokemons = async (res: NextApiResponse<Data>) => {
    await db.connect()
    const pokemons = await entryPokemonModel.find().sort({ createdAt: 'ascending' })
    await db.disconnect()

    res.status(200).json(pokemons)
}