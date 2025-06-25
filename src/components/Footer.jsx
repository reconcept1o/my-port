import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom"; // react-router-dom'dan Link
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 1, sm: 2 },
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        bgcolor: "background.paper", // rgba(10, 25, 47, 0.85)
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <IconButton
          href="https://github.com/reconcept1o"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            "&:hover": { color: "#64ffda" },
          }}
        >
          <GitHubIcon sx={{ fontSize: "clamp(1.2rem, 4vw, 1.75rem)" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            "&:hover": { color: "#64ffda" },
          }}
        >
          <LinkedInIcon sx={{ fontSize: "clamp(1.2rem, 4vw, 1.75rem)" }} />
        </IconButton>
      </Box>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
          color: "#ffffff",
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        Crafting the future, one line of code at a time.
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
          color: "#ffffff",
          fontWeight: 700,
        }}
      >
        Designed & Built by Süleyman Ünver |{" "}
        <Typography
          component="a"
          href="https://github.com/reconcept1o/my-port"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#64ffda",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: "inherit",
            fontFamily: "monospace",
            fontWeight: 700,
          }}
        >
          View Source
        </Typography>
        {" | "}
        <Typography
          component={Link}
          to="/privacy-policy"
          sx={{
            color: "#64ffda",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: "inherit",
            fontFamily: "monospace",
            fontWeight: 700,
          }}
        >
          Privacy Policy
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
