import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";
import AnimatedPage from "../components/AnimatedPage";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const HomePage = ({ country = "default" }) => {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const countryContent = {
    us: {
      title: "Suleyman Unver - Full Stack Developer in the USA",
      description:
        "Suleyman Unver, a Full Stack Developer specializing in MERN stack and PostgreSQL, crafting scalable web and mobile applications for USA businesses.",
      keywords:
        "full stack developer USA, MERN stack developer, web development USA, PostgreSQL developer, free project consultation",
    },
    ca: {
      title: "Suleyman Unver - Software Developer in Canada",
      description:
        "Suleyman Unver, a software developer delivering fintech and health tech solutions using MERN stack and PostgreSQL for Canadian enterprises.",
      keywords:
        "software developer Canada, MERN stack Toronto, PostgreSQL development, mobile app developer Canada, free project consultation",
    },
    au: {
      title: "Suleyman Unver - Web Developer in Australia",
      description:
        "Suleyman Unver, a web developer building scalable platforms for Australian startups using MERN stack and PostgreSQL expertise.",
      keywords:
        "web developer Australia, MERN stack Sydney, scalable app development, software developer Australia, free project consultation",
    },
    default: {
      title: "Suleyman Unver - Full Stack Developer",
      description:
        "I'm a seasoned Full Stack Developer specializing in the MERN stack and PostgreSQL, with a knack for building robust, scalable web and mobile applications.",
      keywords:
        "full stack developer, MERN stack, PostgreSQL, web development, mobile app development, free project consultation",
    },
  };

  const { title, description, keywords } = countryContent[country];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    if (!email || !request) {
      setError("Please fill in both email and request fields.");
      setLoading(false);
      return;
    }

    try {
      // Firestore’a e-posta ve talebi kaydet
      await addDoc(collection(db, "subscribers"), {
        email,
        request,
        country,
        submittedAt: new Date(),
      });

      setMessage("Thank you! Your request has been submitted successfully.");
      setEmail("");
      setRequest("");
      setRecaptchaToken(null);
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

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
          href={`https://www.reconceptx.com/${
            country === "default" ? "" : country
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suleyman Unver",
            jobTitle: "Full Stack Developer",
            url: `https://www.reconceptx.com/${
              country === "default" ? "" : country
            }`,
            description: description,
            sameAs: [
              "www.linkedin.com/in/süleyman-ünver-9b3950245",
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
          pt: { xs: 8, sm: 10 },
          pb: 4,
          minHeight: { xs: "70vh", sm: "80vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 1, sm: 2 },
          bgcolor: "#0A192F",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontFamily: "monospace",
            fontWeight: "bold",
            mb: 2,
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
          }}
        >
          Hi, My name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 1,
            fontSize: "clamp(3rem, 8vw, 5rem)",
          }}
        >
          Suleyman Unver.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 2,
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
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
            color: "white",
            fontWeight: "bold",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          I'm a seasoned Full Stack Developer specializing in the MERN stack and
          PostgreSQL, with a knack for building robust, scalable web and mobile
          applications. My passion lies in creating seamless user experiences,
          optimizing performance, and leveraging cutting-edge technologies like
          APIs and Large Language Models to solve complex challenges. Let's
          build the future of the web together!
        </Typography>
        {/* E-posta ve Talep Formu */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: "600px",
            width: "100%",
            bgcolor: "rgba(10, 25, 47, 0.85)",
            p: 3,
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#64ffda",
              fontFamily: "monospace",
              mb: 2,
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
            }}
          >
            Get Free Consulting!
          </Typography>
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2, bgcolor: "white", borderRadius: 4 }}
          />
          <TextField
            fullWidth
            label="Your Request (e.g., Mobile App, Web App, LLM)"
            multiline
            rows={4}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            required
            sx={{ mb: 2, bgcolor: "white", borderRadius: 4 }}
          />
          <ReCAPTCHA
            sitekey="6LfmeG0rAAAAAA4w3gAZlR9S_gx6LUiny2j9RHGf"
            onChange={(token) => setRecaptchaToken(token)}
            sx={{ mb: 2 }}
          />
          {message && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {message}
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={loading || !recaptchaToken}
            sx={{
              bgcolor: "#64ffda",
              color: "#0a192f",
              fontFamily: "monospace",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              "&:hover": { bgcolor: "#4ad0b0" },
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </Container>
    </AnimatedPage>
  );
};

export default HomePage;
