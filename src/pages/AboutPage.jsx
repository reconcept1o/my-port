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
    {
      role: "Full Stack Developer",
      company: "Sanatkardan.com",
      date: "2024 - Present",
      desc: "Leading the full software development lifecycle, I design and implement high-performance web applications. Currently spearheading the development of an innovative e-commerce warehouse management system, integrating Large Language Models (LLMs) to enhance operational efficiency and user experience.",
    },
    {
      role: "Backend Developer",
      company: "Turkafone.com.tr",
      date: "2023 - 2024",
      desc: "Developed and maintained scalable web applications using the MERN stack, focusing on robust API design and database optimization. Collaborated with cross-functional teams to deliver seamless integrations and improve system reliability.",
    },
    {
      role: "Frontend Developer",
      company: "Benan Tut E-Commerce",
      date: "2022 - 2023",
      desc: "As a Junior React Developer, I contributed to project-based initiatives, building modern, responsive, and performant user interfaces. Improved page load times by optimizing React components and implementing lazy loading, enhancing customer engagement.",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "",
      date: "2020 - 2022",
      desc: "Delivered custom web solutions for diverse clients, specializing in the MERN stack and PostgreSQL. Designed and developed responsive, scalable applications, including e-commerce platforms and content management systems. Integrated third-party APIs and optimized performance, achieving an average 30% improvement in load times across projects.",
    },
  ];

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
          href={`https://www.reconceptx.com/about${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/about/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/about/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/about/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/about"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suleyman Unver",
            jobTitle: "Full Stack Developer",
            url: `https://www.reconceptx.com/about${
              country === "default" ? "" : `/${country}`
            }`,
            description: description,
            sameAs: [
              "https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245",
              "https://github.com/reconcept1o",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry:
                country === "us"
                  ? "US"
                  : country === "ca"
                  ? "CA"
                  : country === "au"
                  ? "AU"
                  : "Global",
            },
          })}
        </script>
      </Helmet>
      <Container
        sx={{
          py: { xs: 2, sm: 4 },
          textAlign: "center",
          bgcolor: "#0A192F",
          mt: { xs: "64px", sm: 0 }, // Adds 64px margin-top on mobile (xs), 0 on larger screens
        }}
      >
        <Stack
          direction={{ xs: "row", sm: "column" }}
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: { xs: "80%", sm: "clamp(100px, 20vw, 200px)" },
                height: "1px",
                bgcolor: "white",
                mx: "auto",
                mt: 1,
              },
            }}
          >
            About Me
          </Typography>
          <Box
            component="img"
            src={profilePhoto}
            alt="Süleyman Ünver"
            sx={{
              width: { xs: "100px", sm: "120px" },
              height: { xs: "100px", sm: "120px" },
              borderRadius: "50%",
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
              objectFit: "cover",
            }}
          />
        </Stack>

        <Typography
          sx={{
            mb: 2,
            color: "white",
            fontWeight: 700,
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          Hello! I'm Süleyman Ünver, a passionate Full Stack Developer with a
          love for crafting innovative web solutions. My journey began with
          frontend development using React, evolving into full-stack expertise
          with the MERN stack and PostgreSQL. At Sanatkardan.com, I lead
          end-to-end projects, from architecting scalable systems to integrating
          cutting-edge technologies like Large Language Models (LLMs) for
          advanced warehouse management solutions.
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: "white",
            fontWeight: 500,
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          My mission is to create seamless, high-performance applications that
          solve real-world problems. I thrive on continuous learning, staying
          ahead of industry trends, and contributing to the tech community
          through knowledge sharing. Whether it's optimizing APIs, designing
          intuitive UIs, or exploring AI-driven innovations, I'm driven to make
          a global impact in software development.
        </Typography>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 1,
            justifyItems: { xs: "center", sm: "center" },
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          {skills.map((skill) => (
            <ListItem
              key={skill}
              sx={{
                fontFamily: "monospace",
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                color: "white",
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{ color: "white", mr: 1, fontWeight: 700 }}
              >
                ▹
              </Box>
              {skill}
            </ListItem>
          ))}
        </List>

        <Typography
          variant="h2"
          sx={{
            mt: 4,
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            "&:after": {
              content: '""',
              display: "block",
              width: { xs: "80%", sm: "clamp(100px, 20vw, 200px)" },
              height: "1px",
              bgcolor: "white",
              ml: { xs: 0, sm: 2 },
              mt: { xs: 1, sm: 0 },
            },
          }}
        >
          Experience
        </Typography>
        {experiences.map((exp) => (
          <Box
            key={exp.company || exp.role}
            sx={{ mb: 3, textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 0.5,
                color: "white",
                fontWeight: 700,
              }}
            >
              {exp.role}{" "}
              {exp.company && (
                <Box component="span" sx={{ color: "white", fontWeight: 700 }}>
                  @ {exp.company}
                </Box>
              )}
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "clamp(0.625rem, 2vw, 0.75rem)",
                color: "white",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {exp.date}
            </Typography>
            <Typography
              sx={{
                maxWidth: "90%",
                mx: "auto",
                color: "white",
                fontWeight: 700,
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
