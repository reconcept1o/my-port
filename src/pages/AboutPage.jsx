import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "../components/AnimatedPage";
import profilePhoto from "../assets/1.jpg";

const AboutPage = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "About Suleyman Unver - Full Stack Developer in the USA",
      description:
        "Learn about Suleyman Unver, a Full Stack Developer delivering scalable web and mobile solutions for USA-based businesses using MERN stack and PostgreSQL.",
      keywords:
        "about full stack developer USA, software developer USA, MERN stack USA",
    },
    ca: {
      title: "About Suleyman Unver - Software Developer in Canada",
      description:
        "Discover Suleyman Unver, a software developer specializing in fintech and health tech solutions for Canadian enterprises.",
      keywords:
        "about software developer Canada, MERN stack Toronto, full stack developer Canada",
    },
    au: {
      title: "About Suleyman Unver - Web Developer in Australia",
      description:
        "Meet Suleyman Unver, a web developer crafting innovative solutions for Australian startups and businesses with expertise in MERN stack and PostgreSQL.",
      keywords:
        "about web developer Australia, software developer Sydney, MERN stack Australia",
    },
    default: {
      title: "About Suleyman Unver - Full Stack Developer",
      description:
        "Learn about Suleyman Unver, a passionate Full Stack Developer specializing in MERN stack, PostgreSQL, and AI-driven solutions for global clients.",
      keywords:
        "about full stack developer, MERN stack developer, software developer",
    },
  };

  const { title, description, keywords } = countryContent[country];

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js & Next.js",
    "Node.js & Express.js",
    "Redux & Zustand",
    "HTML5 & CSS3",
    "Tailwind CSS & Styled-Components",
    "MongoDB",
    "PostgreSQL",
    "REST & GraphQL APIs",
    "Redis & BullMQ",
    "Git & GitHub",
    "Docker & Vercel",
    "Jest & Testing Library",
    "Web Performance Optimization",
    "LLM Integrations",
  ];

  const experiences = [
    // ... (deneyimleriniz burada aynı kalıyor)
  ];

  return (
    <AnimatedPage>
      <Helmet>{/* Helmet içeriği aynı kalıyor */}</Helmet>
      <Container
        maxWidth="lg" // Okunabilirlik için maksimum genişlik eklendi
        sx={{
          // === DEĞİŞİKLİKLER BURADA ===
          pt: { xs: 12, sm: 14 }, // Header için bolca boşluk (paddingTop)
          pb: 8, // Alt tarafa da yeterli boşluk (paddingBottom)
          bgcolor: "#0A192F",
          color: "white", // Varsayılan metin rengini beyaz yapalım
        }}
      >
        <Stack
          // === DÜZEN İYİLEŞTİRMESİ ===
          direction={{ xs: "column", sm: "row" }} // Mobilde dikey, masaüstünde yatay
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            alignItems: "center",
            mb: 5,
          }}
        >
          {/* Metin İçeriği */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                position: "relative",
                display: "inline-block", // After elementinin metin genişliğine uyması için
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -10,
                  width: "60%",
                  height: "2px",
                  bgcolor: "primary.main", // Temanızdaki ana rengi kullanmak daha iyidir
                },
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                mt: 4,
                maxWidth: "600px",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Hello! I'm Süleyman Ünver, a passionate Full Stack Developer with
              a love for crafting innovative web solutions. My journey began
              with frontend development using React, evolving into full-stack
              expertise with the MERN stack and PostgreSQL.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: "600px",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              My mission is to create seamless, high-performance applications
              that solve real-world problems. I thrive on continuous learning
              and exploring AI-driven innovations to make a global impact in
              software development.
            </Typography>
          </Box>

          {/* Profil Fotoğrafı */}
          <Box
            component="img"
            src={profilePhoto}
            alt="Süleyman Ünver"
            sx={{
              width: { xs: 150, sm: 200, md: 250 },
              height: { xs: 150, sm: 200, md: 250 },
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid white",
              boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
            }}
          />
        </Stack>

        {/* Yetenekler Bölümü */}
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            My Tech Stack
          </Typography>
          <List
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Daha esnek grid yapısı
              gap: 1,
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            {skills.map((skill) => (
              <ListItem
                key={skill}
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", mr: 1, fontWeight: 700 }}
                >
                  ▹
                </Box>
                {skill}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Deneyim Bölümü */}
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            Experience
          </Typography>
          {experiences.map((exp) => (
            <Box
              key={exp.company || exp.role}
              sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {exp.role}{" "}
                {exp.company && (
                  <Box component="span" sx={{ color: "primary.main" }}>
                    @ {exp.company}
                  </Box>
                )}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  color: "#ccd6f6",
                  my: 1,
                }}
              >
                {exp.date}
              </Typography>
              <Typography sx={{ lineHeight: 1.6, fontWeight: 500 }}>
                {exp.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </AnimatedPage>
  );
};

export default AboutPage;
