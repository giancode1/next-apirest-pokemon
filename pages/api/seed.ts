//nextapi
import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '../../database';
import entryPokemonModel from '../../models/Entry';


type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este servicio' });
    }

    await db.connect();
    // await entryPokemonModel.deleteMany();
    await entryPokemonModel.insertMany( seedData );
    await db.disconnect();


    res.status(200).json({ message: 'Data guardada correctamente' });
}