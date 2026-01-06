import React, { useEffect, useState } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import Grid from '@mui/material/Grid2';
import { getThemePallete } from './theme/ThemePallete';
import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const [chat, setChat] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = React.useMemo(() => createTheme(getThemePallete(mode)), [mode]);

  useEffect(() => {

    localStorage.setItem('theme', mode)

  }, [mode])

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: 'ubuntu, sans-serif',
  //     h1: {
  //       fontFamily: 'opensans, sans-serif',      
  //     },
  //     h2: {
  //       fontFamily: 'opensans, sans-serif',
  //     },
  //     h3: {
  //       fontFamily: 'opensans, sans-serif',
  //     },
  //     body: {
  //       fontFamily: 'ubuntu, sans-serif',
  //       border: '1px solid',
  //       color: '#3C3C3C',
  //       background: '#FFFFFF',
  //     },
  //   },
  //   palette: {
  //     mode: darkMode ? 'dark' : 'light',
  //     primary: {
  //       main: '#9785BA',
  //       dark: '#AF9FCD',
  //       light: '#F9FAFA',
  //     },
  //     secondary: {
  //       main: '#D7C7F4',
  //       light: '#FFFFFF',
  //       mobile: 'linear-gradient(180deg, #FFFFFF 0%, #9785BA 100%)',
  //     },
  //   },
  // });

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{maxWidth: '1280px !important', padding: '0px !important', margin: '0 auto', background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }}>              
              <Grid size={{ xs: 12, md: 3 }} sx={{
                bgcolor: 'primary.light',
                '@media (max-width:767px)': {
                  width: '70%',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                  transition: 'transform 400ms ease',
                },
              }} position={{ xs: 'fixed', md: 'relative' }} height={'100vh'} zIndex={{ xs: 9999, md: 1 }} boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}>
                <SideNav setChat={setChat} closeMenu={() => setMenuOpen(false)} />
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Outlet context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }} />
              </Grid>
            </Grid>
          </Box>          
        </SnackbarProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
