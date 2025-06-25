import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const logoRef = useRef(null); // Logo elementinin referansı
  let intervalId = useRef(null); // Animasyon interval'ını tutmak için

  // --- Scroll Davranışını Kontrol Eden Fonksiyon ---
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // --- YENİ ANİMASYON FONKSİYONU ---
  const handleLogoHover = () => {
    let iteration = 0;
    const originalText = "ReconceptX";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    clearInterval(intervalId.current); // Önceki animasyonu temizle

    intervalId.current = setInterval(() => {
      if (logoRef.current) {
        logoRef.current.innerText = originalText
          .split("")
          .map((letter, index) => {
            // iteration, hangi harflerin çözüleceğini kontrol eder
            if (index < iteration) {
              return originalText[index]; // Çözülmüş harf
            }
            return letters[Math.floor(Math.random() * 26)]; // Henüz çözülmemiş, rastgele harf
          })
          .join("");
      }

      // Tüm harfler çözüldüğünde animasyonu durdur
      if (iteration >= originalText.length) {
        clearInterval(intervalId.current);
      }

      iteration += 1 / 2; // Animasyon hızını buradan ayarlayabilirsiniz. Değeri düşürdükçe yavaşlar.
    }, 45); // Her adım arasındaki süreyi buradan ayarlayabilirsiniz.
  };

  const handleLogoLeave = () => {
    // Mouse çekildiğinde animasyonu durdur ve kelimeyi anında düzelt.
    clearInterval(intervalId.current);
    if (logoRef.current) {
      logoRef.current.innerText = "ReconceptX";
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { to: "/about", label: "01. About" },
    { to: "/contact", label: "02. Contact" },
    { to: "/deep-dives", label: "03. Deep Dives" },
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250, p: 2, bgcolor: "background.default" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.label} component={Link} to={link.to}>
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                color: "secondary.main",
                fontFamily: "monospace",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                "&:hover": { color: "primary.main" },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "background.paper",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
        transition: "top 0.3s ease-in-out",
        top: showNavbar ? "0" : "-100px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1, sm: 3, md: 4 },
          minHeight: { xs: 56, sm: 64 },
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontFamily: "monospace",
            cursor: "pointer",
            "&:hover": {
              textShadow: "0 0 5px rgba(100, 255, 218, 0.7)",
            },
          }}
        >
          <span ref={logoRef}>ReconceptX</span>{" "}
          {/* Tüm kelimeyi bir span içine aldık */}
        </Typography>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: { sm: 2, md: 3 },
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.label}
              component={Link}
              to={link.to}
              sx={{
                color: "secondary.main",
                fontFamily: "monospace",
                fontSize: "clamp(13px, 1.5vw, 15px)",
                textTransform: "none",
                py: 1,
                px: 1.5,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "rgba(100, 255, 218, 0.05)",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
