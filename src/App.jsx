// FROG8 WEBSITE - PART 1: IMPORTS & STYLED COMPONENTS

import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaMobileAlt, 
  FaCreditCard, 
  FaShieldAlt, 
  FaChartLine,
  FaWhatsapp,
  FaUserShield,
  FaQrcode,
  FaMoneyBillWave,
  FaIdCard,
  FaFingerprint,
  FaVideo,
  FaRobot,
  FaBuilding,
  FaHandshake,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCheckCircle,
  FaLock,
  FaGlobe,
  FaMobile
} from 'react-icons/fa';
import { 
  MdSecurity, 
  MdPayment, 
  MdSpeed, 
  MdVerifiedUser,
  MdAccessTime,
  MdLocationOn,
  MdEmail,
  MdPhone
} from 'react-icons/md';
import { 
  BsFillShieldLockFill, 
  BsFillCreditCardFill,
  BsFillPersonFill,
  BsFillBuildingFill
} from 'react-icons/bs';
import frog8Logo from './assets/images/frog8_logo.jpg';

// Demo images using placeholder services
const heroImage = "https://placehold.co/800x400/059669/ffffff?text=Smart+Infrastructure";
const cardImage = "https://placehold.co/400x300/059669/ffffff?text=Raahi+Card";
const workflowImage = "https://placehold.co/600x400/059669/ffffff?text=Veriphy+Workflow";
const kioskImage = "https://placehold.co/600x400/059669/ffffff?text=Smart+Kiosk";

// ALL STYLED COMPONENTS
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  overflow-x: hidden;
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) { padding: 0 1.5rem; }
  @media (min-width: 1024px) { padding: 0 2rem; }
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 640px) {
    height: auto;
    padding: 0.75rem 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    margin-bottom: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  @media (max-width: 640px) {
    height: 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  flex-shrink: 0;
  margin-right: 1rem;

  @media (min-width: 641px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: #374151;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background-color: #a7d221;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1024px) { gap: 2rem; }
  
  @media (min-width: 641px) {
    display: flex !important;
  }
  
  @media (max-width: 640px) {
    display: none;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 0.5rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 40;
    gap: 0;

    &.active {
      display: flex;
    }
  }
`;

const NavButton = styled.button`
  font-size: 0.875rem;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  white-space: nowrap;
  &:hover { color: #a7d221; }
  
  @media (min-width: 1024px) { 
    font-size: 1rem; 
  }
  
  @media (max-width: 640px) {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;

const SectionGray = styled(Section)`
  background-color: #f3f4f6;
`;

const SectionGreen = styled(Section)`
  background-image: linear-gradient(to right, #059669, #0d9488);
  color: white;
  padding: 5rem 0;
  @media (max-width: 640px) {
    padding: 3rem 0;
  }
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) { padding: 0 1.5rem; }
  @media (min-width: 1024px) { padding: 0 2rem; }
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) { font-size: 2.25rem; }
  @media (max-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: #6b7280;
  max-width: 64rem;
  margin: 0 auto 3rem;
  @media (min-width: 768px) { font-size: 1.25rem; }
  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (min-width: 768px) { font-size: 3.75rem; }
  @media (max-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 640px) { flex-direction: row; }
  @media (max-width: 640px) {
    gap: 0.75rem;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #059669;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  @media (min-width: 640px) { width: auto; }
  &:hover { background-color: #f3f4f6; }
`;

const ButtonOutline = styled.a`
  border: 2px solid white;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  width: 100%;
  @media (min-width: 640px) { width: auto; }
  &:hover { background-color: white; color: #059669; }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  &.cols-3 {
    grid-template-columns: 1fr;
    @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  }
  &.cols-2 {
    grid-template-columns: 1fr;
    @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  }
  &.cols-4 {
    grid-template-columns: 1fr;
    @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
  }
  &.cols-5 {
    grid-template-columns: 1fr;
    @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 1024px) { grid-template-columns: repeat(5, 1fr); }
  }
  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #a7d221;
`;

const CardText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const JourneyContainer = styled.div`
  position: relative;
`;

const JourneyFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 768px) { 
    flex-direction: row; 
    gap: 1rem;
  }
  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const JourneyStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const JourneyCard = styled.div`
  background-color: #dcfce7;
  border: 2px solid #86efac;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  min-width: 200px;
  position: relative;
  z-index: 10;
  @media (max-width: 640px) {
    min-width: 150px;
    padding: 1rem;
  }
`;

const JourneyTime = styled.p`
  font-weight: 600;
  color: #166534;
  font-size: 1.125rem;
`;

const JourneyAction = styled.p`
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.5rem;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  z-index: 0;
  @media (max-width: 767px) { display: none; }
`;

const ArrowMobile = styled.div`
  margin: 1rem 0;
  @media (min-width: 768px) { display: none; }
`;

const FlowLine = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #bbf7d0;
  transform: translateY(-50%);
  z-index: -1;
  @media (min-width: 768px) { display: block; }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background-color: #a7d221;
    border-radius: 50%;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const QuoteCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #374151;
`;

const SmallCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const GrayCard = styled.div`
  background-color: #f3f4f6;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const GreenSection = styled.div`
  background-color: #ecfdf5;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const GreenTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #166534;
`;

const MetricCard = styled.div`
  color: black;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const MetricNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem 0;
`;

const Footer = styled.footer`
  background-color: white;
  color: #1f2937;
  padding: 3rem 0;
  border-top: 1px solid #e5e7eb;
  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  @media (min-width: 640px) { padding: 0 1.5rem; }
  @media (min-width: 1024px) { padding: 0 2rem; }
`;

const FooterLogo = styled.img`
  height: 2.5rem;
  width: auto;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

const FooterSubtext = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover { color: #a7d221; }
`;

// Update Hero Section
const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 1rem;
  margin: 2rem auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

// END OF PART 1
// FROG8 WEBSITE - PART 2: COMPONENT LOGIC & JSX (Hero to Products)

// MAIN COMPONENT STARTS HERE
const Frog8Website = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const journeyData = [
    { time: "8:04 AM", action: "Rapido or Uber Auto booked" },
    { time: "8:22 AM", action: "Fastag-linked parking" },
    { time: "8:45 AM", action: "Coffee stop at station" },
    { time: "2:30 PM", action: "Raahi card offer via WhatsApp" },
    { time: "6:15 PM", action: "Reward voucher redeemed" }
  ];

  return (
    <Container>
      {/* Header */}
      <Header>
        <Nav>
          <NavContainer>
            <LogoContainer>
              <Logo src={frog8Logo} alt="Frog8 Logo" />
            </LogoContainer>
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
            <NavLinks className={isMobileMenuOpen ? 'active' : ''}>
              <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
              <NavButton onClick={() => scrollToSection('ethos')}>Our Ethos</NavButton>
              <NavButton onClick={() => scrollToSection('offerings')}>Offerings</NavButton>
              <NavButton onClick={() => scrollToSection('deployments')}>Deployments</NavButton>
              <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
              <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
            </NavLinks>
          </NavContainer>
        </Nav>
      </Header>

      {/* Hero Section */}
      <SectionGreen id="home">
        <SectionContainer>
          <HeroTitle>Powering India Next: Seamless Journeys, Smarter Access</HeroTitle>
          <HeroSubtitle>
            <FaMobileAlt style={{ marginRight: '0.5rem' }} />
            Unattended automation. Design-first experiences. Building for the next 100 million.
          </HeroSubtitle>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '2rem', maxWidth: '64rem', margin: '0 auto 2rem' }}>
            Frog8 builds connected platforms and intelligent kiosks that transform access—across transit, banking, and public services. From metro stations to rural banks, our solutions simplify how India moves, pays, and verifies.
          </p>
          <HeroImage src={heroImage} alt="Smart Infrastructure for India's Next Generation" />
          <ButtonContainer>
            <Button onClick={() => scrollToSection('offerings')}>
              Explore Our Offerings <FaArrowRight style={{ marginLeft: '0.5rem' }} />
            </Button>
            <ButtonOutline href="mailto:hello@frog8.in">
              Schedule a Demo <FaHandshake style={{ marginLeft: '0.5rem' }} />
            </ButtonOutline>
          </ButtonContainer>
        </SectionContainer>
      </SectionGreen>

      {/* Our Ethos Section */}
      <Section id="ethos">
        <SectionContainer>
          <SectionTitle>Our Ethos: Built for India Next</SectionTitle>
          <SectionSubtitle>
            <FaUsers style={{ marginRight: '0.5rem' }} />
            Frog8 exists to unlock access — to mobility, finance, and opportunity — for the next 100 million Indians.
          </SectionSubtitle>
          
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '2rem', maxWidth: '64rem', margin: '0 auto 2rem' }}>
              We believe that access should not depend on where you live, what phone you carry, or how digitally savvy you are.
            </p>
            
            <Grid className="cols-2" style={{ marginBottom: '3rem' }}>
              <Card>
                <CardTitle><FaUsers style={{ marginRight: '0.5rem' }} /> We Build For</CardTitle>
                <List>
                  <ListItem><FaUserShield style={{ marginRight: '0.5rem' }} /> the everyday commuter</ListItem>
                  <ListItem><FaBuilding style={{ marginRight: '0.5rem' }} /> the rural account-holder</ListItem>
                  <ListItem><FaWhatsapp style={{ marginRight: '0.5rem' }} /> the field agent with a phone full of WhatsApp messages</ListItem>
                  <ListItem><FaChartLine style={{ marginRight: '0.5rem' }} /> the metro operator chasing uptime</ListItem>
                </List>
              </Card>
              <Card>
                <CardTitle><FaShieldAlt style={{ marginRight: '0.5rem' }} /> Our Differentiators</CardTitle>
                <List>
                  <ListItem><FaMobileAlt style={{ marginRight: '0.5rem' }} /> Design-First Experiences — Not just hardware, but journeys</ListItem>
                  <ListItem><MdAccessTime style={{ marginRight: '0.5rem' }} /> Unattended, Everywhere — 24/7 access in metros, banks, and tier-3 towns</ListItem>
                  <ListItem><MdSecurity style={{ marginRight: '0.5rem' }} /> Android Native. Industrial Grade. — 32" screens, biometric & card integrations</ListItem>
                  <ListItem><FaWhatsapp style={{ marginRight: '0.5rem' }} /> Veriphy Connected — Workflows, data, documents, all secured and integrated</ListItem>
                </List>
              </Card>
            </Grid>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Cultural Values</h3>
              <Grid className="cols-3">
                <SmallCard>
                  <CardTitle><FaShieldAlt style={{ marginRight: '0.5rem' }} /> Do the right thing</CardTitle>
                  <CardText>Integrity in every interaction and decision</CardText>
                </SmallCard>
                <SmallCard>
                  <CardTitle><FaChartLine style={{ marginRight: '0.5rem' }} /> Do it with excellence</CardTitle>
                  <CardText>Quality and reliability in every solution</CardText>
                </SmallCard>
                <SmallCard>
                  <CardTitle><FaUsers style={{ marginRight: '0.5rem' }} /> Be a positive influence, 24/7</CardTitle>
                  <CardText>Making a difference in people's lives</CardText>
                </SmallCard>
              </Grid>
            </div>
          </div>
        </SectionContainer>
      </Section>

      {/* Vision & Platform Overview */}
      <Section id="vision">
        <SectionContainer>
          <SectionTitle>Frog8: Access & Payments Infrastructure Company</SectionTitle>
          <SectionSubtitle>We build self-service financial infrastructure at transit hubs, working with any bank or technology partner, while leveraging data to serve India's next generation of commuters."</SectionSubtitle>
          <HighlightBox>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0369a1', textAlign: 'center' }}>What Frog8 Powers</h3>
            <Grid className="cols-2">
              <div>
                <List>
                  <ListItem>Secure, compliant access to transit via card, app, wearable, or biometrics</ListItem>
                  <ListItem>Seamless payments and merchant integrations, including loyalty and offers</ListItem>
                </List>
              </div>
              <div>
                <List>
                  <ListItem>Real-time service operations like kiosk monitoring and RM dashboards</ListItem>
                  <ListItem>A growing alternative data layer—the commuter graph</ListItem>
                </List>
              </div>
            </Grid>
          </HighlightBox>

          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>How It All Fits Together</h3>
            <Grid className="cols-3">
              <Card>
                <CardTitle>🏢 Frog8 Platform</CardTitle>
                <CardText style={{ marginBottom: '1rem' }}><strong>Core Infrastructure</strong></CardText>
                <CardText>Infrastructure + commuter data + integration layer</CardText>
              </Card>
              <Card>
                <CardTitle>💳 Raahi Card</CardTitle>
                <CardText style={{ marginBottom: '1rem' }}><strong>Frog8 + NSDL PB</strong></CardText>
                <CardText>NCMC lifestyle card + metro + merchant + loyalty</CardText>
              </Card>
              <Card>
                <CardTitle>📲 Veriphy.io</CardTitle>
                <CardText style={{ marginBottom: '1rem' }}><strong>Workflow Engine</strong></CardText>
                <CardText>WhatsApp-based enablement for service, onboarding, and ops</CardText>
              </Card>
            </Grid>
          </div>

        </SectionContainer>
      </Section>

      {/* Offerings Section */}
      <SectionGray id="offerings">
        <SectionContainer>
          <SectionTitle><FaCreditCard style={{ marginRight: '0.5rem' }} /> Our Offerings</SectionTitle>
          <SectionSubtitle>
            A comprehensive suite of platforms and solutions designed for India's infrastructure needs
          </SectionSubtitle>

          {/* Platforms */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
              <FaBuilding style={{ marginRight: '0.5rem' }} /> Platforms
            </h3>
            
            {/* Raahi Platform */}
            <div style={{ marginBottom: '4rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#a7d221' }}>
                <BsFillCreditCardFill style={{ marginRight: '0.5rem' }} /> Raahi: Transit & Lifestyle Card Platform
              </h4>
              <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                An NCMC-compliant transit and merchant card that uses metro networks as high-intent, high-frequency channels to reach "India Next". Co-created with NSDL Payments Bank.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <img src={cardImage} alt="Raahi Card" style={{ maxWidth: '400px', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
              </div>

              <HighlightBox style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0369a1' }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} /> What Raahi Enables
                </h4>
                <Grid className="cols-2">
                  <div>
                    <List>
                      <ListItem><FaQrcode style={{ marginRight: '0.5rem' }} /> Tap-and-go metro access</ListItem>
                      <ListItem><FaMoneyBillWave style={{ marginRight: '0.5rem' }} /> Merchant payments and discounts</ListItem>
                    </List>
                  </div>
                  <div>
                    <List>
                      <ListItem><FaChartLine style={{ marginRight: '0.5rem' }} /> Loyalty points and micro-rewards</ListItem>
                      <ListItem><FaBuilding style={{ marginRight: '0.5rem' }} /> Can be issued by any partner bank, not just NSDL PB</ListItem>
                    </List>
                  </div>
                </Grid>
              </HighlightBox>

              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#a7d221' }}>
                  <FaIdCard style={{ marginRight: '0.5rem' }} /> Flexible KYC Tiers & Features
                </h4>
                <Grid className="cols-4">
                  <SmallCard>
                    <CardTitle><FaUserShield style={{ marginRight: '0.5rem' }} /> Zero KYC</CardTitle>
                    <CardText>Quick issuance at kiosks with ₹3K limit</CardText>
                  </SmallCard>
                  <SmallCard>
                    <CardTitle><FaFingerprint style={{ marginRight: '0.5rem' }} /> Full KYC</CardTitle>
                    <CardText>Aadhaar biometric or WhatsApp verification</CardText>
                  </SmallCard>
                  <SmallCard>
                    <CardTitle><FaCreditCard style={{ marginRight: '0.5rem' }} /> Multi-Use</CardTitle>
                    <CardText>Metro, bus, retail, and online payments</CardText>
                  </SmallCard>
                  <SmallCard>
                    <CardTitle><FaChartLine style={{ marginRight: '0.5rem' }} /> Future Ready</CardTitle>
                    <CardText>Credit products and BNPL integration</CardText>
                  </SmallCard>
                </Grid>
              </div>
            </div>

            {/* Veriphy Platform */}
            <div style={{ marginBottom: '4rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#a7d221' }}>
                <FaWhatsapp style={{ marginRight: '0.5rem' }} /> Veriphy: Workflow & Ops Enabler
              </h4>
              <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                A WhatsApp-native workflow engine built for real-world operations. Used by Frog8 internally and by partners externally.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <img src={workflowImage} alt="Veriphy Workflow" style={{ maxWidth: '600px', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
              </div>

              <HighlightBox style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0369a1' }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} /> Where Veriphy Is Used
                </h4>
                <Grid className="cols-2">
                  <div>
                    <List>
                      <ListItem><FaIdCard style={{ marginRight: '0.5rem' }} /> Card onboarding and KYC for Raahi</ListItem>
                      <ListItem><FaUsers style={{ marginRight: '0.5rem' }} /> RM and service staff dashboards at metro stations</ListItem>
                      <ListItem><FaChartLine style={{ marginRight: '0.5rem' }} /> TVM health checks, fault logs, and technician coordination</ListItem>
                    </List>
                  </div>
                  <div>
                    <List>
                      <ListItem><FaBuilding style={{ marginRight: '0.5rem' }} /> Merchant acquiring, terminal tracking, and compliance</ListItem>
                      <ListItem><FaWhatsapp style={{ marginRight: '0.5rem' }} /> Customer communication – offers, feedback, alerts</ListItem>
                      <ListItem><FaRobot style={{ marginRight: '0.5rem' }} /> Multi-industry workflow automation</ListItem>
                    </List>
                  </div>
                </Grid>
              </HighlightBox>

              <Grid className="cols-3">
                <Card>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>
                    <FaChartLine style={{ marginRight: '0.5rem' }} /> Journey Tracking
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Map touchpoints, identify delays, trigger nudges</p>
                  <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Card issued but not activated → WhatsApp reminder</p>
                </Card>
                <Card>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>
                    <FaShieldAlt style={{ marginRight: '0.5rem' }} /> Document Verification
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>OCR, classify, and verify in local languages</p>
                  <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Upload Aadhaar + PAN → Real-time verification</p>
                </Card>
                <Card>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>
                    <FaWhatsapp style={{ marginRight: '0.5rem' }} /> Communication Hub
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>WhatsApp, SMS, and app notifications</p>
                  <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Automated follow-ups and support</p>
                </Card>
              </Grid>
            </div>
          </div>
        </SectionContainer>
      </SectionGray>

      {/* Products & Solutions */}
      <SectionGray id="products">
        <SectionContainer>
          <SectionTitle>Complete Product Ecosystem</SectionTitle>
          <SectionSubtitle>Modular infrastructure designed for scale, powering transit and financial inclusion across India's metro networks.</SectionSubtitle>

          {/* Smart Kiosk Infrastructure */}
          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Smart Kiosk Infrastructure</h3>
            <Grid className="cols-3">
              <Card>
                <CardTitle>TVM 1000</CardTitle>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>QR ticket printing for seamless commuter access. Real-time transaction processing and UPI payments.</p>
                <List>
                  <ListItem>QR ticket printing</ListItem>
                  <ListItem>UPI payments</ListItem>
                  <ListItem>Real-time processing</ListItem>
                </List>
              </Card>
              <Card>
                <CardTitle>TVM 2000</CardTitle>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Compact kiosk for tickets, balance checks, and top-ups. PCI-certified and live across BMRCL.</p>
                <List>
                  <ListItem>UPI, debit/credit card payments</ListItem>
                  <ListItem>NCMC card balance inquiry</ListItem>
                  <ListItem>QR ticket printing</ListItem>
                  <ListItem>Real-time transaction processing</ListItem>
                </List>
              </Card>
              <Card>
                <CardTitle>TVM 4000</CardTitle>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Full-featured kiosk with card issuance, cash acceptance, and KYC capabilities.</p>
                <List>
                  <ListItem>Full KYC card issuance with biometric scanner</ListItem>
                  <ListItem>Cash acceptance with float management</ListItem>
                  <ListItem>HD camera for audit and security</ListItem>
                  <ListItem>Card personalization and printing</ListItem>
                </List>
              </Card>
            </Grid>
          </div>

          {/* Raahi Card Ecosystem */}
          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>💳 Raahi: Transit & Lifestyle Card Platform</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              An NCMC-compliant transit and merchant card that uses metro networks as high-intent, high-frequency channels to reach "India Next". Co-created with NSDL Payments Bank.
            </p>

            <HighlightBox style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0369a1' }}>What Raahi Enables</h4>
              <Grid className="cols-2">
                <div>
                  <List>
                    <ListItem>Tap-and-go metro access</ListItem>
                    <ListItem>Merchant payments and discounts</ListItem>
                  </List>
                </div>
                <div>
                  <List>
                    <ListItem>Loyalty points and micro-rewards</ListItem>
                    <ListItem>Can be issued by any partner bank, not just NSDL PB</ListItem>
                  </List>
                </div>
              </Grid>
            </HighlightBox>


            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Why Metro Matters: India Next Demographics</h3>
              <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                Metro systems bring together a digitally active, professionally employed commuter segment. This population isn't underserved—it's under-captured.
              </p>

              <Grid className="cols-3" style={{ marginBottom: '3rem' }}>
                <MetricCard>
                  <MetricNumber>₹25K-40K</MetricNumber>
                  <MetricLabel>Monthly salary range for professionals</MetricLabel>
                </MetricCard>
                <MetricCard>
                  <MetricNumber>High %</MetricNumber>
                  <MetricLabel>Women riders due to safety</MetricLabel>
                </MetricCard>
                <MetricCard>
                  <MetricNumber>20-25%</MetricNumber>
                  <MetricLabel>College students, aged 18–22</MetricLabel>
                </MetricCard>
              </Grid>

              <Grid className="cols-3">
                <Card>
                  <CardTitle>Professionals</CardTitle>
                  <CardText>Earning ₹25,000–₹40,000/month, fluent in UPI and QR codes</CardText>
                </Card>
                <Card>
                  <CardTitle>Women Commuters</CardTitle>
                  <CardText>Trusting metro safety and routine, seeking reliable financial access</CardText>
                </Card>
                <Card>
                  <CardTitle>Students</CardTitle>
                  <CardText>Aged 18–22, building financial habits for life</CardText>
                </Card>
              </Grid>

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Capturing the Commuter Journey</h3>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                  From ride-booking to rewards, Frog8 captures micro-moments to build a consented commuter graph—personalizing products and improving credit models.
                </p>
              </div>

            </div>


            <JourneyContainer>
              <JourneyFlow>
                {journeyData.map((item, index) => (
                  <JourneyStep key={index}>
                    <JourneyCard>
                      <JourneyTime>{item.time}</JourneyTime>
                      <JourneyAction>{item.action}</JourneyAction>
                    </JourneyCard>
                    {index < 4 && (
                      <ArrowContainer>
                        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 1L31 8L24 15M0 8H31" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </ArrowContainer>
                    )}
                    {index < 4 && (
                      <ArrowMobile>
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 24L8 31L15 24M8 0V31" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </ArrowMobile>
                    )}
                  </JourneyStep>
                ))}
              </JourneyFlow>
              <FlowLine />
            </JourneyContainer>

            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Flexible KYC Tiers & Features</h4>
            <Grid className="cols-4">
              <SmallCard>
                <CardTitle>Zero KYC</CardTitle>
                <CardText>Quick issuance at kiosks with ₹3K limit</CardText>
              </SmallCard>
              <SmallCard>
                <CardTitle>Full KYC</CardTitle>
                <CardText>Aadhaar biometric or WhatsApp verification</CardText>
              </SmallCard>
              <SmallCard>
                <CardTitle>Multi-Use</CardTitle>
                <CardText>Metro, bus, retail, and online payments</CardText>
              </SmallCard>
              <SmallCard>
                <CardTitle>Future Ready</CardTitle>
                <CardText>Credit products and BNPL integration</CardText>
              </SmallCard>
            </Grid>

            <div style={{ marginTop: '2rem' }}>
              {/* <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem', color: '#a7d221' }}>Unique Features</h4> */}
              <Grid className="cols-3">
                <SmallCard>
                  <CardText><strong>Zero and full KYC flows</strong> for progressive onboarding</CardText>
                </SmallCard>
                <SmallCard>
                  <CardText><strong>Card control, recharge, and trip data</strong> via WhatsApp or Raahi app</CardText>
                </SmallCard>
                <SmallCard>
                  <CardText><strong>Raahi-specific offers</strong> delivered on the move</CardText>
                </SmallCard>
              </Grid>
            </div>
          </div>

          {/* Veriphy Platform */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>📲 Veriphy.io: Workflow & Ops Enabler</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              A WhatsApp-native workflow engine built for real-world operations. Used by Frog8 internally and by partners externally.
            </p>

            <HighlightBox style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0369a1' }}>Where Veriphy Is Used</h4>
              <Grid className="cols-2">
                <div>
                  <List>
                    <ListItem>Card onboarding and KYC for Raahi</ListItem>
                    <ListItem><FaUsers style={{ marginRight: '0.5rem' }} /> RM and service staff dashboards at metro stations</ListItem>
                    <ListItem><FaChartLine style={{ marginRight: '0.5rem' }} /> TVM health checks, fault logs, and technician coordination</ListItem>
                  </List>
                </div>
                <div>
                  <List>
                    <ListItem><FaBuilding style={{ marginRight: '0.5rem' }} /> Merchant acquiring, terminal tracking, and compliance</ListItem>
                    <ListItem><FaWhatsapp style={{ marginRight: '0.5rem' }} /> Customer communication – offers, feedback, alerts</ListItem>
                    <ListItem><FaRobot style={{ marginRight: '0.5rem' }} /> Multi-industry workflow automation</ListItem>
                  </List>
                </div>
              </Grid>
            </HighlightBox>

            <Grid className="cols-3">
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>Journey Tracking</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Map touchpoints, identify delays, trigger nudges</p>
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Card issued but not activated → WhatsApp reminder</p>
              </Card>
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>Document Verification</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>OCR, classify, and verify in local languages</p>
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Upload Aadhaar + PAN → Real-time verification</p>
              </Card>
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#a7d221' }}>Communication Hub</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>WhatsApp, SMS, and app notifications</p>
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#9ca3af' }}>Automated follow-ups and support</p>
              </Card>
            </Grid>
          </div>

          {/* Access-Agnostic Design */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>We Are Access-Agnostic</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              Frog8 supports any secure, NPCI-compliant access method to ensure frictionless mobility across all platforms.
            </p>
            <Grid className="cols-4">
              <GrayCard>
                <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>Bank-Agnostic</h4>
                <CardText>We support any issuer</CardText>
              </GrayCard>
              <GrayCard>
                <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>Tech-Agnostic</h4>
                <CardText>Card, NFC, QR, app, wearable, biometric</CardText>
              </GrayCard>
              <GrayCard>
                <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>Compliance-Ready</h4>
                <CardText>PCI-DSS, FIME, NCMC, NPCI aligned</CardText>
              </GrayCard>
              <GrayCard>
                <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>Platform-First</h4>
                <CardText>Unified transit, finance, and engagement</CardText>
              </GrayCard>
            </Grid>
          </div>
        </SectionContainer>
      </SectionGray>

      {/* Deployments Section */}
      <Section id="deployments">
        <SectionContainer>
          <SectionTitle>Our Deployments</SectionTitle>
          <SectionSubtitle>
            Real-world implementations with trusted partners across India
          </SectionSubtitle>

          <Grid className="cols-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>Active Deployments</h3>
              <List>
                <ListItem>Meta & BMRCL – WhatsApp ticketing platform (2019–2022), transitioned to AUM, still live today</ListItem>
                <ListItem>BMRCL Metro – TVM deployments at Cubbon Park, MG Road, and now Baiyappanahalli and beyond</ListItem>
                <ListItem>DBS, South Indian Bank – CTS implementations</ListItem>
                <ListItem>Veena World – WhatsApp Marketing (Travelling)</ListItem>
                <ListItem>Aditya Vision - WhatsApp Marketing (Retail)</ListItem>
                <ListItem>Digital Banking Units – Navo rollouts underway for Tier 2/3 expansion</ListItem>
              </List>
            </div>
            <QuoteCard>
              <Quote>
                "Live deployments with proven infrastructure, ready for rapid scaling across India's metro networks."
              </Quote>
            </QuoteCard>
          </Grid>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Ready to Scale</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              Our solutions are battle-tested in real-world conditions, from metro stations to rural banks. We're ready to help you transform your infrastructure.
            </p>
            <ButtonContainer>
              <ButtonOutline href="mailto:hello@frog8.in">Request Deployment Info</ButtonOutline>
              <ButtonOutline href="mailto:hello@frog8.in">Schedule Site Visit</ButtonOutline>
            </ButtonContainer>
          </div>
        </SectionContainer>
      </Section>

      {/* Strategic Moat */}
      <Section id="moat">
        <SectionContainer>
          <SectionTitle>Our Strategic Moat: B2N + Data</SectionTitle>
          <SectionSubtitle>
            We operate a B2N (Business to Node) model — embedding financial access directly into commuter nodes: kiosks, cards, apps, WhatsApp, NFC devices, and SDKs.
          </SectionSubtitle>

          <HighlightBox style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0369a1', textAlign: 'center' }}>
              This Approach Creates Powerful Advantages
            </h3>
            <Grid className="cols-3">
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Eliminates Traditional CAC</h4>
                <CardText>No customer acquisition costs through direct node placement</CardText>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Builds Daily Engagement</h4>
                <CardText>Through habit formation and recurring touchpoints</CardText>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Alternative Data Capture</h4>
                <CardText>Transit behavior, payments, and movement patterns</CardText>
              </div>
            </Grid>
          </HighlightBox>

          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>The Commuter Graph</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              Creates a commuter graph with high potential for personalisation, credit scoring, and cross-selling.
            </p>
            <Grid className="cols-3">
              <Card>
                <CardTitle>Personalization Engine</CardTitle>
                <CardText>Tailored offers based on commute patterns, spending habits, and location preferences</CardText>
              </Card>
              <Card>
                <CardTitle>Credit Scoring</CardTitle>
                <CardText>Alternative data from transit usage, payment consistency, and behavioral patterns</CardText>
              </Card>
              <Card>
                <CardTitle>Cross-Selling Opportunities</CardTitle>
                <CardText>Insurance, loans, investment products aligned with commuter lifecycle and needs</CardText>
              </Card>
            </Grid>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Where We're Live</h3>
            <Grid className="cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
              <div>
                <List>
                  <ListItem>Deployments with BMRCL (Namma Metro) on Purple and Green lines</ListItem>
                  <ListItem>Co-branded Raahi Card with NSDL Payments Bank</ListItem>
                  <ListItem>FAT/SAT-compliant infrastructure in place</ListItem>
                  <ListItem>Integration with NPCI, Visa/Mastercard certs underway</ListItem>
                  <ListItem>Ready for expansion to other Tier 1 & 2 cities</ListItem>
                </List>
              </div>
              <QuoteCard>
                <Quote>
                  "Live deployments with proven infrastructure, ready for rapid scaling across India's metro networks."
                </Quote>
              </QuoteCard>
            </Grid>
          </div>
        </SectionContainer>
      </Section>

      {/* Investment Thesis */}
      <SectionGray id="investment">
        <SectionContainer>
          <SectionTitle>Why This Is Investable</SectionTitle>
          <SectionSubtitle>
            Large, addressable market with proven infrastructure and multiple monetization streams.
          </SectionSubtitle>

          {/* Investment Highlights */}
          <Grid className="cols-5" style={{ marginBottom: '4rem' }}>
            <MetricCard>
              <MetricNumber>✅</MetricNumber>
              <MetricLabel>Large, addressable market</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricNumber>✅</MetricNumber>
              <MetricLabel>Low CAC, high-frequency usage</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricNumber>✅</MetricNumber>
              <MetricLabel>Multi-product monetization</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricNumber>✅</MetricNumber>
              <MetricLabel>Regulatory alignment + infrastructure</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricNumber>✅</MetricNumber>
              <MetricLabel>Deep expertise across fintech, transit</MetricLabel>
            </MetricCard>
          </Grid>

          {/* Monetization Streams */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
              Multi-Product Monetization
            </h3>
            <Grid className="cols-4">
              <Card>
                <CardTitle>Cards & Payments</CardTitle>
                <CardText>Transaction fees, interchange revenue, and processing margins</CardText>
              </Card>
              <Card>
                <CardTitle>Financial Products</CardTitle>
                <CardText>Loans, insurance, investment products with data-driven underwriting</CardText>
              </Card>
              <Card>
                <CardTitle>Merchant Services</CardTitle>
                <CardText>Terminal deployment, payment processing, and loyalty programs</CardText>
              </Card>
              <Card>
                <CardTitle>Data & Analytics</CardTitle>
                <CardText>Commuter insights, behavioral analytics, and targeted advertising</CardText>
              </Card>
            </Grid>
          </div>

          {/* Market Advantages */}
          <Grid className="cols-2" style={{ marginBottom: '4rem', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>Market Position</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Ready, Not Risky</h4>
                  <CardText>Serving digitally savvy, employed commuters—especially women</CardText>
                </Card>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Low Cost-to-Serve</h4>
                  <CardText>Unattended nodes eliminate agents and branches</CardText>
                </Card>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>Technical Edge</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Better Products</h4>
                  <CardText>Daily data drives smarter financial offerings and risk assessment</CardText>
                </Card>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Live & Scalable</h4>
                  <CardText>Deployed with BMRCL, NSDL PB, ready for Tier 1 & 2 metros</CardText>
                </Card>
              </div>
            </div>
          </Grid>

          {/* Built for Bharat */}
          <GreenSection>
            <GreenTitle>Built for Bharat</GreenTitle>
            <Grid className="cols-3">
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Multilingual</h4>
                <CardText>Local language support across all touchpoints</CardText>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Mobile-First</h4>
                <CardText>Low-bandwidth, WhatsApp-native experiences</CardText>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>Partner Agnostic</h4>
                <CardText>Works with any bank, issuer, or channel</CardText>
              </div>
            </Grid>
          </GreenSection>

          {/* Investment Focus Areas */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
              Perfect for Investors Focused On
            </h3>
            <Grid className="cols-3">
              <SmallCard>
                <CardTitle>Financial Inclusion</CardTitle>
                <CardText>With profitability and sustainable unit economics</CardText>
              </SmallCard>
              <SmallCard>
                <CardTitle>Real-World Distribution</CardTitle>
                <CardText>With tech scale and data network effects</CardText>
              </SmallCard>
              <SmallCard>
                <CardTitle>Urban Infrastructure</CardTitle>
                <CardText>With data-enabled services and recurring revenue</CardText>
              </SmallCard>
            </Grid>
          </div>
        </SectionContainer>
      </SectionGray>

      {/* About Section */}
      <SectionGray id="about">
        <SectionContainer>
          <SectionTitle>About Frog8</SectionTitle>
          <SectionSubtitle>
            Design-led platform for unattended access, payments, and onboarding
          </SectionSubtitle>

          <Grid className="cols-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>What We Do</h3>
              <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '1.5rem' }}>
                We build a modular stack combining industrial-grade hardware, secure workflow engines, messaging-native user interfaces, and form factor agnostic payment capabilities—designed to meet users where they are and institutions where they need to go.
              </p>
              <List>
                <ListItem>Unattended access solutions</ListItem>
                <ListItem>Secure onboarding platforms</ListItem>
                <ListItem>Integrated payment systems</ListItem>
                <ListItem>Industrial-grade hardware</ListItem>
              </List>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>What Guides Us</h3>
              <Grid className="cols-2">
                <SmallCard>
                  <CardTitle>Integrity</CardTitle>
                  <CardText>Doing the right thing, every time</CardText>
                </SmallCard>
                <SmallCard>
                  <CardTitle>Excellence</CardTitle>
                  <CardText>Quality in every solution</CardText>
                </SmallCard>
                <SmallCard>
                  <CardTitle>Positive Influence</CardTitle>
                  <CardText>Making a difference, 24/7</CardText>
                </SmallCard>
                <SmallCard>
                  <CardTitle>Partnership</CardTitle>
                  <CardText>Building together for India Next</CardText>
                </SmallCard>
              </Grid>
            </div>
          </Grid>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Why We Do It</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              To serve the next 100 million Indians — across Bharat and Urban India. We believe in building infrastructure that makes access invisible, reliable, and real.
            </p>
          </div>
        </SectionContainer>
      </SectionGray>

      {/* Contact Section */}
      <SectionGreen id="contact">
        <SectionContainer>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
            <FaHandshake style={{ marginRight: '0.5rem' }} /> Let's build the future of access — together
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem', textAlign: 'center' }}>
            Join us in building the infrastructure that will serve the next 100 million. Transform transit stations into gateways for financial inclusion.
          </p>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              <MdEmail style={{ marginRight: '0.5rem' }} /> Email: hello@frog8.in
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              <MdPhone style={{ marginRight: '0.5rem' }} /> Phone: +91-XXXXXXXXXX
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              <MdLocationOn style={{ marginRight: '0.5rem' }} /> Location: Bengaluru, India
            </p>
          </div>

          <ButtonContainer>
            <ButtonOutline href="mailto:hello@frog8.in">
              <FaPhone style={{ marginRight: '0.5rem' }} /> Request a Callback
            </ButtonOutline>
            <ButtonOutline href="mailto:hello@frog8.in">
              <FaHandshake style={{ marginRight: '0.5rem' }} /> Schedule a Demo
            </ButtonOutline>
            <ButtonOutline href="mailto:hello@frog8.in">
              <FaDownload style={{ marginRight: '0.5rem' }} /> Download Brochure
            </ButtonOutline>
          </ButtonContainer>
        </SectionContainer>
      </SectionGreen>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterLogo src={frog8Logo} alt="Frog8 Logo" />
          <FooterText>
            © 2025 Frog8 Technology Services Private Limited. All rights reserved.
          </FooterText>
          <FooterSubtext>
            Turning Metro Mobility into Financial Access for India Next
          </FooterSubtext>
          <FooterLinks>
            <FooterLink href="mailto:hello@frog8.in">Contact</FooterLink>
            <FooterLink href="#privacy">Privacy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
          </FooterLinks>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Frog8Website;