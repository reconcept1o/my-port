import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Privacy Policy - Suleyman Unver, USA",
      description:
        "Privacy Policy for reconceptx.com, outlining how we collect, use, and protect your data in the USA.",
      keywords: "privacy policy, data protection, USA, cookies, reconceptx",
    },
    ca: {
      title: "Privacy Policy - Suleyman Unver, Canada",
      description:
        "Privacy Policy for reconceptx.com, detailing data collection and protection practices in Canada.",
      keywords: "privacy policy, data protection, Canada, cookies, reconceptx",
    },
    au: {
      title: "Privacy Policy - Suleyman Unver, Australia",
      description:
        "Privacy Policy for reconceptx.com, explaining data handling and protection in Australia.",
      keywords:
        "privacy policy, data protection, Australia, cookies, reconceptx",
    },
    default: {
      title: "Privacy Policy - Suleyman Unver",
      description:
        "Privacy Policy for reconceptx.com, describing how we collect, use, and safeguard your personal information.",
      keywords: "privacy policy, data protection, cookies, reconceptx",
    },
  };

  const { title, description, keywords } = countryContent[country];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Suleyman Unver" />
        <link
          rel="canonical"
          href={`https://www.reconceptx.com/privacy-policy${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/privacy-policy/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/privacy-policy/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/privacy-policy/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/privacy-policy"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: `https://www.reconceptx.com/privacy-policy${
              country === "default" ? "" : `/${country}`
            }`,
            description: description,
          })}
        </script>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Effective Date: June 25, 2025
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to{" "}
          <Link href="https://www.reconceptx.com" color="primary">
            reconceptx.com
          </Link>
          , operated by Suleyman Unver. This Privacy Policy explains how we
          collect, use, disclose, and protect your information when you visit
          our website or use our services.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect the following types of information:
          <ul>
            <li>
              <strong>Form Data</strong>: When you submit a contact form, we
              collect your email address, request details, and other information
              you provide. This data is stored securely in our database.
            </li>
            <li>
              <strong>Cookies and Tracking</strong>: We use cookies for
              analytics and functionality (e.g., spam protection). These cookies
              help us understand site usage and enhance security.
            </li>
            <li>
              <strong>Usage Data</strong>: We may collect information about how
              you interact with our site, such as pages visited and time spent,
              through analytics tools.
            </li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use your information to:
          <ul>
            <li>Respond to your inquiries and provide services.</li>
            <li>Improve our website and services through analytics.</li>
            <li>Ensure site security and prevent fraud.</li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Cookies and Consent
        </Typography>
        <Typography variant="body1" paragraph>
          Our site uses a cookie consent banner to obtain your permission for
          non-essential cookies. You can accept, reject, or customize your
          cookie preferences. For more details, see our{" "}
          <Link href="/privacy-policy" color="primary">
            Cookie Policy
          </Link>
          .
        </Typography>
        <Typography variant="h4" gutterBottom>
          Data Storage and Security
        </Typography>
        <Typography variant="body1" paragraph>
          Your data is stored securely with industry-standard measures. We
          strive to protect your information, but no online transmission is 100%
          secure.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location, you may have rights to access, correct, or
          delete your data. To exercise these rights, contact us at{" "}
          <Link href="mailto:unver.jsx@gmail.com" color="primary">
            unver.jsx@gmail.com
          </Link>
          .
        </Typography>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For questions about this Privacy Policy, contact us at{" "}
          <Link href="mailto:unver.jsx@gmail.com" color="primary">
            unver.jsx@gmail.com
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
