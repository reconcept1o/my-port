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

  const navLinks = [
    { to: "/about", label: "01. About" },
    { to: "/contact", label: "02. Contact" },
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250, p: 2 }}
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
                color: "secondary",
                fontFamily: "monospace",
                fontSize: "clamp(12px, 2vw, 14px)",
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
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1, sm: 2 },
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
            fontSize: "clamp(16px, 2vw, 20px)",
          }}
        >
          Logic & Loop
        </Typography>

        {/* Centered Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
            justifyContent: "center",
            gap: 2,
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
                fontSize: "clamp(12px, 2vw, 14px)",
                textTransform: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Menu Icon for Mobile */}
        <IconButton
          color="primary"
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleDrawer(true)}
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
