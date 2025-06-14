import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Stack,
} from '@mui/material';
import AnimatedPage from '../components/AnimatedPage';
import profilePhoto from '../assets/1.jpg';

const AboutPage = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js & Next.js',
    'Node.js & Express.js',
    'Redux & Zustand',
    'HTML5 & CSS3',
    'Tailwind CSS & Styled-Components',
    'MongoDB',
    'PostgreSQL',
    'REST & GraphQL APIs',
    'Redis & BullMQ',
    'Git & GitHub',
    'Docker & Vercel',
    'Jest & Testing Library',
    'Web Performance Optimization',
    'LLM Integrations',
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Sanatkardan.com',
      date: '2024 - Present',
      desc: 'Leading the full software development lifecycle, I design and implement high-performance web applications. Currently spearheading the development of an innovative e-commerce warehouse management system, integrating Large Language Models (LLMs) to enhance operational efficiency and user experience.',
    },
    {
      role: 'Backend Developer',
      company: 'Turkafone.com.tr',
      date: '2023 - 2024',
      desc: 'Developed and maintained scalable web applications using the MERN stack, focusing on robust API design and database optimization. Collaborated with cross-functional teams to deliver seamless integrations and improve system reliability, reducing downtime by 20%.',
    },
    {
      role: 'Frontend Developer',
      company: 'Benan Tut E-Commerce',
      date: '2022 - 2023',
      desc: 'As a Junior React Developer, I contributed to project-based initiatives, building modern, responsive, and user-friendly interfaces. Improved page load times by optimizing React components and implementing lazy loading, enhancing customer engagement.',
    },
    {
      role: 'Freelance Full Stack Developer',
      company: '',
      date: '2020 - 2022',
      desc: 'Delivered custom web solutions for diverse clients, specializing in the MERN stack and PostgreSQL. Designed and developed responsive, scalable applications, including e-commerce platforms and content management systems. Integrated third-party APIs and optimized performance, achieving an average 30% improvement in load times across projects.',
    },
  ];

  return (
    <AnimatedPage>
      <Container
        sx={{
          py: { xs: 2, sm: 4 },
          textAlign: 'center',
          bgcolor: '#ffffff', // Arka plan beyaz
        }}
      >
        {/* About Me başlığı ve resim yan yana */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#000000', // Siyah yazı
              fontWeight: 700, // Kalın font
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: { xs: '80%', sm: 'clamp(100px, 20vw, 200px)' },
                height: '1px',
                bgcolor: '#000000', // Çizgi siyah
                mx: 'auto',
                mt: 1,
              },
            }}
          >
            01. About Me
          </Typography>
          <Box
            component="img"
            src={profilePhoto}
            alt="Süleyman Ünver"
            sx={{
              width: { xs: '100px', sm: '120px' },
              height: { xs: '100px', sm: '120px' },
              borderRadius: '50%', // Yuvarlak resim
              boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.7)',
              objectFit: 'cover',
            }}
          />
        </Stack>

        {/* Metin ve beceriler */}
        <Typography
          sx={{
            mb: 2,
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            maxWidth: '90%',
            mx: 'auto',
          }}
        >
          Hello! I'm Süleyman Ünver, a passionate Full Stack Developer with a love
          for crafting innovative web solutions. My journey began with frontend
          development using React, evolving into full-stack expertise with the MERN
          stack and PostgreSQL. At Sanatkardan.com, I lead end-to-end projects,
          from architecting scalable systems to integrating cutting-edge
          technologies like Large Language Models (LLMs) for advanced warehouse
          management solutions.
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            maxWidth: '90%',
            mx: 'auto',
          }}
        >
          My mission is to create seamless, high-performance applications that
          solve real-world problems. I thrive on continuous learning, staying ahead
          of industry trends, and contributing to the tech community through
          knowledge sharing. Whether it's optimizing APIs, designing intuitive UIs,
          or exploring AI-driven innovations, I'm driven to make a global impact in
          software development.
        </Typography>
        <List
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 1,
            justifyItems: { xs: 'center', sm: 'center' },
            maxWidth: '90%',
            mx: 'auto',
          }}
        >
          {skills.map((skill) => (
            <ListItem
              key={skill}
              sx={{
                fontFamily: 'monospace',
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                color: '#000000', // Siyah yazı
                fontWeight: 700, // Kalın font
              }}
            >
              <Box
                component="span"
                sx={{ color: '#000000', mr: 1, fontWeight: 700 }}
              >
                ▹
              </Box>
              {skill}
            </ListItem>
          ))}
        </List>

        {/* Deneyimler */}
        <Typography
          variant="h2"
          sx={{
            mt: 4,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000', // Siyah yazı
            fontWeight: 700, // Kalın font
            '&:after': {
              content: '""',
              display: 'block',
              width: { xs: '80%', sm: 'clamp(100px, 20vw, 200px)' },
              height: '1px',
              bgcolor: '#000000', // Çizgi siyah
              ml: { xs: 0, sm: 2 },
              mt: { xs: 1, sm: 0 },
            },
          }}
        >
          Experience
        </Typography>
        {experiences.map((exp) => (
          <Box key={exp.company || exp.role} sx={{ mb: 3, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                mb: 0.5,
                color: '#000000', // Siyah yazı
                fontWeight: 700, // Kalın font
              }}
            >
              {exp.role}{' '}
              {exp.company && (
                <Box component="span" sx={{ color: '#000000', fontWeight: 700 }}>
                  @ {exp.company}
                </Box>
              )}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
                color: '#000000', // Siyah yazı
                fontWeight: 700, // Kalın font
                mb: 1,
              }}
            >
              {exp.date}
            </Typography>
            <Typography
              sx={{
                maxWidth: '90%',
                mx: 'auto',
                color: '#000000', // Siyah yazı
                fontWeight: 700, // Kalın font
              }}
            >
              {exp.desc}
            </Typography>
          </Box>
        ))}
      </Container>
    </AnimatedPage>
  );
};

export default AboutPage;