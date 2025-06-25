import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';

// Görselleri yerel olarak import etme
import UserPersona from '../assets/images/user-persona.jpeg';
import AccessibilityChecklist from '../assets/images/accessibility-checklist.jpeg';
import VisualHierarchy from '../assets/images/visual-hierarchy.jpeg';
import UsabilityHeatmap from '../assets/images/accessibility-checklist.jpeg';
import PrototypeMockup from '../assets/images/prototype-mockup.jpeg';
import SitemapDiagram from '../assets/images/sitemap-diagram.jpeg';
import MicrointeractionButton from '../assets/images/microinteraction-button.jpeg';
import DesignSystem from '../assets/images/design-system.jpeg';

// Styled components for enhanced visuals
const StyledImage = styled('img')({
  width: '100%',
  maxWidth: '700px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  margin: '20px auto',
  display: 'block',
});

const CodeSection = styled('div')({
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#0a192f',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});

const SectionTitle = styled('h2')({
  color: '#ccd6f6',
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
  fontFamily: '"SF Mono", "Fira Code", monospace',
  marginBottom: '1.5rem',
});

const SectionText = styled('p')({
  color: '#8892b0',
  lineHeight: 1.7,
  fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
});

const Caption = styled('p')({
  color: '#a8b2d1',
  textAlign: 'center',
  fontSize: '0.9rem',
  marginTop: '-10px',
  marginBottom: '1.5rem',
});

const UIUXDesignPage = ({ country = 'default' }) => {
  // SEO settings for different countries
  const countryContent = {
    us: {
      title: 'Mastering UI/UX Design Principles - USA | ReconceptX',
      description: 'A comprehensive guide to UI/UX design principles with React Bootstrap examples, tailored for USA audiences.',
      keywords: 'UI/UX design USA, React Bootstrap, user experience, interface design, software development USA, design systems',
      canonical: 'https://www.reconceptx.com/ui-ux/us',
    },
    ca: {
      title: 'Mastering UI/UX Design Principles - Canada | ReconceptX',
      description: 'In-depth UI/UX design strategies with React Bootstrap examples, optimized for Canadian enterprises.',
      keywords: 'UI/UX design Canada, React Bootstrap UX, user interface Canada, software design Toronto, design systems',
      canonical: 'https://www.reconceptx.com/ui-ux/ca',
    },
    au: {
      title: 'Mastering UI/UX Design Principles - Australia | ReconceptX',
      description: 'Detailed UI/UX design guide with React Bootstrap examples for Australian startups and businesses.',
      keywords: 'UI/UX design Australia, React Bootstrap UI, user experience Sydney, software design Australia, design systems',
      canonical: 'https://www.reconceptx.com/ui-ux/au',
    },
    default: {
      title: 'Mastering UI/UX Design Principles | ReconceptX',
      description: 'A definitive guide to UI/UX design principles, featuring React Bootstrap examples, visual examples, and advanced best practices.',
      keywords: 'UI/UX design, React Bootstrap, user experience, interface design, software development, design systems, accessibility, usability',
      canonical: 'https://www.reconceptx.com/ui-ux',
    },
  };

  const { title, description, keywords, canonical } = countryContent[country];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Suleyman Unver" />
        <link rel="canonical" href={canonical} />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.reconceptx.com/ui-ux/us"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.reconceptx.com/ui-ux/ca"
        />
        <link
          rel="alternate"
          hreflang="en-au"
          href="https://www.reconceptx.com/ui-ux/au"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.reconceptx.com/ui-ux"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: canonical,
            description,
            author: {
              "@type": "Person",
              name: "Suleyman Unver",
              sameAs: [
                "https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver",
                "https://github.com/reconceptx",
              ],
            },
            inLanguage:
              country === "us"
                ? "en-US"
                : country === "ca"
                ? "en-CA"
                : country === "au"
                ? "en-AU"
                : "en",
            mainEntity: {
              "@type": "Article",
              headline:
                "Mastering UI/UX Design Principles with React Bootstrap Examples",
              datePublished: "2025-06-25",
              dateModified: "2025-06-25",
              author: { "@type": "Person", name: "Suleyman Unver" },
              publisher: { "@type": "Organization", name: "ReconceptX" },
              image: canonical + "/assets/images/design-system.jpg",
            },
          })}
        </script>
      </Helmet>

      {/* Main Content */}
      <Container className="py-4 py-md-5">
        <Row className="text-center mb-5">
          <Col>
            <h1
              style={{
                color: "#64ffda",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontFamily: '"SF Mono", "Fira Code", monospace',
                paddingTop: "10px",
              }}
            >
              Mastering UI/UX Design Principles
            </h1>
            <SectionText style={{ maxWidth: "900px", margin: "0 auto" }}>
              A definitive guide to creating intuitive, accessible, and visually
              compelling user interfaces using React Bootstrap. Explore advanced
              UI/UX principles with practical code examples and visual
              demonstrations.
            </SectionText>
          </Col>
        </Row>

        <hr style={{ borderColor: "#64ffda", marginBottom: "3rem" }} />

        {/* Section 1: User-Centered Design */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>1. User-Centered Design</SectionTitle>
            <SectionText>
              User-centered design (UCD) places users at the core of the design
              process, ensuring interfaces meet their needs and expectations.
              Key components include:
              <ul>
                <li>
                  <strong>User Research:</strong> Conduct interviews, surveys,
                  and contextual inquiries to gather insights into user
                  behaviors and pain points.
                </li>
                <li>
                  <strong>Personas:</strong> Develop detailed user profiles
                  (age, goals, frustrations) to guide design decisions.
                </li>
                <li>
                  <strong>User Journeys:</strong> Map out user interactions to
                  identify touchpoints, emotions, and opportunities for
                  improvement.
                </li>
                <li>
                  <strong>Empathy Mapping:</strong> Understand users’ thoughts,
                  feelings, and motivations to create empathetic designs.
                </li>
              </ul>
              <strong>Example:</strong> A persona for a productivity app might
              represent a busy professional needing quick task management,
              guiding the design toward simplicity and speed.
            </SectionText>
            <StyledImage
              src={UserPersona}
              alt="Detailed user persona for a productivity app in UI/UX design"
            />
            <Caption>
              User persona showcasing demographics, goals, and frustrations.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: User Feedback Form
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A form that collects user feedback with real-time validation,
                designed for accessibility and simplicity.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React, { useState } from 'react';
import { Form, Button, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';

const UserFeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name.trim() || feedback.length < 10) {
      setError('Please provide a name and feedback (min 10 characters).');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Feedback submitted successfully!');
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '1.5rem' }}>
      <FormGroup controlId="nameInput" className="mb-3">
        <FormLabel>Name</FormLabel>
        <FormControl
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="nameHelp"
          isInvalid={!!error}
        />
      </FormGroup>
      <FormGroup controlId="feedbackInput" className="mb-3">
        <FormLabel>Feedback</FormLabel>
        <FormControl
          as="textarea"
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          aria-describedby="feedbackHelp"
          isInvalid={!!error}
        />
        {error && <FormText id="feedbackHelp" className="text-danger">{error}</FormText>}
      </FormGroup>
      <Button variant="primary" type="submit" className="w-100">
        Submit Feedback
      </Button>
    </Form>
  );
};

export default UserFeedbackForm;
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 2: Accessibility */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>2. Accessibility (a11y)</SectionTitle>
            <SectionText>
              Accessibility ensures interfaces are usable by people with
              disabilities, adhering to WCAG 2.1 guidelines. Key practices:
              <ul>
                <li>
                  <strong>Semantic HTML:</strong> Use tags like{" "}
                  <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> for screen
                  reader compatibility.
                </li>
                <li>
                  <strong>ARIA Attributes:</strong> Add roles and labels (e.g.,{" "}
                  <code>aria-label</code>) for dynamic content.
                </li>
                <li>
                  <strong>Keyboard Navigation:</strong> Support Tab, Enter, and
                  arrow keys for all interactive elements.
                </li>
                <li>
                  <strong>Color Contrast:</strong> Ensure text-to-background
                  contrast ratios meet 4.5:1 for normal text, 3:1 for large
                  text.
                </li>
                <li>
                  <strong>Screen Reader Testing:</strong> Use tools like NVDA or
                  VoiceOver to verify compatibility.
                </li>
              </ul>
              <strong>Example:</strong> A modal dialog with ARIA attributes
              ensures screen readers can navigate it effectively.
            </SectionText>
            <StyledImage
              src={AccessibilityChecklist}
              alt="Accessibility checklist for UI/UX design with WCAG guidelines"
            />
            <Caption>
              Checklist for ensuring WCAG-compliant accessible interfaces.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Accessible Modal
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A modal with focus trapping and ARIA attributes for screen
                reader support.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React, { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AccessibleModal = ({ show, onHide }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      centered
      ref={modalRef}
      tabIndex={-1}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">Accessibility Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="modal-description">
          This modal is designed for accessibility, with focus trapping and ARIA labels for screen readers.
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide} autoFocus>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccessibleModal;
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 3: Visual Hierarchy */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>3. Visual Hierarchy</SectionTitle>
            <SectionText>
              Visual hierarchy directs user attention to key elements using
              design principles:
              <ul>
                <li>
                  <strong>Typography:</strong> Vary font sizes, weights (e.g.,
                  bold headings), and spacing for emphasis.
                </li>
                <li>
                  <strong>Color:</strong> Use contrasting colors for CTAs (e.g.,
                  bright buttons on neutral backgrounds).
                </li>
                <li>
                  <strong>Spacing:</strong> Leverage whitespace to group related
                  elements and reduce cognitive load.
                </li>
                <li>
                  <strong>Alignment and Proximity:</strong> Align elements
                  consistently and place related items closer together.
                </li>
                <li>
                  <strong>Size and Scale:</strong> Larger elements draw more
                  attention (e.g., hero sections).
                </li>
              </ul>
              <strong>Example:</strong> A dashboard card with a prominent title
              and actionable button guides users effectively.
            </SectionText>
            <StyledImage
              src={VisualHierarchy}
              alt="Dashboard design showcasing visual hierarchy with typography and color"
            />
            <Caption>Dashboard wireframe emphasizing visual hierarchy.</Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Dashboard Card
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A card component with clear visual hierarchy for a dashboard.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DashboardCard = ({ title, value, description }) => {
  return (
    <Card style={{ maxWidth: '400px', margin: '0 auto', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Card.Body>
        <Card.Title as="h5" style={{ color: '#64ffda', fontSize: '1.5rem', marginBottom: '1rem' }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: '#ccd6f6', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {value}
        </Card.Text>
        <Card.Text style={{ color: '#8892b0', lineHeight: '1.6' }}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ background: 'transparent', borderTop: 'none', padding: '1rem' }}>
        <Button variant="primary" size="sm" className="w-100">
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default DashboardCard;
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 4: Usability Testing */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>4. Usability Testing</SectionTitle>
            <SectionText>
              Usability testing validates interface intuitiveness and efficiency
              through real user interactions. Key methods:
              <ul>
                <li>
                  <strong>A/B Testing:</strong> Test two design variants to
                  compare performance metrics (e.g., conversion rates).
                </li>
                <li>
                  <strong>Heatmaps:</strong> Visualize user clicks, scrolls, and
                  attention areas using tools like Hotjar.
                </li>
                <li>
                  <strong>Task Analysis:</strong> Observe users completing tasks
                  to identify friction points.
                </li>
                <li>
                  <strong>User Feedback:</strong> Collect qualitative insights
                  via surveys or interviews.
                </li>
                <li>
                  <strong>Analytics Integration:</strong> Use tools like Google
                  Analytics to track user behavior.
                </li>
              </ul>
              <strong>Example:</strong> A heatmap showing high click density on
              a CTA button indicates effective design.
            </SectionText>
            <StyledImage
              src={UsabilityHeatmap}
              alt="Heatmap visualizing user interactions on a webpage"
            />
            <Caption>
              Heatmap showing user engagement with a CTA button.
            </Caption>

            <Alert variant="info" className="mb-3">
              Tools like Hotjar, Crazy Egg, or Google Optimize provide
              actionable insights for usability testing, helping refine designs
              based on real user data.
            </Alert>
          </Card.Body>
        </Card>

        {/* Section 5: Prototyping */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>5. Prototyping</SectionTitle>
            <SectionText>
              Prototyping allows designers to test and iterate on ideas before
              development. Types include:
              <ul>
                <li>
                  <strong>Low-Fidelity Prototypes:</strong> Wireframes or paper
                  sketches for early concepts.
                </li>
                <li>
                  <strong>High-Fidelity Prototypes:</strong> Interactive mockups
                  (e.g., Figma, Adobe XD) that mimic final designs.
                </li>
                <li>
                  <strong>Interactive Prototypes:</strong> Simulate user flows
                  with clickable elements.
                </li>
                <li>
                  <strong>Code-Based Prototypes:</strong> Use React for rapid
                  prototyping of complex interactions.
                </li>
              </ul>
              <strong>Example:</strong> A high-fidelity prototype in Figma can
              simulate a checkout flow to test usability before coding.
            </SectionText>
            <StyledImage
              src={PrototypeMockup}
              alt="High-fidelity prototype of a checkout flow in Figma"
            />
            <Caption>
              High-fidelity prototype for a checkout flow, created in Figma.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Interactive Prototype
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A simple interactive prototype for a product card with hover
                effects.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from '@emotion/styled';

const HoverCard = styled(Card)({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
});

const ProductCardPrototype = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard
      style={{ maxWidth: '300px', margin: '0 auto', borderRadius: '10px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{ color: '#64ffda' }}>{product.name}</Card.Title>
        <Card.Text style={{ color: '#8892b0' }}>{product.description}</Card.Text>
        <Button variant={isHovered ? 'primary' : 'outline-primary'} className="w-100">
          Add to Cart
        </Button>
      </Card.Body>
    </HoverCard>
  );
};

export default ProductCardPrototype;

// Usage:
// <ProductCardPrototype product={{ name: 'Sample Product', description: 'A great product.', image: '/images/sample-product.jpg' }} />
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 6: Information Architecture */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>6. Information Architecture</SectionTitle>
            <SectionText>
              Information architecture (IA) organizes content to make it
              intuitive and findable. Key aspects:
              <ul>
                <li>
                  <strong>Navigation Systems:</strong> Design clear menus,
                  breadcrumbs, or search functions.
                </li>
                <li>
                  <strong>Content Grouping:</strong> Categorize information
                  logically (e.g., by topic or user task).
                </li>
                <li>
                  <strong>Labeling:</strong> Use clear, concise labels for
                  navigation and buttons.
                </li>
                <li>
                  <strong>Searchability:</strong> Implement filters or search
                  bars for large datasets.
                </li>
              </ul>
              <strong>Example:</strong> A well-structured navigation menu
              reduces user effort to find content.
            </SectionText>
            <StyledImage
              src={SitemapDiagram}
              alt="Sitemap illustrating information architecture for a website"
            />
            <Caption>
              Sitemap showing organized content structure for a website.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Navigation Menu
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A responsive navigation menu with clear labeling and hierarchy.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ fontFamily: '"SF Mono", "Fira Code", monospace' }}>
      <Navbar.Brand href="/" style={{ color: '#64ffda' }}>ReconceptX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/about" style={{ color: '#ccd6f6' }}>About</Nav.Link>
          <Nav.Link href="/deep-dives" style={{ color: '#ccd6f6' }}>Deep Dives</Nav.Link>
          <Nav.Link href="/contact" style={{ color: '#ccd6f6' }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 7: Microinteractions */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>7. Microinteractions</SectionTitle>
            <SectionText>
              Microinteractions are subtle animations or feedback that enhance
              user experiences. Examples include:
              <ul>
                <li>
                  <strong>Hover Effects:</strong> Visual cues like button color
                  changes.
                </li>
                <li>
                  <strong>Loading States:</strong> Spinners or progress bars for
                  asynchronous actions.
                </li>
                <li>
                  <strong>Form Feedback:</strong> Real-time validation messages.
                </li>
                <li>
                  <strong>Transitions:</strong> Smooth animations between states
                  (e.g., modal open/close).
                </li>
              </ul>
              <strong>Example:</strong> A button that scales slightly on hover
              improves perceived interactivity.
            </SectionText>
            <StyledImage
              src={MicrointeractionButton}
              alt="Microinteraction showing a button hover effect"
            />
            <Caption>
              Button hover effect demonstrating a microinteraction.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Animated Button
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A button with a hover animation for enhanced user feedback.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React from 'react';
import { Button } from 'react-bootstrap';
import styled from '@emotion/styled';

const AnimatedButton = styled(Button)({
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#4bc8b0',
    borderColor: '#4bc8b0',
  },
});

const MicrointeractionButton = ({ children, ...props }) => {
  return (
    <AnimatedButton variant="primary" style={{ fontFamily: '"SF Mono", "Fira Code", monospace' }} {...props}>
      {children}
    </AnimatedButton>
  );
};

export default MicrointeractionButton;

// Usage:
// <MicrointeractionButton>Click Me</MicrointeractionButton>
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>

        {/* Section 8: Design Systems */}
        <Card
          className="mb-5"
          style={{
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Card.Body>
            <SectionTitle>8. Design Systems</SectionTitle>
            <SectionText>
              Design systems provide reusable components and guidelines for
              consistent interfaces. Benefits:
              <ul>
                <li>
                  <strong>Scalability:</strong> Reuse components across
                  projects.
                </li>
                <li>
                  <strong>Consistency:</strong> Uniform typography, colors, and
                  layouts.
                </li>
                <li>
                  <strong>Efficiency:</strong> Reduce development time with
                  pre-built components.
                </li>
                <li>
                  <strong>Collaboration:</strong> Align design and development
                  teams.
                </li>
              </ul>
              <strong>Example:</strong> A design system with buttons, inputs,
              and cards ensures a cohesive UI.
            </SectionText>
            <StyledImage
              src={DesignSystem}
              alt="Design system showcasing reusable UI components like buttons and inputs"
            />
            <Caption>
              Design system with standardized buttons, inputs, and typography.
            </Caption>

            <CodeSection>
              <h3 style={{ color: "#ccd6f6", marginBottom: "1rem" }}>
                React Bootstrap Example: Design System Component
              </h3>
              <SectionText style={{ marginBottom: "1rem" }}>
                A reusable button component with variants for a design system.
              </SectionText>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`
import React from 'react';
import { Button } from 'react-bootstrap';
import styled from '@emotion/styled';

const StyledButton = styled(Button)({
  fontFamily: '"SF Mono", "Fira Code", monospace',
  fontSize: '16px',
  fontWeight: 500,
  borderRadius: '6px',
  padding: '10px 20px',
  ...(props => props.variant === 'primary' && {
    backgroundColor: '#64ffda',
    borderColor: '#64ffda',
    color: '#000',
    '&:hover': { backgroundColor: '#4bc8b0', borderColor: '#4bc8b0' },
  }),
  ...(props => props.variant === 'secondary' && {
    backgroundColor: '#ccd6f6',
    borderColor: '#ccd6f6',
    color: '#000',
    '&:hover': { backgroundColor: '#a8b2d1', borderColor: '#a8b2d1' },
  }),
});

const DesignSystemButton = ({ variant = 'primary', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default DesignSystemButton;

// Usage:
// <DesignSystemButton variant="primary">Primary Button</DesignSystemButton>
// <DesignSystemButton variant="secondary">Secondary Button</DesignSystemButton>
                `}
              </SyntaxHighlighter>
            </CodeSection>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default UIUXDesignPage;