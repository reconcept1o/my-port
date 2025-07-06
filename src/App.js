import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import CookieConsent from "react-cookie-consent";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DeepDivesPage from "./pages/DeepDivesPage";
import UIUXDesignPage from "./pages/UIUXDesignPage";
import MobileAppPage from "./pages/MobileAppPage";
import WebAppPage from "./pages/WebAppPage";
import LLMPage from "./pages/LLMPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy"; // YENİ EKLENDİ
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from './Animation/CustomCursor'


// Theme tanımı (Değişiklik yok)
const theme = createTheme({
  palette: {
    primary: { main: "#64ffda" },
    secondary: { main: "#ccd6f6" },
    text: { primary: "#8892b0", secondary: "#a8b2d1" },
    background: { default: "#0a192f", paper: "rgba(10, 25, 47, 0.85)" },
    action: {
      hover: "rgba(100, 255, 218, 0.08)",
      selected: "rgba(100, 255, 218, 0.16)",
    },
  },
  typography: {
    fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
    fontSize: 14,
    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    },
    h2: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    },
    h3: {
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      fontWeight: 600,
      color: "#ccd6f6",
    },
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
    },
    body2: { fontSize: "clamp(0.8rem, 1.5vw, 1rem)", color: "#8892b0" },
    button: { textTransform: "none", fontWeight: 500 },
    caption: { fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)", color: "#8892b0" },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: "4px" } } },
    MuiPaper: {
      styleOverrides: { root: { backgroundColor: "rgba(10, 25, 47, 0.85)" } },
    },
  },
});

// Google Consent Mode'u güncellemek için yardımcı fonksiyon (Değişiklik yok)
const handleConsentUpdate = (accepted) => {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: accepted ? "granted" : "denied",
      ad_storage: accepted ? "granted" : "denied",
    });
  }
};

function App() {
  return (
    <HelmetProvider>
<CustomCursor />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
            bgcolor: "background.default",
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
              maxWidth: "100%",
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 3, sm: 4 },
              overflowX: "hidden",
              marginBottom: { xs: "56px", sm: "64px" },
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage country="default" />} />
              <Route path="/us" element={<HomePage country="us" />} />
              <Route path="/ca" element={<HomePage country="ca" />} />
              <Route path="/au" element={<HomePage country="au" />} />
              <Route path="/about" element={<AboutPage country="default" />} />
              <Route path="/about/us" element={<AboutPage country="us" />} />
              <Route path="/about/ca" element={<AboutPage country="ca" />} />
              <Route path="/about/au" element={<AboutPage country="au" />} />
              <Route
                path="/contact"
                element={<ContactPage country="default" />}
              />
              <Route
                path="/contact/us"
                element={<ContactPage country="us" />}
              />
              <Route
                path="/contact/ca"
                element={<ContactPage country="ca" />}
              />
              <Route
                path="/contact/au"
                element={<ContactPage country="au" />}
              />
              <Route
                path="/deep-dives"
                element={<DeepDivesPage country="default" />}
              />
              <Route
                path="/deep-dives/us"
                element={<DeepDivesPage country="us" />}
              />
              <Route
                path="/deep-dives/ca"
                element={<DeepDivesPage country="ca" />}
              />
              <Route
                path="/deep-dives/au"
                element={<DeepDivesPage country="au" />}
              />
              <Route
                path="/ui-ux"
                element={<UIUXDesignPage country="default" />}
              />
              <Route
                path="/ui-ux/us"
                element={<UIUXDesignPage country="us" />}
              />
              <Route
                path="/ui-ux/ca"
                element={<UIUXDesignPage country="ca" />}
              />
              <Route
                path="/ui-ux/au"
                element={<UIUXDesignPage country="au" />}
              />
              <Route
                path="/mobile-app"
                element={<MobileAppPage country="default" />}
              />
              <Route
                path="/mobile-app/us"
                element={<MobileAppPage country="us" />}
              />
              <Route
                path="/mobile-app/ca"
                element={<MobileAppPage country="ca" />}
              />
              <Route
                path="/mobile-app/au"
                element={<MobileAppPage country="au" />}
              />
              <Route
                path="/web-app"
                element={<WebAppPage country="default" />}
              />
              <Route path="/web-app/us" element={<WebAppPage country="us" />} />
              <Route path="/web-app/ca" element={<WebAppPage country="ca" />} />
              <Route path="/web-app/au" element={<WebAppPage country="au" />} />
              <Route path="/llm" element={<LLMPage country="default" />} />
              <Route path="/llm/us" element={<LLMPage country="us" />} />
              <Route path="/llm/ca" element={<LLMPage country="ca" />} />
              <Route path="/llm/au" element={<LLMPage country="au" />} />
              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy country="default" />}
              />
              <Route
                path="/privacy-policy/us"
                element={<PrivacyPolicy country="us" />}
              />
              <Route
                path="/privacy-policy/ca"
                element={<PrivacyPolicy country="ca" />}
              />
              <Route
                path="/privacy-policy/au"
                element={<PrivacyPolicy country="au" />}
              />
              {/* YENİ ÇEREZ POLİTİKASI ROUTE'LARI */}
              <Route
                path="/cookie-policy"
                element={<CookiePolicy country="default" />}
              />
              <Route
                path="/cookie-policy/us"
                element={<CookiePolicy country="us" />}
              />
              <Route
                path="/cookie-policy/ca"
                element={<CookiePolicy country="ca" />}
              />
              <Route
                path="/cookie-policy/au"
                element={<CookiePolicy country="au" />}
              />
            </Routes>
            <Analytics />
          </Box>
          <Footer />

          {/* ÇEREZ UYARI BİLEŞENİ (GÜNCELLENDİ) */}
          <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Decline"
            cookieName="suleymanunver-portfolio-consent"
            style={{
              background: "#0A192F",
              borderTop: "1px solid #64ffda",
              fontSize: "14px",
            }}
            buttonStyle={{
              color: "#0A192F",
              background: "#64ffda",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
            declineButtonStyle={{
              background: "transparent",
              color: "#8892b0",
              fontSize: "14px",
            }}
            expires={150}
            enableDeclineButton
            onAccept={() => handleConsentUpdate(true)}
            onDecline={() => handleConsentUpdate(false)}
          >
            This site uses cookies to improve your experience and for analytics.
            See our{" "}
            <a
              href="/cookie-policy"
              style={{ color: "#64ffda", textDecoration: "underline" }}
            >
              Cookie Policy
            </a>{" "}
            for details.
          </CookieConsent>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
