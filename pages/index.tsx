import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { Footer } from '../components/Footer';
import MediaCard from '../components/MediaCard';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { Pokemon } from '../interfaces/myPokemon';


type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage = (props: HomeProps) => {

  const api = axios.create({
    baseURL: '/api/'
  });

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getAllPokemons = async () => {
    // const resp = await api.get('/pokemon');
    const { data } = await api.get<Pokemon[]>('/pokemon');
    setPokemons(data)
  }

  useEffect(() => {
    getAllPokemons()
  }, []);


  return (
    <Layout title="Pokemon api rest">
      <main className={styles.main}>

        <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mt: '20px' }}>Pokemon Full Rest Api</Typography>

        <Button
          variant="outlined"
          onClick={props.toggleTheme}
        >
          Toggle Theme
        </Button>

        <Button
          color='primary'
          variant="contained"
        >
          Nuevo
        </Button>


        <Grid justifyContent="center" container spacing={2} mt={1}>
          {
            pokemons.map(pokemon =>

              <MediaCard key={pokemon._id} pokemon={pokemon} />
            )
          }
        </Grid>

      </main>

      <Footer />
    </Layout>
  )
}

export default Home
