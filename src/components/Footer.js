import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgb(27,20,30)',
    color: 'white',
    padding: '20px 0',
    width: '100%',
    bottom: 0,
  };

  const iconStyle = {
    color: 'white',
    margin: '0 10px',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const hoverStyle = {
    ':hover': {
      color: 'rgb(44, 190, 129)',
    }
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5 style={{ color: 'rgb(44, 190, 129)' }}>About Us</h5>
            <p>Discover the world with The Travel App. Your journey begins here.</p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: 'rgb(44, 190, 129)' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" style={linkStyle}>Home</a></li>
              <li><a href="#destinations" style={linkStyle}>Destinations</a></li>
              <li><a href="#blog" style={linkStyle}>Blog</a></li>
              <li><a href="#contact" style={linkStyle}>Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: 'rgb(44, 190, 129)' }}>Follow Us</h5>
            <a href="#facebook" style={iconStyle}><Facebook /></a>
            <a href="#twitter" style={iconStyle}><Twitter /></a>
            <a href="#instagram" style={iconStyle}><Instagram /></a>
            <a href="#linkedin" style={iconStyle}><Linkedin /></a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <hr style={{ borderColor: 'rgb(44, 190, 129)', margin: '20px auto', width: '80%' }} />
            <p>&copy; 2023 The Travel App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;