import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#64ffda' },
    secondary: { main: '#ccd6f6' },
    text: {
      primary: '#8892b0',
      secondary: '#a8b2d1',
    },
    background: {
      default: '#0a192f',
      paper: 'rgba(10, 25, 47, 0.85)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: 'clamp(1rem, 3vw, 1.25rem)' },
    h2: { fontSize: 'clamp(1.25rem, 5vw, 3.5rem)' },
    h3: { fontSize: 'clamp(1rem, 4vw, 2.5rem)' },
    body1: { fontSize: 'clamp(0.875rem, 2vw, 1rem)' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden', // Yatay taşmayı engelle
          boxSizing: 'border-box',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;