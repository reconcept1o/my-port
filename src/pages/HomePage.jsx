import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import AnimatedPage from '../components/AnimatedPage';

const HomePage = () => {
  return (
    <AnimatedPage>
      <Container
        sx={{
          minHeight: { xs: "70vh", sm: "80vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 1, sm: 2 },
          bgcolor: "#0A192F", // Arka plan beyaz
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white", // Siyah yazı
            fontFamily: "monospace",
            fontWeight: 700, // Kalın font
            mb: 2,
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white", // Siyah yazı
            fontWeight: 700, // Kalın font
            mb: 1,
          }}
        >
          Suleyman Unver.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white", // Siyah yazı
            fontWeight: 700, // Kalın font
            mb: 2,
          }}
        >
          <TypeAnimation
            sequence={[
              "I craft immersive digital experiences.",
              2000,
              "I am a Full Stack Developer.",
              2000,
              "I am passionate about APIs and LLMs.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>
        <Typography
          sx={{
            maxWidth: "90%",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: "white", // Siyah yazı
            fontWeight: 700, // Kalın font
          }}
        >
          I'm a seasoned Full Stack Developer specializing in the MERN stack and
          PostgreSQL, with a knack for building robust, scalable web and mobile
          applications. My passion lies in creating seamless user experiences,
          optimizing performance, and leveraging cutting-edge technologies like
          APIs and Large Language Models to solve complex challenges. Let's
          build the future of the web together!
        </Typography>
      </Container>
    </AnimatedPage>
  );
};

export default HomePage;