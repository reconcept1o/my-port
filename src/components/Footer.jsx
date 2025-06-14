import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: { xs: 1, sm: 2 },
        width: '100%',
        maxWidth: '100%', // Genişlik ekranı aşmasın
        boxSizing: 'border-box', // Padding genişliğe dahil olsun
        bgcolor: '#ffffff', // Arka plan beyaz (diğer sayfalarla uyumlu)
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
        <IconButton
          href="https://github.com/reconcept1o"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#000000', // Siyah ikonlar
            '&:hover': { color: '#64ffda' }, // Hover'da tema rengi
          }}
        >
          <GitHubIcon sx={{ fontSize: 'clamp(0.9rem, 3vw, 1.25rem)' }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#000000', // Siyah ikonlar
            '&:hover': { color: '#64ffda' }, // Hover'da tema rengi
          }}
        >
          <LinkedInIcon sx={{ fontSize: 'clamp(0.9rem, 3vw, 1.25rem)' }} />
        </IconButton>
      </Box>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          color: '#000000', // Siyah yazı
          fontWeight: 700, // Kalın font
          mb: 0.5,
        }}
      >
        Crafting the future, one line of code at a time.
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
          color: '#000000', // Siyah yazı
          fontWeight: 700, // Kalın font
        }}
      >
        Designed & Built by Süleyman Ünver |{' '}
        <Typography
          component="a"
          href="https://github.com/reconcept1o/my-port"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#64ffda', // Tema rengi
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
            fontSize: 'inherit',
            fontFamily: 'monospace',
            fontWeight: 700, // Kalın font
          }}
        >
          View Source
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;