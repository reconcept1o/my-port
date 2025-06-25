import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";
import AnimatedPage from "../components/AnimatedPage";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [country, setCountry] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const countryContent = {
    us: {
      title: "Suleyman Unver - Full Stack Developer in the USA",
      description:
        "Suleyman Unver, a Full Stack Developer specializing in MERN stack and PostgreSQL, crafting scalable web and mobile applications for USA businesses.",
      keywords:
        "full stack developer USA, MERN stack developer, web development USA, PostgreSQL developer, free consulting",
    },
    ca: {
      title: "Suleyman Unver - Software Developer in Canada",
      description:
        "Suleyman Unver, a software developer delivering fintech and health tech solutions using MERN stack and PostgreSQL for Canadian enterprises.",
      keywords:
        "software developer Canada, MERN stack Toronto, PostgreSQL development, mobile app developer Canada, free consulting",
    },
    au: {
      title: "Suleyman Unver - Web Developer in Australia",
      description:
        "Suleyman Unver, a web developer building scalable platforms for Australian startups using MERN stack and PostgreSQL expertise.",
      keywords:
        "web developer Australia, MERN stack Sydney, scalable app development, software developer Australia, free consulting",
    },
    default: {
      title: "Suleyman Unver - Full Stack Developer",
      description:
        "I'm a seasoned Full Stack Developer specializing in the MERN stack and PostgreSQL, with a knack for building robust, scalable web and mobile applications.",
      keywords:
        "full stack developer, MERN stack, PostgreSQL, web development, mobile app development, free consulting",
    },
  };

  const { title, description, keywords } = countryContent[country || "default"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    if (!email || !request || !country) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      console.log("Writing to Firestore:", {
        email,
        request,
        country,
        submittedAt: new Date(),
      });
      await addDoc(collection(db, "subscribers"), {
        email,
        request,
        country,
        submittedAt: new Date(),
      });
      setMessage("Thank you! Your request has been submitted successfully.");
      setEmail("");
      setRequest("");
      setCountry("");
      setRecaptchaToken(null);
    } catch (err) {
      console.error("Firestore Error:", err);
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <AnimatedPage>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Suleyman Unver" />
        <link
          rel="canonical"
          href={`https://www.reconceptx.com/${country === "" ? "" : country}`}
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Suleyman Unver",
            jobTitle: "Full Stack Developer",
            url: `https://www.reconceptx.com/${country === "" ? "" : country}`,
            description: description,
            sameAs: [
              "www.linkedin.com/in/süleyman-ünver-9b3950245",
              "https://github.com/reconcept1o",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry:
                country === "us"
                  ? "US"
                  : country === "ca"
                  ? "CA"
                  : country === "au"
                  ? "AU"
                  : "Global",
            },
          })}
        </script>
        {/* Silktide Cookie Consent Script */}
        <script
          src="https://cdn.silktide.com/cookie-consent.min.js"
          data-site-id="your-site-id"
          data-consent-mode="true"
          data-policy-url="https://www.reconceptx.com/privacy-policy"
          async
        ></script>
      </Helmet>
      <Container
        fluid
        style={{
          backgroundColor: "#0A192F",
          paddingTop: "5rem",
          paddingBottom: "2rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col>
            <h1
              style={{
                color: "white",
                fontFamily: "monospace",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              }}
            >
              Hi, My name is
            </h1>
            <h2
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "clamp(3rem, 8vw, 5rem)",
              }}
            >
              Suleyman Unver.
            </h2>
            <h3
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              }}
            >
              <TypeAnimation
                sequence={[
                  "I craft immersive digital experiences.",
                  2000,
                  "I am a Full Stack Developer.",
                  2000,
                  "I am passionate about APIs and LLMs.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h3>
            <p
              style={{
                color: "white",
                maxWidth: "90%",
                margin: "0 auto 2rem",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: "bold",
                lineHeight: 1.6,
              }}
            >
              I'm a seasoned Full Stack Developer specializing in the MERN stack
              and PostgreSQL, with a knack for building robust, scalable web and
              mobile applications. My passion lies in creating seamless user
              experiences, optimizing performance, and leveraging cutting-edge
              technologies like APIs and Large Language Models to solve complex
              challenges. Let's build the future of the web together!
            </p>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={12} md={8} lg={6}>
                <Form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: "rgba(10, 25, 47, 0.85)",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h4
                    style={{
                      color: "#64ffda",
                      fontFamily: "monospace",
                      marginBottom: "1rem",
                      fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    Get Free Consulting!
                  </h4>
                  <Form.Group
                    controlId="formEmail"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Form.Label style={{ color: "white" }}>
                      Your Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      style={{ backgroundColor: "white", borderRadius: "4px" }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formRequest"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Form.Label style={{ color: "white" }}>
                      Your Request
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={request}
                      onChange={(e) => setRequest(e.target.value)}
                      required
                      placeholder="e.g., Mobile App, Web App, LLM"
                      style={{ backgroundColor: "white", borderRadius: "4px" }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formCountry"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Form.Label style={{ color: "white" }}>
                      Your Country
                    </Form.Label>
                    <Form.Select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      style={{ backgroundColor: "white", borderRadius: "4px" }}
                    >
                      <option value="">Select a country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="default">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <ReCAPTCHA
                      sitekey="6LcWf20rAAAAAEPn2DQS30durxlBMb4Jz5yf_tDI"
                      onChange={(token) => {
                        console.log("reCAPTCHA Token:", token);
                        setRecaptchaToken(token);
                      }}
                      onErrored={() => console.error("reCAPTCHA Error")}
                      onExpired={() => {
                        console.log("reCAPTCHA Expired");
                        setRecaptchaToken(null);
                      }}
                    />
                  </div>
                  {message && (
                    <Alert variant="success" style={{ marginBottom: "1rem" }}>
                      {message}
                    </Alert>
                  )}
                  {error && (
                    <Alert variant="danger" style={{ marginBottom: "1rem" }}>
                      {error}
                    </Alert>
                  )}
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading || !recaptchaToken}
                    style={{
                      backgroundColor: "#64ffda",
                      borderColor: "#64ffda",
                      color: "#0a192f",
                      fontFamily: "monospace",
                      fontSize: "clamp(0.9rem, 2vw, 1rem)",
                      width: "100%",
                      padding: "0.5rem",
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#4ad0b0")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#64ffda")
                    }
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AnimatedPage>
  );
};

export default HomePage;
