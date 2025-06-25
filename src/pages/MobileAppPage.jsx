import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import MobileVideo from "../assets/video/mobil.mp4"; // Video import edildi

const MobileAppPage = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Suleyman Unver - Mobile App Developer in the USA",
      description:
        "Hire Suleyman Unver, a top mobile app developer in the USA, for expert React Native, MERN stack, and PostgreSQL solutions tailored for American businesses.",
      keywords:
        "mobile app developer USA, React Native developer USA, hire mobile developer USA, mobile app development United States",
    },
    ca: {
      title: "Suleyman Unver - Mobile App Developer in Canada",
      description:
        "Suleyman Unver offers expert mobile app development in Canada, specializing in React Native and MERN stack for seamless, scalable apps for Canadian enterprises.",
      keywords:
        "mobile app developer Canada, React Native developer Toronto, hire mobile developer Canada, mobile app development Canada",
    },
    au: {
      title: "Suleyman Unver - Mobile App Developer in Australia",
      description:
        "Discover Suleyman Unver’s mobile app development services in Australia, delivering React Native and MERN stack solutions for startups and businesses.",
      keywords:
        "mobile app developer Australia, React Native developer Sydney, hire mobile developer Australia, mobile app development Australia",
    },
    default: {
      title: "Suleyman Unver - Mobile App Developer",
      description:
        "Expert mobile app development by Suleyman Unver, specializing in React Native, MERN stack, and scalable mobile solutions for global clients.",
      keywords:
        "mobile app developer, React Native developer, hire mobile app developer, mobile app development",
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
          href={`https://www.reconceptx.com/mobile-app${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/mobile-app/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/mobile-app/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/mobile-app/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/mobile-app"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Mobile App Development Showcase",
            description:
              "A showcase of Suleyman Unver’s mobile app development expertise using React Native and MERN stack.",
            uploadDate: "2025-06-25",
            contentUrl: "https://www.reconceptx.com/assets/video/mobil.mp4",
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
          Mobile App Development
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
          Explore my expertise in building high-performance mobile applications
          using React Native, integrated with MERN stack and PostgreSQL for
          seamless backend connectivity in{" "}
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
            src={MobileVideo}
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
            aria-label="Mobile app development showcase"
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
          Ready to build your next mobile app? Check out my{" "}
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

export default MobileAppPage;
