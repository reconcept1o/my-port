import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from 'react-helmet-async';
import AnimatedPage from '../components/AnimatedPage';

const HomePage = ({ country = 'default' }) => {
  const countryContent = {
    us: {
      title: 'Suleyman Unver - Full Stack Developer in the USA',
      description:
        'Suleyman Unver, a Full Stack Developer specializing in MERN stack and PostgreSQL, crafting scalable web and mobile applications for USA businesses.',
      keywords: 'full stack developer USA, MERN stack developer, web development USA, PostgreSQL developer',
    },
    ca: {
      title: 'Suleyman Unver - Software Developer in Canada',
      description:
        'Suleyman Unver, a software developer delivering fintech and health tech solutions using MERN stack and PostgreSQL for Canadian enterprises.',
      keywords: 'software developer Canada, MERN stack Toronto, PostgreSQL development, mobile app developer Canada',
    },
    au: {
      title: 'Suleyman Unver - Web Developer in Australia',
      description:
        'Suleyman Unver, a web developer building scalable platforms for Australian startups using MERN stack and PostgreSQL expertise.',
      keywords: 'web developer Australia, MERN stack Sydney, scalable app development, software developer Australia',
    },
    default: {
      title: 'Suleyman Unver - Full Stack Developer',
      description:
        "I'm a seasoned Full Stack Developer specializing in the MERN stack and PostgreSQL, with a knack for building robust, scalable web and mobile applications.",
      keywords: 'full stack developer, MERN stack, PostgreSQL, web development, mobile app development',
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
        <link rel="canonical" href={`https://www.reconceptx.com/${country === 'default' ? '' : country}`} />
        <link rel="alternate" hreflang="en-us" href="https://www.reconceptx.com/us" />
        <link rel="alternate" hreflang="en-ca" href="https://www.reconceptx.com/ca" />
        <link rel="alternate" hreflang="en-au" href="https://www.reconceptx.com/au" />
        <link rel="alternate" hreflang="x-default" href="https://www.reconceptx.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Suleyman Unver',
            jobTitle: 'Full Stack Developer',
            url: `https://www.reconceptx.com/${country === 'default' ? '' : country}`,
            description: description,
            sameAs: [
              'www.linkedin.com/in/süleyman-ünver-9b3950245', // Kendi LinkedIn profilinizi ekleyin
              'https://github.com/reconcept1o', // Kendi GitHub profilinizi ekleyin
            ],
            address: {
              '@type': 'PostalAddress',
              addressCountry: country === 'us' ? 'US' : country === 'ca' ? 'CA' : country === 'au' ? 'AU' : 'Global',
            },
          })}
        </script>
      </Helmet>
      <Container
        sx={{
          minHeight: { xs: '70vh', sm: '80vh' },
          display: 'flex', // Hata burada düzeltildi: 'flex" yerine 'flex'
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
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
            mb: 2,
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Suleyman Unver.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 2,
          }}
        >
          <TypeAnimation
            sequence={[
              'I craft immersive digital experiences.',
              2000,
              'I am a Full Stack Developer.',
              2000,
              'I am passionate about APIs and LLMs.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>
        <Typography
          sx={{
            maxWidth: '90%',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: 'white',
            fontWeight: 700,
          }}
        >
          I'm a seasoned Full Stack Developer specializing in the MERN stack and PostgreSQL, with a knack for building
          robust, scalable web and mobile applications. My passion lies in creating seamless user experiences, optimizing
          performance, and leveraging cutting-edge technologies like APIs and Large Language Models to solve complex
          challenges. Let's build the future of the web together!
        </Typography>
      </Container>
    </AnimatedPage>
  );
};

export default HomePage;