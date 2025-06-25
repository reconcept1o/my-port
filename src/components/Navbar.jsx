import React, { useState, useRef, useEffect } from "react";
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
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDeepDivesOpen, setIsDeepDivesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const logoRef = useRef(null); // Fixed typo: Removed unnecessary useField property}
  const intervalId = useRef(null);

  // Scroll davranışını kontrol eden fonksiyon
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    console.log(
      `Scroll: current=${currentScrollY}, last=${lastScrollY.current}, showNavbar=${showNavbar}`
    );
    if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
      setShowNavbar(false);
    } else if (currentScrollY.current || currentScrollY === 0) {
      setShowNavbar(true);
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(controlNavbar);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // Logo animasyonu
  const handleLogoHover = () => {
    let iteration = 0;
    const originalText = "ReconceptX";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      if (logoRef.current) {
        logoRef.current.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      }
      if (iteration >= originalText.length) clearInterval(intervalId.current);
      iteration += 1 / 2;
    }, 45);
  };

  const handleLogoLeave = () => {
    clearInterval(intervalId.current);
    if (logoRef.current) logoRef.current.innerText = "ReconceptX";
  };

  // Dropdown menü işlevleri
  const handleDeepDivesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeepDivesClose = () => {
    setAnchorEl(null);
  };

  // Mobil Drawer’da Deep Dives alt menüsü
  const handleDeepDivesToggle = () => {
    setIsDeepDivesOpen(!isDeepDivesOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setIsDrawerOpen(open);
    setIsDeepDivesOpen(false);
  };

  const navLinks = [
    { to: "/about", label: "About" },
    {
      label: "Deep Dives",
      submenu: [
        { to: "/deep-dives", label: "API Gateway" },
        { to: "/ui-ux", label: "UI/UX Design" },
      ],
    },
    { to: "/mobile-app", label: "Mobile App" },
    { to: "/web-app", label: "Web App" },
    { to: "/llm", label: "LLM" }, // Yeni bağlantı
    { to: "/contact", label: "Contact" },
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250, p: 2, bgcolor: "#64FFDA" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) =>
          link.submenu ? (
            <React.Fragment key={link.label}>
              <ListItem button onClick={handleDeepDivesToggle}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    color: "#000000",
                    fontFamily: "monospace",
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                  }}
                />
                {isDeepDivesOpen ? (
                  <ExpandLessIcon sx={{ color: "#000000" }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: "#000000" }} />
                )}
              </ListItem>
              <Collapse in={isDeepDivesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {link.submenu.map((subLink) => (
                    <ListItem
                      button
                      key={subLink.label}
                      component={Link}
                      to={subLink.to}
                      sx={{ pl: 4 }}
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemText
                        primary={subLink.label}
                        primaryTypographyProps={{
                          color: "#000000",
                          fontFamily: "monospace",
                          fontSize: "clamp(12px, 2.2vw, 14px)",
                          "&:hover": { color: "#333333" },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem
              button
              key={link.label}
              component={Link}
              to={link.to}
              onClick={toggleDrawer(false)}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  color: "#000000",
                  fontFamily: "monospace",
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  "&:hover": { color: "#333333" },
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#64FFDA",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 2px 10px 0px rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        zIndex: 1300,
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
            color: "#000000",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontFamily: "monospace",
            cursor: "pointer",
            "&:hover": { textShadow: "0 0 3px rgba(0, 0, 0, 0.5)" },
          }}
        >
          <span ref={logoRef}>ReconceptX</span>
        </Typography>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: { sm: 2, md: 3 },
          }}
        >
          {navLinks.map((link) =>
            link.submenu ? (
              <Box key={link.label}>
                <Button
                  onClick={handleDeepDivesClick}
                  sx={{
                    color: "#000000",
                    fontFamily: "monospace",
                    fontSize: "clamp(13px, 1.5vw, 15px)",
                    textTransform: "none",
                    py: 1,
                    px: 1.5,
                    "&:hover": {
                      color: "#333333",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                    },
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  {link.label}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleDeepDivesClose}
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: "#64FFDA",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  {link.submenu.map((subLink) => (
                    <MenuItem
                      key={subLink.label}
                      component={Link}
                      to={subLink.to}
                      onClick={handleDeepDivesClose}
                      sx={{
                        color: "#000000",
                        fontFamily: "monospace",
                        fontSize: "clamp(12px, 1.5vw, 14px)",
                        "&:hover": {
                          color: "#333333",
                          bgcolor: "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      {subLink.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button
                key={link.label}
                component={Link}
                to={link.to}
                sx={{
                  color: "#000000",
                  fontFamily: "monospace",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  textTransform: "none",
                  py: 1,
                  px: 1.5,
                  "&:hover": {
                    color: "#333333",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                {link.label}
              </Button>
            )
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ color: "#000000", display: { xs: "flex", sm: "none" } }}
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ zIndex: 1400 }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
