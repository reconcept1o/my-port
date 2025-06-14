import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"; // CssBaseline eklendi
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DeepDivesPage from "./pages/DeepDivesPage"; // YENİ SAYFAYI IMPORT ET
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#64ffda" }, // Neon turkuaz
    secondary: { main: "#ccd6f6" }, // Açık lavanta-gri (genel metinler için iyi)
    text: {
      primary: "#8892b0", // Daha koyu gri-mavi (paragraflar için)
      secondary: "#a8b2d1", // Biraz daha açık gri-mavi (alt başlıklar, ikonlar)
    },
    background: {
      default: "#0a192f", // Koyu gece mavisi
      paper: "rgba(10, 25, 47, 0.85)", // Yarı saydam koyu mavi (kartlar, appbar vb.)
    },
    action: {
      // Hover, focus durumları için
      hover: "rgba(100, 255, 218, 0.08)",
      selected: "rgba(100, 255, 218, 0.16)",
    },
  },
  typography: {
    fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', // Monospace ağırlıklı font ailesi
    fontSize: 14, // Temel font boyutu
    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    }, // Ana başlıklar (örn: "Süleyman Ünver")
    h2: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    }, // Bölüm başlıkları (örn: "About Me")
    h3: {
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    }, // Alt bölüm başlıkları
    h4: {
      fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    },
    h5: {
      fontSize: "clamp(1rem, 2vw, 1.5rem)",
      fontWeight: 500,
      color: "#a8b2d1",
    },
    h6: {
      fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
      fontWeight: 500,
      color: "#a8b2d1",
    },
    body1: {
      fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
      lineHeight: 1.6,
      color: "#8892b0",
    }, // Ana metin
    body2: { fontSize: "clamp(0.8rem, 1.5vw, 1rem)", color: "#8892b0" }, // Daha küçük metinler, notlar
    button: { textTransform: "none", fontWeight: 500 }, // Buton metinleri
    caption: { fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)", color: "#8892b0" }, // Açıklama metinleri
  },
  components: {
    // Genel component stilleri
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(10, 25, 47, 0.85)", // Temadaki paper rengi
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* Tarayıcı varsayılan stillerini sıfırlar ve tema ile daha iyi uyum sağlar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          bgcolor: "background.default", // Tüm sayfanın arka plan rengi
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: "100%", // Ana içerik alanının maksimum genişliği
            px: { xs: 2, sm: 3, md: 4 }, // İçerik alanına genel padding
            py: { xs: 3, sm: 4 },
            overflowX: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/deep-dives" element={<DeepDivesPage />} />{" "}
            {/* YENİ ROUTE */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
