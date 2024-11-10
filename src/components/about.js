import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GlobeAmericas, PeopleFill, Award, CurrencyDollar, Clock } from 'react-bootstrap-icons';

export default function About() {
  const sectionStyle = {
    padding: '4rem 0',
    backgroundColor: 'rgb(62, 100, 101)',
    color: 'white',
  };

  const cardStyle = {
    backgroundColor: 'rgb(27, 20, 30)',
    border: 'none',
    borderRadius: '15px',
    padding: '2rem',
    height: '100%',
    transition: 'transform 0.3s ease',
    color: 'white',
  };

  const iconStyle = {
    color: 'rgb(44, 190, 129)',
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const titleStyle = {
    color: 'rgb(44, 190, 129)',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const textStyle = {
    color: 'white',
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <h2 style={{ ...titleStyle, textAlign: 'center', marginBottom: '3rem' }}>About Less Go Travel</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="h-100" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <GlobeAmericas style={iconStyle} />
                <Card.Title style={titleStyle}>All-in-One Travel Solution</Card.Title>
                <Card.Text style={textStyle}>
                  Less Go Travel is your comprehensive travel companion. Book flights, hotels, and transportation all in one place. We offer a wide range of options from budget-friendly to luxury experiences for both leisure and business travelers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="h-100" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <CurrencyDollar style={iconStyle} />
                <Card.Title style={titleStyle}>Best Deals and Offers</Card.Title>
                <Card.Text style={textStyle}>
                  Enjoy the best prices and exclusive deals on flights, hotels, and vacation packages. Our partnerships with major airlines and hotel chains allow us to offer you unbeatable discounts and special promotions throughout the year.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="h-100" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Clock style={iconStyle} />
                <Card.Title style={titleStyle}>Flexible Booking Options</Card.Title>
                <Card.Text style={textStyle}>
                  We understand plans can change. That's why we offer flexible booking options including free cancellations and rescheduling on many flights and hotels. Enjoy peace of mind with our customer-friendly policies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card style={cardStyle} className="h-100" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <PeopleFill style={iconStyle} />
                <Card.Title style={titleStyle}>24/7 Customer Support</Card.Title>
                <Card.Text style={textStyle}>
                  Our dedicated customer support team is available round the clock to assist you with any queries or issues. Whether it's booking help, travel information, or emergency assistance, we're always here for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card style={cardStyle} className="h-100" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Award style={iconStyle} />
                <Card.Title style={titleStyle}>Trusted Travel Partner</Card.Title>
                <Card.Text style={textStyle}>
                  With years of experience in the travel industry, Less Go Travel is your trusted partner for all your journeys. We're committed to making travel simple, affordable, and unforgettable for every customer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}