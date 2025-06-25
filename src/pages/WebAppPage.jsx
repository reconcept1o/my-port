import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import WebVideo from "../assets/video/web.mp4"; // Video import edildi

const WebAppPage = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Suleyman Unver - Web App Developer in the USA",
      description:
        "Hire Suleyman Unver for expert web app development in the USA, specializing in Next.js, MERN stack, and scalable web solutions for American businesses.",
      keywords:
        "web app developer USA, Next.js developer USA, hire web developer USA, web app development United States",
    },
    ca: {
      title: "Suleyman Unver - Web App Developer in Canada",
      description:
        "Suleyman Unver provides top-tier web app development in Canada, focusing on Next.js, MERN stack, and seamless web solutions for Canadian enterprises.",
      keywords:
        "web app developer Canada, Next.js developer Toronto, hire web developer Canada, web app development Canada",
    },
    au: {
      title: "Suleyman Unver - Web App Developer in Australia",
      description:
        "Discover Suleyman Unver’s web app development services in Australia, delivering Next.js and MERN stack solutions for startups and businesses.",
      keywords:
        "web app developer Australia, Next.js developer Sydney, hire web developer Australia, web app development Australia",
    },
    default: {
      title: "Suleyman Unver - Web App Developer",
      description:
        "Expert web app development by Suleyman Unver, specializing in Next.js, MERN stack, and scalable web solutions for global clients.",
      keywords:
        "web app developer, Next.js developer, hire web app developer, web app development",
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
          href={`https://www.reconceptx.com/web-app${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/web-app/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/web-app/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/web-app/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/web-app"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Web App Development Showcase",
            description:
              "A showcase of Suleyman Unver’s web app development expertise using Next.js and MERN stack.",
            uploadDate: "2025-06-25",
            contentUrl: "https://www.reconceptx.com/assets/video/web.mp4",
          })}
        </script>
      </Helmet>
      <Container
        sx={{
          py: { xs: 4, sm: 6 },
          textAlign: "center",
          bgcolor: "#0A192F",
          mt: { xs: "64px", sm: 0 }, // Mobil cihazlarda navbar çakışmasını önler
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 700,
            fontFamily: "monospace",
            mb: 3,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Web App Development
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.6,
          }}
        >
          Discover my expertise in crafting scalable web applications using
          Next.js, MERN stack, and PostgreSQL, tailored for businesses in{" "}
          {country === "us"
            ? "the USA"
            : country === "ca"
            ? "Canada"
            : country === "au"
            ? "Australia"
            : "global markets"}
          .
        </Typography>
        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <video
            src={WebVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
            loading="lazy"
            aria-label="Web app development showcase"
          >
            Your browser does not support the video tag.
          </video>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#ccd6f6",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
          }}
        >
          Ready to build your next web app? Check out my{" "}
          <Link
            to="/about"
            style={{ color: "#64ffda", textDecoration: "none" }}
          >
            portfolio
          </Link>{" "}
          or{" "}
          <Link
            to="/contact"
            style={{ color: "#64ffda", textDecoration: "none" }}
          >
            contact me
          </Link>{" "}
          to get started.
        </Typography>
      </Container>
    </AnimatedPage>
  );
};

export default WebAppPage;
