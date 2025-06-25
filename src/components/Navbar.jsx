import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  // Linkleri güncelleyelim ve sıralayalım
  const navLinks = [
    { to: "/about", label: "01. About" },
    { to: "/contact", label: "02. Contact" },
    { to: "/deep-dives", label: "03. Deep Dives" }, // YENİ LİNK
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250, p: 2, bgcolor: "background.default" }} // Arka plan rengini tema ile uyumlu hale getirdim
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
                color: "secondary.main", // Drawer içindeki link rengini ana linklerle aynı yaptım
                fontFamily: "monospace",
                fontSize: "clamp(14px, 2.5vw, 16px)", // Biraz daha okunaklı boyut
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
        bgcolor: "background.paper", // Temanızdaki paper rengi
        backdropFilter: "blur(10px)",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.05)", // Daha yumuşak bir gölge
        borderBottom: "1px solid rgba(100, 255, 218, 0.1)", // primary.main rengine hafif referans
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1, sm: 3, md: 4 }, // Padding'i biraz artırdım
          minHeight: { xs: 56, sm: 64 }, // Standart AppBar yükseklikleri
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "clamp(18px, 2.5vw, 22px)", // Logoyu biraz büyüttüm
            fontFamily: "monospace", // Diğer linklerle uyumlu
            "&:hover": {
              textShadow: "0 0 5px rgba(100, 255, 218, 0.7)", // Hafif bir parlama efekti
            },
          }}
        >
          ReconceptX
        </Typography>

        {/* Centered Navigation Links for Desktop */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center", // Dikeyde ortalamak için
            gap: { sm: 2, md: 3 }, // Linkler arası boşluk
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
                fontSize: "clamp(13px, 1.5vw, 15px)", // Boyutu hafif artırdım
                textTransform: "none",
                py: 1,
                px: 1.5,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "rgba(100, 255, 218, 0.05)", // Hover'da hafif arka plan
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Menu Icon for Mobile */}
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
