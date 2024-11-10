import React, { useState } from 'react';

const flightsData = [
  { id: 1, airline: 'Airline A', stops: 'Non-Stop', price: 200, departure: '10:00 AM', arrival: '12:00 PM' },
  { id: 2, airline: 'Airline B', stops: '1 Stop', price: 150, departure: '1:00 PM', arrival: '3:00 PM' },
  { id: 3, airline: 'Airline C', stops: 'Non-Stop', price: 250, departure: '9:00 AM', arrival: '11:00 AM' },
  { id: 4, airline: 'Airline D', stops: '1 Stop', price: 180, departure: '2:00 PM', arrival: '4:00 PM' },
  { id: 5, airline: 'Airline E', stops: 'Non-Stop', price: 220, departure: '11:00 AM', arrival: '1:00 PM' },
];

function ShowFlight() {
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [sortBy, setSortBy] = useState(null); // To keep track of sorting type

  const handleStopChange = (stop) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((s) => s !== stop) : [...prev, stop]
    );
  };

  const handleAirlineChange = (airline) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
    );
  };

  // Sort functions
  const sortFlights = (flights) => {
    if (sortBy === 'price') {
      return [...flights].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'time') {
      return [...flights].sort((a, b) => {
        const timeA = new Date(`1970/01/01 ${a.departure}`);
        const timeB = new Date(`1970/01/01 ${b.departure}`);
        return timeA - timeB;
      });
    }
    return flights;
  };

  const filteredFlights = sortFlights(
    flightsData.filter((flight) => {
      const stopFilter = selectedStops.length === 0 || selectedStops.includes(flight.stops);
      const airlineFilter = selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline);
      return stopFilter && airlineFilter;
    })
  );

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>Filters</h3>
        <div style={styles.filterGroup}>
          <h4 style={styles.filterTitle}>Stops</h4>
          <div style={styles.filterOptions}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                onChange={() => handleStopChange('Non-Stop')}
                style={styles.checkbox}
              />
              Non-Stop
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                onChange={() => handleStopChange('1 Stop')}
                style={styles.checkbox}
              />
              1 Stop
            </label>
          </div>
        </div>
        <div style={styles.filterGroup}>
          <h4 style={styles.filterTitle}>Airlines</h4>
          <div style={styles.filterOptions}>
            {Array.from(new Set(flightsData.map((flight) => flight.airline))).map((airline) => (
              <label key={airline} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  onChange={() => handleAirlineChange(airline)}
                  style={styles.checkbox}
                />
                {airline}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div style={styles.flightList}>
        <h2>Available Flights</h2>
        <div style={styles.sortButtons}>
          <button onClick={() => setSortBy('price')} style={styles.sortButton}>
            Sort by Price
          </button>
          <button onClick={() => setSortBy('time')} style={styles.sortButton}>
            Sort by Departure Time
          </button>
        </div>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <div
              key={flight.id}
              style={styles.flightItem}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = styles.hoverShadow.boxShadow)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = styles.flightItem.boxShadow)}
            >
              <div style={styles.flightDetails}>
                <div style={styles.flightAirline}>
                  <span role="img" aria-label="airplane">✈️</span>
                  {flight.airline}
                </div>
                <div style={styles.flightTimings}>
                  {flight.departure} <span style={styles.arrow}>&#8594;</span> {flight.arrival}
                </div>
                <div style={styles.flightPrice}>
                  ${flight.price}
                </div>
              </div>
              <p>Stops: {flight.stops}</p>
            </div>
          ))
        ) : (
          <p>No flights available with the selected filters.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor: 'rgb(62, 100, 101)',
    color: 'white',
  },
  sidebar: {
    width: '25%',
    padding: '15px',
    backgroundColor: 'rgb(45, 70, 70)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    marginRight: '20px',
  },
  sidebarTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#ffdd59',
  },
  filterGroup: {
    marginBottom: '15px',
    padding: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '6px',
  },
  filterTitle: {
    fontSize: '1em',
    marginBottom: '8px',
    color: '#ffd700',
  },
  filterOptions: {
    paddingLeft: '5px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '0.9em',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    marginRight: '10px',
    borderRadius: '4px',
    accentColor: '#ffdd59',
  },
  flightList: {
    width: '75%',
    padding: '10px',
  },
  sortButtons: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  sortButton: {
    padding: '8px 12px',
    backgroundColor: '#1D3C3E',
    border: '1px black ridge',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#E8F7F1',
    fontWeight: 'bold',
  },
  flightItem: {
    border: '1px solid white',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '12px',
    backgroundColor: 'rgb(27, 20, 30)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease',
  },
  hoverShadow: {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
  flightDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flightAirline: {
    fontSize: '1.1em',
  },
  flightTimings: {
    fontSize: '0.9em',
  },
  arrow: {
    margin: '0 5px',
  },
  flightPrice: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#ffdd59',
  },
};

export default ShowFlight;
