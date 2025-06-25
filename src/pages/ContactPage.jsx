import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AnimatedPage from "../components/AnimatedPage";

const ContactPage = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Contact Suleyman Unver - Full Stack Developer in the USA",
      description:
        "Contact Suleiman Unver, a Full Stack Developer in the USA, for web and mobile app development services via email or WhatsApp.",
      keywords:
        "contact developer USA, hire full stack developer USA, software developer contact",
    },
    ca: {
      title: "Contact Suleyman Unver - Software Developer in Canada",
      description:
        "Get in touch with Suleiman Unver, a software developer in Canada, for fintech and web solutions via email or WhatsApp.",
      keywords:
        "contact developer Canada, software developer Toronto, hire developer Canada",
    },
    au: {
      title: "Contact Suleyman Unver - Web Developer in Australia",
      description:
        "Reach out to Suleiman Unver, a web developer in Australia, for startup solutions and app development via email or WhatsApp.",
      keywords:
        "contact developer Australia, web developer Sydney, hire developer Australia",
    },
    default: {
      title: "Contact Suleyman Unver - Full Stack Developer",
      description:
        "Connect with Suleiman Unver, a passionate Full Stack Developer, for project collaborations or technical discussions via email or WhatsApp.",
      keywords:
        "contact full stack developer, hire software developer, developer contact",
    },
  };

  const { title, description, keywords } = countryContent[country];

  return (
    <AnimatedPage>
      <Helmet>
        {/* Helmet içeriği aynı kalıyor */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Suleyman Unver" />
        <link
          rel="canonical"
          href={`https://www.reconceptx.com/contact${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/contact/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/contact/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/contact/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/contact"
        />
        <script type="application/ld+json">
          {/* Schema.org içeriği aynı kalıyor */}
        </script>
      </Helmet>
      <Container
        maxWidth="md" // İçeriğin çok geniş ekranlarda yayılmasını engeller
        sx={{
          // === DEĞİŞİKLİKLER BURADA ===
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh", // Sayfanın en az ekran yüksekliği kadar olmasını sağlar
          pt: { xs: 12, sm: 14 }, // Header için üstten boşluk
          pb: { xs: 8, sm: 12 }, // Alttan boşluk
          bgcolor: "#0A192F",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "primary.main", // Temanın ana rengini kullanmak daha dikkat çekici olur
            fontFamily: "monospace",
            fontWeight: 400,
            mb: 1,
          }}
        >
          What's Next?
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: "clamp(2.5rem, 7vw, 4rem)", // Responsive font boyutu
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          sx={{
            maxWidth: "600px", // Metnin okunabilirliğini artırır
            mb: 4,
            fontWeight: 500,
            lineHeight: 1.6, // Satır yüksekliği ile okunabilirliği artırır
          }}
        >
          I'm passionate about turning ideas into reality and always eager to
          dive into new projects or collaborations. Whether you're envisioning a
          cutting-edge app, need help solving a technical challenge, or just
          want to geek out over code and AI, I'm here for it—reach out and let's
          make something extraordinary!
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            mb: 5,
          }}
        >
          <Button
            href="mailto:unver.jsx@gmail.com"
            variant="outlined"
            startIcon={<EmailIcon />}
            sx={{
              fontFamily: "monospace",
              fontSize: "1rem",
              px: 3,
              py: 1.5,
              color: "primary.main",
              borderColor: "primary.main",
              fontWeight: 700,
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
              "&:hover": {
                bgcolor: "rgba(100, 255, 218, 0.1)",
                transform: "translateY(-3px)",
                borderColor: "primary.main",
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
            startIcon={<WhatsAppIcon />}
            sx={{
              fontFamily: "monospace",
              fontSize: "1rem",
              px: 3,
              py: 1.5,
              color: "primary.main",
              borderColor: "primary.main",
              fontWeight: 700,
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
              "&:hover": {
                bgcolor: "rgba(100, 255, 218, 0.1)", // Temanızın ana renginin şeffaf bir versiyonu
                transform: "translateY(-3px)",
                borderColor: "primary.main",
              },
            }}
          >
            Message on WhatsApp
          </Button>
        </Stack>
        <Stack spacing={1} sx={{ fontFamily: "monospace", color: "#ccd6f6" }}>
          <Typography variant="body2">Phone: +90 535 467 32 85</Typography>
          <Typography variant="body2">Email: unver.jsx@gmail.com</Typography>
          <Typography variant="body2">ANKARA / Turkey</Typography>
        </Stack>
      </Container>
    </AnimatedPage>
  );
};

export default ContactPage;
