import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import LLMVideo from "../assets/video/LLM.mp4"; // Video import edildi

const LLMPage = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Suleyman Unver - LLM Solutions Developer in the USA",
      description:
        "Hire Suleyman Unver for advanced LLM (Large Language Model) solutions in the USA, specializing in AI-driven applications and integrations for American businesses.",
      keywords:
        "LLM developer USA, AI developer USA, hire large language model developer USA, LLM solutions United States",
    },
    ca: {
      title: "Suleyman Unver - LLM Solutions Developer in Canada",
      description:
        "Suleyman Unver offers expert LLM development services in Canada, focusing on AI-powered solutions and integrations for Canadian enterprises.",
      keywords:
        "LLM developer Canada, AI developer Toronto, hire large language model developer Canada, LLM solutions Canada",
    },
    au: {
      title: "Suleyman Unver - LLM Solutions Developer in Australia",
      description:
        "Discover Suleyman Unver’s LLM development services in Australia, delivering AI-driven solutions for startups and businesses.",
      keywords:
        "LLM developer Australia, AI developer Sydney, hire large language model developer Australia, LLM solutions Australia",
    },
    default: {
      title: "Suleyman Unver - LLM Developer",
      description:
        "Expert LLM development by Suleyman Unver, specializing in large language model solutions and AI-driven applications for global clients.",
      keywords:
        "LLM developer, large language model developer, hire AI developer, LLM solutions",
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
          href={`https://www.reconceptx.com/llm${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/llm/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/llm/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/llm/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/llm"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "LLM Solutions Showcase",
            description:
              "A showcase of Suleyman Unver’s expertise in large language model (LLM) development.",
            uploadDate: "2025-06-25",
            contentUrl: "https://www.reconceptx.com/assets/video/llm.mp4",
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
          LLM Solutions
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
          Explore my expertise in developing advanced large language model (LLM)
          solutions, leveraging AI technologies to create intelligent
          applications for businesses in{" "}
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
            src={LLMVideo}
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
            aria-label="LLM solutions showcase"
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
          Ready to build your next AI-powered solution? Check out my{" "}
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

export default LLMPage;
