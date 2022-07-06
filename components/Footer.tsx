import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
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
  );
};
