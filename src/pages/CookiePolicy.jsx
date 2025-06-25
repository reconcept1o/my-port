import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

const CookiePolicy = ({ country = "default" }) => {
  const countryContent = {
    us: {
      title: "Cookie Policy - Suleyman Unver, USA",
      description:
        "Cookie Policy for reconceptx.com, explaining how we use cookies and similar technologies in the USA.",
      keywords: "cookie policy, cookies, data tracking, USA, reconceptx",
    },
    ca: {
      title: "Cookie Policy - Suleyman Unver, Canada",
      description:
        "Cookie Policy for reconceptx.com, detailing cookie usage and management in Canada.",
      keywords: "cookie policy, cookies, data tracking, Canada, reconceptx",
    },
    au: {
      title: "Cookie Policy - Suleyman Unver, Australia",
      description:
        "Cookie Policy for reconceptx.com, outlining cookie practices in Australia.",
      keywords: "cookie policy, cookies, data tracking, Australia, reconceptx",
    },
    default: {
      title: "Cookie Policy - Suleyman Unver",
      description:
        "Cookie Policy for reconceptx.com, describing how we use cookies and similar technologies to enhance your experience.",
      keywords: "cookie policy, cookies, data tracking, reconceptx",
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
          href={`https://www.reconceptx.com/cookie-policy${
            country === "default" ? "" : `/${country}`
          }`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/cookie-policy/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/cookie-policy/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/cookie-policy/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/cookie-policy"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookie Policy",
            url: `https://www.reconceptx.com/cookie-policy${
              country === "default" ? "" : `/${country}`
            }`,
            description: description,
          })}
        </script>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Cookie Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Effective Date: June 25, 2025
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to{" "}
          <Link href="https://www.reconceptx.com" color="primary">
            reconceptx.com
          </Link>
          , operated by Suleyman Unver. This Cookie Policy explains how we use
          cookies and similar technologies to improve your experience on our
          website.
        </Typography>
        <Typography variant="h4" gutterBottom>
          What Are Cookies?
        </Typography>
        <Typography variant="body1" paragraph>
          Cookies are small text files stored on your device when you visit a
          website. They help us provide functionality, analyze site performance,
          and deliver personalized content. We may also use similar
          technologies, such as pixels or local storage, for similar purposes.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Types of Cookies We Use
        </Typography>
        <Typography variant="body1" paragraph>
          We use the following types of cookies:
          <ul>
            <li>
              <strong>Essential Cookies</strong>: These cookies are necessary
              for the website to function properly, such as enabling navigation
              and access to secure areas. You cannot opt out of these cookies.
            </li>
            <li>
              <strong>Analytics Cookies</strong>: These cookies help us
              understand how visitors interact with our site, such as which
              pages are visited most often. This data is used to improve our
              services.
            </li>
            <li>
              <strong>Functional Cookies</strong>: These cookies enhance website
              functionality by remembering your preferences, such as language
              settings.
            </li>
            <li>
              <strong>Security Cookies</strong>: These cookies help protect our
              site and users by detecting and preventing fraudulent activities,
              such as spam submissions.
            </li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Cookie Consent
        </Typography>
        <Typography variant="body1" paragraph>
          When you visit our site, we display a cookie consent banner to obtain
          your permission for non-essential cookies. You can accept, reject, or
          customize your cookie preferences at any time through the consent
          management tool on our site.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Managing Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          You can control cookies through your browser settings to block or
          delete them. Note that disabling cookies may affect the functionality
          of our website. For more information on managing cookies, visit your
          browser’s help section.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Third-Party Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          Some cookies may be set by third-party services we use, such as
          analytics or security tools. These third parties may collect data
          about your browsing activity across websites. We do not control these
          cookies, but you can manage them through our consent tool or the third
          party’s privacy settings.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location, you may have rights to access, manage, or
          delete data collected through cookies. To exercise these rights,
          contact us at{" "}
          <Link href="mailto:unver.jsx@gmail.com" color="primary">
            unver.jsx@gmail.com
          </Link>
          .
        </Typography>
        <Typography variant="h4" gutterBottom>
          Updates to This Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or legal requirements. The updated policy will be
          posted on this page with a revised effective date.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For questions about this Cookie Policy, contact us at{" "}
          <Link href="mailto:unver.jsx@gmail.com" color="primary">
            unver.jsx@gmail.com
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default CookiePolicy;
