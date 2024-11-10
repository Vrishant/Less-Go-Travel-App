import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window.bootstrap !== 'undefined') {
        const carouselElement = document.getElementById('carouselExampleCaptions');
        if (carouselElement) {
          new window.bootstrap.Carousel(carouselElement, {
            interval: 7000,
            wrap: true
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const carouselElement = document.getElementById('carouselExampleCaptions');
      if (carouselElement && typeof window.bootstrap !== 'undefined') {
        const carouselInstance = window.bootstrap.Carousel.getInstance(carouselElement);
        if (carouselInstance) {
          carouselInstance.dispose();
        }
      }
    };
  }, []);

  const carouselStyle = {
    maxHeight: '600px',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '600px',
    objectFit: 'cover',
    width: '100%'
  };

  const captionStyle = {
    backgroundColor: 'rgba(27, 20, 30, 0.7)',
    padding: '20px',
    borderRadius: '10px'
  };

  const headingStyle = {
    color: 'rgb(44, 190, 129)',
    fontWeight: 'bold'
  };

  const paragraphStyle = {
    color: 'white'
  };

  const cardContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '2rem',
    padding: '2rem',
    scrollSnapType: 'x mandatory',
    scrollPadding: '0 24px',
  };

  const cardStyle = {
    minWidth: '18rem',
    flex: '0 0 auto',
    backgroundColor: 'rgb(27, 20, 30)',
    color: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    scrollSnapAlign: 'start',
  };

  const cardImageStyle = {
    height: '200px',
    objectFit: 'cover'
  };

  const cardButtonStyle = {
    backgroundColor: 'rgb(44, 190, 129)',
    border: 'none',
    padding: '8px 20px',
    color: 'rgb(27, 20, 30)',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  };

  return (
    <div className="home-container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" className="d-block w-100" alt="Travel" style={imageStyle} />
        <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={headingStyle}>Discover Amazing Destinations</h5>
            <p style={paragraphStyle}>Explore breathtaking landscapes and vibrant cultures around the world.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" className="d-block w-100" alt="Vacation" style={imageStyle} />
        <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={headingStyle}>Plan Your Dream Vacation</h5>
            <p style={paragraphStyle}>Let us help you create unforgettable memories with our expert travel planning.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0" className="d-block w-100" alt="Adventure" style={imageStyle} />
        <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5 style={headingStyle}>Embark on New Adventures</h5>
            <p style={paragraphStyle}>From thrilling activities to serene retreats, find your perfect adventure.</p>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
      {/* Cards Section */}
      <h2 style={{ textAlign: 'center', margin: '2rem 0', color: 'rgb(44, 190, 129)' }}>Popular Destinations</h2>
      <div style={cardContainerStyle}>
        {/* Card 1 */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
               className="card-img-top" 
               alt="Paris"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>Paris, France</h5>
            <p className="card-text">Experience the magic of the City of Light. Visit the iconic Eiffel Tower and indulge in French cuisine.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore Paris</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1533050487297-09b450131914" 
               className="card-img-top" 
               alt="Bali"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>Bali, Indonesia</h5>
            <p className="card-text">Discover tropical paradise with pristine beaches, ancient temples, and vibrant culture.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore Bali</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" 
               className="card-img-top" 
               alt="Tokyo"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>Tokyo, Japan</h5>
            <p className="card-text">Experience the blend of tradition and modernity in the bustling capital of Japan.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore Tokyo</a>
          </div>
        </div>

        {/* Card 4 (New) */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" 
               className="card-img-top" 
               alt="London"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>London, UK</h5>
            <p className="card-text">Explore the historic city of London, from Big Ben to Buckingham Palace.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore London</a>
          </div>
        </div>

        {/* Card 5 (New) */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" 
               className="card-img-top" 
               alt="New York"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>New York, USA</h5>
            <p className="card-text">Discover the city that never sleeps, from Times Square to Central Park.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore New York</a>
          </div>
        </div>

        {/* Card 6 (New) */}
        <div className="card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
               className="card-img-top" 
               alt="Sydney"
               style={cardImageStyle} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'rgb(44, 190, 129)' }}>Sydney, Australia</h5>
            <p className="card-text">Visit the land down under, featuring the iconic Opera House and beautiful beaches.</p>
            <a href="#" className="btn" style={cardButtonStyle}>Explore Sydney</a>
          </div>
        </div>
      </div>
    </div>
  );
}