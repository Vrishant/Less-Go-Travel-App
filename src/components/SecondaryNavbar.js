// src/components/SecondaryNavbar.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AirplaneFill, TrainFrontFill, BusFrontFill } from 'react-bootstrap-icons'; // Fixed icon imports

const SecondaryNavbar = () => {
  const navStyle = {
    backgroundColor: 'rgb(34, 150, 99)',
    padding: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    // marginBottom: '20px'
  };

  const buttonStyle = {
    backgroundColor: 'rgb(44, 190, 129)',
    border: 'none',
    margin: '0 10px',
    padding: '8px 20px',
    borderRadius: '20px',
    color: 'rgb(27,20,30)',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={navStyle} className="secondary-navbar">
      <Container className="d-flex justify-content-center">
        <Button style={buttonStyle} className="transport-btn" as={Link} to="find-flight">
          <AirplaneFill size={20} /> Flights
        </Button>
        <Button style={buttonStyle} className="transport-btn" as={Link} to="find-train">
          <TrainFrontFill size={20} /> Trains
        </Button>
        <Button style={buttonStyle} className="transport-btn" as={Link} to="find-bus">
          <BusFrontFill size={20} /> Buses
        </Button>
      </Container>
    </div>
  );
};

export default SecondaryNavbar;