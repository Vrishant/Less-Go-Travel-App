import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeftRight, ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindFlight = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const containerStyle = {
    padding: '2rem',
    backgroundColor: 'rgb(27, 20, 30)',
    borderRadius: '15px',
    margin: '2rem auto',
  };

  const titleStyle = {
    color: 'rgb(44, 190, 129)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const tripButtonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid rgb(44, 190, 129)',
    color: 'white',
    margin: '0 10px 20px 0',
    padding: '8px 20px',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
  };

  const activeTripButtonStyle = {
    ...tripButtonStyle,
    backgroundColor: 'rgb(44, 190, 129)',
    color: 'rgb(27, 20, 30)',
  };

  const inputStyle = {
    backgroundColor: 'rgb(62, 100, 101)',
    border: 'none',
    color: 'white',
    padding: '10px',
    marginBottom: '15px',
    cursor: 'pointer',
  };

  const selectStyle = {
    ...inputStyle,
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    appearance: 'none',
  };

  const submitButtonStyle = {
    backgroundColor: 'rgb(44, 190, 129)',
    border: 'none',
    padding: '10px 30px',
    borderRadius: '25px',
    color: 'rgb(27, 20, 30)',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const customSelectStyles = `
    .custom-select option {
      background-color: rgb(27, 20, 30);
      color: white;
      padding: 10px;
    }
    .custom-select option:hover {
      background-color: rgb(44, 190, 129);
    }
    .custom-select:focus {
      border: 2px solid rgb(44, 190, 129);
      box-shadow: none;
      outline: none;
    }
    .custom-select option:checked {
      background-color: rgb(44, 190, 129);
      color: rgb(27, 20, 30);
    }
    .custom-select::-ms-expand {
      display: none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { tripType, fromCity, toCity });
  };

  const popularCities = [
    'New York', 'London', 'Tokyo', 'Paris', 'Dubai',
    'Singapore', 'Rome', 'Los Angeles', 'Barcelona', 'Hong Kong',
    'Sydney', 'Amsterdam', 'Istanbul', 'Bangkok', 'Berlin',
    'Madrid', 'Mumbai', 'San Francisco', 'Toronto', 'Seoul'
  ];

  return (
    <>
      <style>{customSelectStyles}</style>
      <Container style={containerStyle}>
        <h2 style={titleStyle}>Find Your Flight</h2>
        
        <div className="trip-type-buttons">
          <Button
            style={tripType === 'roundTrip' ? activeTripButtonStyle : tripButtonStyle}
            onClick={() => setTripType('roundTrip')}
          >
            <ArrowLeftRight className="me-2" />
            Round Trip
          </Button>
          <Button
            style={tripType === 'oneWay' ? activeTripButtonStyle : tripButtonStyle}
            onClick={() => setTripType('oneWay')}
          >
            <ArrowRight className="me-2" />
            One Way
          </Button>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>From</Form.Label>
                <Form.Select
                  style={selectStyle}
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="" disabled>Select departure city</option>
                  {popularCities.sort().map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>To</Form.Label>
                <Form.Select
                  style={selectStyle}
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="" disabled>Select destination city</option>
                  {popularCities.sort().map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={tripType === 'roundTrip' ? 6 : 12}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  style={inputStyle}
                  required
                  className="custom-select"
                />
              </Form.Group>
            </Col>
            {tripType === 'roundTrip' && (
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'white' }}>Return Date</Form.Label>
                  <Form.Control
                    type="date"
                    style={inputStyle}
                    required
                    className="custom-select"
                  />
                </Form.Group>
              </Col>
            )}
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Adults</Form.Label>
                <Form.Select 
                  style={selectStyle} 
                  defaultValue="1"
                  className="custom-select"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Children</Form.Label> <Form.Select 
                  style={selectStyle} 
                  defaultValue="0"
                  className="custom-select"
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Class</Form.Label>
                <Form.Select 
                  style={selectStyle} 
                  defaultValue="economy"
                  className="custom-select"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button type="submit" style={submitButtonStyle}>
              Search Flights
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FindFlight;

