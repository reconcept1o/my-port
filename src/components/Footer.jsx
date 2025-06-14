import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
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
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <IconButton
          href="https://github.com/reconcept1o"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.primary", "&:hover": { color: "primary.main" } }}
        >
          <GitHubIcon sx={{ fontSize: "clamp(0.9rem, 3vw, 1.25rem)" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.primary", "&:hover": { color: "primary.main" } }}
        >
          <LinkedInIcon sx={{ fontSize: "clamp(0.9rem, 3vw, 1.25rem)" }} />
        </IconButton>
      </Box>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
          color: "text.secondary",
          mb: 0.5,
        }}
      >
        Crafting the future, one line of code at a time.
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
          color: "text.primary",
        }}
      >
        Designed & Built by Süleyman Ünver |{" "}
        <Typography
          component="a"
          href="https://github.com/reconcept1o/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: "inherit",
            fontFamily: "monospace",
          }}
        >
          View Source
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
