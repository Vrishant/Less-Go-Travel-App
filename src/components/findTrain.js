import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindTrain = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

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
    console.log('Form submitted:', { fromStation, toStation });
  };

  const popularStations = [
    'New York Penn Station', 'Chicago Union Station', 'Los Angeles Union Station',
    'Washington Union Station', 'Boston South Station', 'Philadelphia 30th Street Station',
    'San Francisco Transbay Terminal', 'Seattle King Street Station', 'Miami Central Station',
    'Denver Union Station'
  ];

  return (
    <>
      <style>{customSelectStyles}</style>
      <Container style={containerStyle}>
        <h2 style={titleStyle}>Find Your Train</h2>
        
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>From</Form.Label>
                <Form.Select
                  style={selectStyle}
                  value={fromStation}
                  onChange={(e) => setFromStation(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="" disabled>Select departure station</option>
                  {popularStations.sort().map((station) => (
                    <option key={station} value={station}>{station}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>To</Form.Label>
                <Form.Select
                  style={selectStyle}
                  value={toStation}
                  onChange={(e) => setToStation(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="" disabled>Select arrival station</option>
                  {popularStations.sort().map((station) => (
                    <option key={station} value={station}>{station}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Passengers</Form.Label>
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
          </Row>

          <div className="text-center">
            <Button type="submit" style={submitButtonStyle}>
              <ArrowRight className="me-2" />
              Search Trains
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FindTrain;