import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AnimatedPage from '../components/AnimatedPage';

const ContactPage = ({ country = 'default' }) => {
  const countryContent = {
    us: {
      title: 'Contact Suleyman Unver - Full Stack Developer in the USA',
      description:
        'Contact Suleiman Unver, a Full Stack Developer in the USA, for web and mobile app development services via email or WhatsApp.',
      keywords: 'contact developer USA, hire full stack developer USA, software developer contact',
    },
    ca: {
      title: 'Contact Suleyman Unver - Software Developer in Canada',
      description:
        'Get in touch with Suleiman Unver, a software developer in Canada, for fintech and web solutions via email or WhatsApp.',
      keywords: 'contact developer Canada, software developer Toronto, hire developer Canada',
    },
    au: {
      title: 'Contact Suleyman Unver - Web Developer in Australia',
      description:
        'Reach out to Suleiman Unver, a web developer in Australia, for startup solutions and app development via email or WhatsApp.',
      keywords: 'contact developer Australia, web developer Sydney, hire developer Australia',
    },
    default: {
      title: 'Contact Suleyman Unver - Full Stack Developer',
      description:
        'Connect with Suleiman Unver, a passionate Full Stack Developer, for project collaborations or technical discussions via email or WhatsApp.',
      keywords: 'contact full stack developer, hire software developer, developer contact',
    },
  };

  const { title, description, keywords } = countryContent[country];

  return (
    <AnimatedPage>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Suleyman Unver" />
        <link
          rel="canonical"
          href={`https://www.reconceptx.com/contact${country === 'default' ? '' : `/${country}`}`}
        />
        <link rel="alternate" hreflang="en-us" href="https://www.reconceptx.com/contact/us" />
        <link rel="alternate" hreflang="en-ca" href="https://www.reconceptx.com/contact/ca" />
        <link rel="alternate" hreflang="en-au" href="https://www.reconceptx.com/contact/au" />
        <link rel="alternate" hreflang="x-default" href="https://www.reconceptx.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Suleyman Unver',
            jobTitle: 'Full Stack Developer',
            url: `https://www.reconceptx.com/contact${country === 'default' ? '' : `/${country}`}`,
            description: description,
            sameAs: [
              'https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245',
              'https://github.com/reconcept1o',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+90-535-467-32-85',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Turkish'],
              },
              {
                '@type': 'ContactPoint',
                email: 'unver.jsx@gmail.com',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Turkish'],
              },
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ankara',
              addressCountry: 'TR',
            },
          })}
        </script>
      </Helmet>
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
          bgcolor: '#0A192F',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontFamily: 'monospace',
            fontWeight: 700,
            mb: 1,
          }}
        >
           What's Next?
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          sx={{
            maxWidth: '90%',
            mb: 3,
            color: 'white',
            fontWeight: 700,
          }}
        >
          I'm passionate about turning ideas into reality and always eager to dive into new projects or collaborations.
          Whether you're envisioning a cutting-edge app, need help solving a technical challenge, or just want to geek out
          over code and AI, I'm here for it—reach out and let's make something extraordinary!
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
              color: 'white',
              borderColor: 'white',
              fontWeight: 700,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)',
                transform: 'translateY(-2px)',
                borderColor: 'white',
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
              color: 'white',
              borderColor: 'white',
              fontWeight: 700,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)',
                transform: 'translateY(-2px)',
                borderColor: 'white',
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
            color: 'white',
            fontWeight: 700,
            mb: 0.5,
          }}
        >
          Phone: +90 535 467 32 85
        </Typography>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
            color: 'white',
            fontWeight: 700,
            mb: 0.5,
          }}
        >
          Email: unver.jsx@gmail.com
        </Typography>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
            color: 'white',
            fontWeight: 700,
          }}
        >
          ANKARA/Turkey
        </Typography>
      </Container>
    </AnimatedPage>
  );
};

export default ContactPage;