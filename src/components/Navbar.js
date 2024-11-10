import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { House, Compass, Search, BookmarkHeart, InfoCircle, PersonCircle } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const NavigationBar = ({ username }) => {
  const navbarStyle = {
    backgroundColor: 'rgb(44, 190, 129)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  };

  const iconStyle = {
    color: 'rgb(27,20,30)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  const brandStyle = {
    color: 'rgb(27,20,30)',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Navbar expand="lg" style={navbarStyle} className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" style={brandStyle} className="d-flex align-items-center">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          Less Go Travel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="mx-3" style={iconStyle}>
              <House />
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3" style={iconStyle}>
              <InfoCircle />
            </Nav.Link>
            <Nav.Link as={Link} to="/find-flight" className="mx-3" style={iconStyle}>
              <Search />
            </Nav.Link>
            {/* Username and logout dropdown menu */}
            <Dropdown align="end" className="mx-3">
              <Dropdown.Toggle
                as={Nav.Link}
                className="d-flex align-items-center"
                style={{ padding: 0 }}
              >
                <PersonCircle style={iconStyle} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText>{username}</Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/login">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
