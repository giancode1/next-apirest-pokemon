import type { NextPage } from 'next'
import { Button, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer';

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage = (props: HomeProps) => {
  return (
    <Layout title="Pokemon api rest">
      <main className={styles.main}>

        <h1>Pokemon Full Rest Api</h1>

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


      </main>


      <Footer />
    </Layout>
  )
}

export default Home