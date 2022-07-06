import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import type { AppProps } from 'next/app';


import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { lightTheme, darkTheme } from '../themes';
import '../styles/globals.css';


function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

const THEME_COOKIE_NAME = 'theme-preference';

function MyApp({ Component, pageProps }: AppProps) {

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [cookieTheme, setCookieTheme] = useCookies([THEME_COOKIE_NAME]);

  const preferredTheme = cookieTheme && cookieTheme[THEME_COOKIE_NAME] ? cookieTheme[THEME_COOKIE_NAME] : 'dark';
  
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(preferredTheme);

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';
    setSelectedTheme(desiredTheme);
    setCookieTheme(THEME_COOKIE_NAME, desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);


  return (
      <ThemeProvider theme={ activeTheme }>
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme}/>
      </ThemeProvider>
  )
}

export default MyApp;