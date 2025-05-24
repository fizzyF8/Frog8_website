import React, { useState } from 'react';
import styled from 'styled-components';
import frog8Logo from './assets/images/frog8_logo.jpg';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
`;

const CompanyName = styled.div`
  display: none;
  margin-left: 1rem;
  font-size: 0.875rem;
  color: #6b7280;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

const NavButton = styled.button`
  font-size: 0.875rem;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a7d221 ;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    &.hide-mobile {
      display: none;
    }
  }
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionGray = styled(Section)`
  background-color: #f3f4f6;
`;

const SectionGreen = styled(Section)`
  background-image: linear-gradient(to right, #059669, #0d9488);
  color: white;
  padding: 5rem 0;
`;

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: #6b7280;
  max-width: 64rem;
  margin: 0 auto 3rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
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

  &:hover {
    background-color: #f3f4f6;
  }
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

  &:hover {
    background-color: white;
    color: #059669;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  &.cols-3 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &.cols-2 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &.cols-4 {
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #a7d221 ;
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

  @media (max-width: 767px) {
    display: none;
  }
`;

const ArrowMobile = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    display: none;
  }
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

  @media (min-width: 768px) {
    display: block;
  }
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
    background-color: #a7d221 ;
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

const Footer = styled.footer`
  background-color: white;
  color: #1f2937;
  padding: 3rem 0;
  border-top: 1px solid #e5e7eb;
`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
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
`;

const FooterLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #a7d221 ;
  }
`;

const Frog8Website = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
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
              {/* <CompanyName>Technology Services Private Limited</CompanyName> */}
            </LogoContainer>

            <NavLinks>
              <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
              <NavButton onClick={() => scrollToSection('solutions')}>Solutions</NavButton>
              <NavButton onClick={() => scrollToSection('products')}>Products</NavButton>
              <NavButton className="hide-mobile" onClick={() => scrollToSection('why-frog8')}>Why Frog8</NavButton>
              <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
            </NavLinks>
          </NavContainer>
        </Nav>
      </Header>

      {/* Hero Section */}
      <SectionGreen id="home">
        <SectionContainer>
          {/* <HeroTitle>
            Empowering Commuter-First Financial Access
          </HeroTitle> */}
          {/* <HeroSubtitle>
            One card. One platform. One journey. Frog8 reimagines public transit as a gateway for inclusive, unattended financial services.
          </HeroSubtitle> */}
          <HeroTitle>
            India Next: Under-Captured, Not Underserved
          </HeroTitle>
          <HeroSubtitle>
            The next 100 million commuters are rising, mobile, and ready. Frog8's B2N (Business-to-Node) strategy deploys financial infrastructure where they already are.
          </HeroSubtitle>
          <ButtonContainer>
            <Button onClick={() => scrollToSection('solutions')}>
              Explore Solutions
            </Button>
            <ButtonOutline href="mailto:hello@frog8.in">
              Partner With Us
            </ButtonOutline>
            <ButtonOutline href="mailto:hello@frog8.in">
              Investor Deck
            </ButtonOutline>
          </ButtonContainer>
        </SectionContainer>
      </SectionGreen>

      {/* Solutions */}
      <SectionGray id="solutions">
        <SectionContainer>
          <SectionTitle>
            One Platform. Multi-Modal. Designed for Scale.
          </SectionTitle>
          <SectionSubtitle>
            Frog8's data-enabled access infrastructure unifies transit, payments, loyalty, and communications to power India's urban mobility and financial inclusion.
          </SectionSubtitle>


          {/* Transit Infrastructure */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Smart Kiosk Infrastructure</h3>
            <Grid className="cols-2" style={{ marginBottom: '3rem' }}>
              <Card leftAlign>
                <CardTitle>TVM 1000</CardTitle>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  QR ticket printing for seamless commuter access.
                  Real-time transaction processing and UPI payments for instant, cashless travel.
                </p>
                <List>
                  <ListItem>QR ticket printing</ListItem>
                  <ListItem>Real-time transaction processing</ListItem>
                  <ListItem>UPI payments</ListItem>
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

            {/* Access Methods */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Beyond Plastic: Access-Agnostic Design</h3>
            <Grid className="cols-2" style={{ alignItems: 'center', marginBottom: '4rem', gap: '3rem' }}>
              <div>
                <List>
                  <ListItem>NCMC-compliant prepaid and credit cards</ListItem>
                  <ListItem>NFC-enabled smartphones and wearables</ListItem>
                  <ListItem>QR-based check-in/out and app SDKs</ListItem>
                  <ListItem>Fastag-linked parking access</ListItem>
                  <ListItem>Future-ready biometric entry</ListItem>
                </List>
              </div>
              <QuoteCard>
                <Quote>
                  "We support any pathway that helps commuters move securely and frictionlessly."
                </Quote>
              </QuoteCard>
            </Grid>

            {/* Raahi Ecosystem */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Raahi Card Ecosystem</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              One card. One platform. One journey. Frog8 reimagines public transit as a gateway for inclusive, unattended financial services.Co-branded with NSDL PB, the Raahi Card is a scalable NCMC solution for transit and merchant payments.
            </p>
            <div style={{ marginBottom: '4rem' }}>
              {/* <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Market Opportunity</h3> */}

              <Grid className="cols-3" style={{ marginBottom: '4rem' }}>
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

              {/* Journey Mapping */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Capturing the Commuter Journey</h3>
                <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                  From ride-booking to rewards, Frog8 captures micro-moments to build a consented commuter graph—personalizing products and improving credit models.
                </p>
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
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Types and Features</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              The Raahi Card ecosystem supports progressive KYC journeys, enabling users to start with basic transit access and upgrade to full financial services. From metro gates to merchant terminals, one card powers multiple payment scenarios while maintaining regulatory compliance.
            </p>
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
          </div>
        </SectionContainer>
      </SectionGray>

      {/* Products */}
      <Section id="products">
        <SectionContainer>
          <SectionTitle>Platform Components</SectionTitle>
          <SectionSubtitle>
            Modular infrastructure designed for the edge, powering transit and financial inclusion.
          </SectionSubtitle>

          {/* Core Products */}
          <Grid className="cols-3" style={{ marginBottom: '4rem' }}>
            <Card>
              <CardTitle>Smart Kiosks</CardTitle>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>TVM 2000 & 4000 for ticketing, top-ups, and card services</p>
              <List>
                <ListItem>Accept UPI, cash, and cards</ListItem>
                <ListItem>Real-time payment processing</ListItem>
                <ListItem>PCI-DSS certified</ListItem>
              </List>
            </Card>
            <Card>
              <CardTitle>Raahi Card</CardTitle>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>NCMC-compliant card for transit and retail payments</p>
              <List>
                <ListItem>Co-branded with NSDL PB</ListItem>
                <ListItem>Instant issuance at stations</ListItem>
                <ListItem>Multi-modal usage</ListItem>
              </List>
            </Card>
            <Card>
              <CardTitle>Payment Stack</CardTitle>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>SDKs and terminals for seamless transactions</p>
              <List>
                <ListItem>QR and NFC integration</ListItem>
                <ListItem>Digital signage support</ListItem>
                <ListItem>Merchant engagement tools</ListItem>
              </List>
            </Card>
          </Grid>

          {/* Technical Capabilities */}
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Technical Excellence</h3>
          <Grid className="cols-4">
            <GrayCard>
              <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>PCI-DSS</h4>
              <CardText>Payment security compliance</CardText>
            </GrayCard>
            <GrayCard>
              <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>RBI Guidelines</h4>
              <CardText>KYC and regulatory compliance</CardText>
            </GrayCard>
            <GrayCard>
              <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>NPCI Certified</h4>
              <CardText>NCMC and UPI integrations</CardText>
            </GrayCard>
            <GrayCard>
              <h4 style={{ fontWeight: '600', color: '#a7d221', marginBottom: '0.5rem' }}>UIDAI Compliant</h4>
              <CardText>Aadhaar authentication</CardText>
            </GrayCard>
          </Grid>

          {/* Veriphy Product */}
          <div style={{ marginTop: '5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Veriphy.io: Smart Onboarding Platform</h3>
            <p style={{ fontSize: '1.125rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              WhatsApp-based onboarding and workflow platform for industries where speed, trust, and visibility matter.
            </p>

            {/* Core Capabilities */}
            <Grid className="cols-3" style={{ marginBottom: '4rem' }}>
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

            {/* Industry Applications */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Industry Applications</h3>
            <Grid className="cols-3">
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#a7d221' }}>Transit & Metro</h4>
                <List>
                  <ListItem>Card issuance and KYC workflows</ListItem>
                  <ListItem>Agent task management</ListItem>
                  <ListItem>Customer engagement and support</ListItem>
                </List>
              </Card>
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#a7d221' }}>Banking & NBFCs</h4>
                <List>
                  <ListItem>Loan onboarding and PDD tracking</ListItem>
                  <ListItem>RM performance management</ListItem>
                  <ListItem>Automated compliance workflows</ListItem>
                </List>
              </Card>
              <Card>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#a7d221' }}>Insurance & Healthcare</h4>
                <List>
                  <ListItem>Policy issuance automation</ListItem>
                  <ListItem>Claims workflow management</ListItem>
                  <ListItem>Agent-customer coordination</ListItem>
                </List>
              </Card>
            </Grid>
          </div>
        </SectionContainer>
      </Section>

      {/* Why Frog8 */}
      <Section id="why-frog8">
        <SectionContainer>
          <SectionTitle>Why Frog8</SectionTitle>
          <SectionSubtitle>
            Delivering impact, inclusion, and infrastructure that scales with India's urban growth.
          </SectionSubtitle>

          <Grid className="cols-2" style={{ marginBottom: '4rem', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>Market Advantages</h3>
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
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#a7d221' }}>Technical Strengths</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Better Products</h4>
                  <CardText>Daily data drives smarter financial offerings</CardText>
                </Card>
                <Card>
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Live & Scalable</h4>
                  <CardText>Deployed with BMRCL, NSDL PB, ready for Tier 1 & 2 metros</CardText>
                </Card>
              </div>
            </div>
          </Grid>

          {/* Key Differentiators */}
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
        </SectionContainer>
      </Section>

      {/* Contact */}
      <SectionGreen id="contact">
        <SectionContainer>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
            Let's Build India Next Together
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem', textAlign: 'center' }}>
            Partner with Frog8 to bring commuter-first financial access to millions. Transform transit stations into gateways for financial inclusion.
          </p>
          <ButtonContainer>
            <ButtonOutline href="mailto:hello@frog8.in">
              Request Demo
            </ButtonOutline>
            <ButtonOutline href="mailto:hello@frog8.in">
              Partner With Us
            </ButtonOutline>
            <ButtonOutline href="mailto:hello@frog8.in">
              Investor Deck
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
            Empowering Commuter-First Financial Access
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