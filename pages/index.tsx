import type { NextPage } from 'next'
import { Button, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import styles from '../styles/Home.module.css'

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage = (props: HomeProps) => {
  return (
    <Layout title="Pokemon api rest">
      <main className={styles.main}>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Typography variant='h1' color='primary'>Hola mundo</Typography>
       
        <Button
          variant="outlined"
          onClick={props.toggleTheme}
        >
          Toggle Theme
        </Button>


      </main>
      
      <footer className={styles.footer}>
        <p>
          Made with <span>❤</span> by &nbsp;
          <a
            href="https://www.giancarlo-culcay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giancarlo Culcay
          </a>
          &nbsp; | &nbsp;
          <a
            href="https://twitter.com/GiancCool"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </p>
      </footer>

    </Layout>
  )
}

export default Home