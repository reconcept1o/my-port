import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AnimatedPage from '../components/AnimatedPage';

const ContactPage = () => {
  return (
    <AnimatedPage>
      <Container
        sx={{
          minHeight: { xs: '70vh', sm: '80vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '700px',
          px: { xs: 1, sm: 2 },
          bgcolor: '#ffffff', // Arka plan beyaz
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: '#000000', // Siyah yazı
            fontFamily: 'monospace',
            fontWeight: 700, // Kalın font
            mb: 1,
          }}
        >
          02. What's Next?
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            mb: 2,
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          sx={{
            maxWidth: '90%',
            mb: 3,
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
          }}
        >
          I'm passionate about turning ideas into reality and always eager to dive
          into new projects or collaborations. Whether you're envisioning a
          cutting-edge app, need help solving a technical challenge, or just want
          to geek out over code and AI, I'm here for it—reach out and let's make
          something extraordinary!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1, sm: 2 },
            mb: 2,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Button
            href="mailto:unver.jsx@gmail.com"
            variant="outlined"
            color="primary"
            startIcon={<EmailIcon />}
            sx={{
              fontFamily: 'monospace',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              px: 2,
              py: 1,
              color: '#000000', // Siyah yazı
              borderColor: '#000000', // Siyah çerçeve
              fontWeight: 700, // Kalın font
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)', // Hover'da hafif siyah ton
                transform: 'translateY(-2px)',
                borderColor: '#000000',
              },
            }}
          >
            Send an Email
          </Button>
          <Button
            href="https://wa.me/+905354673285"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            startIcon={<WhatsAppIcon />}
            sx={{
              fontFamily: 'monospace',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              px: 2,
              py: 1,
              color: '#000000', // Siyah yazı
              borderColor: '#000000', // Siyah çerçeve
              fontWeight: 700, // Kalın font
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)', // Hover'da hafif siyah ton
                transform: 'translateY(-2px)',
                borderColor: '#000000',
              },
            }}
          >
            Message on WhatsApp
          </Button>
        </Box>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            mb: 0.5,
          }}
        >
          Phone: +90 535 467 32 85
        </Typography>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            mb: 0.5,
          }}
        >
          Email: unver.jsx@gmail.com
        </Typography>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
          }}
        >
          ANKARA/Turkey
        </Typography>
      </Container>
    </AnimatedPage>
  );
};

export default ContactPage;