import React, { useState } from 'react';

const trainsData = [
  { id: 1, train: 'Train A', stops: 'Non-Stop', price: 100, departure: '9:00 AM', arrival: '11:00 AM' },
  { id: 2, train: 'Train B', stops: '1 Stop', price: 80, departure: '1:00 PM', arrival: '3:00 PM' },
  { id: 3, train: 'Train C', stops: 'Non-Stop', price: 120, departure: '10:00 AM', arrival: '12:00 PM' },
  { id: 4, train: 'Train D', stops: '1 Stop', price: 90, departure: '2:00 PM', arrival: '4:00 PM' },
  { id: 5, train: 'Train E', stops: 'Non-Stop', price: 110, departure: '8:00 AM', arrival: '10:00 AM' },
];

function ShowTrain() {
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedTrains, setSelectedTrains] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  const handleStopChange = (stop) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((s) => s !== stop) : [...prev, stop]
    );
  };

  const handleTrainChange = (train) => {
    setSelectedTrains((prev) =>
      prev.includes(train) ? prev.filter((t) => t !== train) : [...prev, train]
    );
  };

  const sortTrains = (trains) => {
    if (sortBy === 'price') {
      return [...trains].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'time') {
      return [...trains].sort((a, b) => {
        const timeA = new Date(`1970/01/01 ${a.departure}`);
        const timeB = new Date(`1970/01/01 ${b.departure}`);
        return timeA - timeB;
      });
    }
    return trains;
  };

  const filteredTrains = sortTrains(
    trainsData.filter((train) => {
      const stopFilter = selectedStops.length === 0 || selectedStops.includes(train.stops);
      const trainFilter = selectedTrains.length === 0 || selectedTrains.includes(train.train);
      return stopFilter && trainFilter;
    })
  );

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>Filters</h3>
        <div style={styles.filterGroup}>
          <h4 style={styles.filterTitle}>Stops</h4>
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
        <div style={styles.filterGroup}>
          <h4 style={styles.filterTitle}>Trains</h4>
          {Array.from(new Set(trainsData.map((train) => train.train))).map((train) => (
            <label key={train} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                onChange={() => handleTrainChange(train)}
                style={styles.checkbox}
              />
              {train}
            </label>
          ))}
        </div>
      </div>
      <div style={styles.flightList}>
        <h2>Available Trains</h2>
        <div style={styles.sortButtons}>
          <button onClick={() => setSortBy('price')} style={styles.sortButton}>
            Sort by Price
          </button>
          <button onClick={() => setSortBy('time')} style={styles.sortButton}>
            Sort by Departure Time
          </button>
        </div>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <div key={train.id} style={styles.flightItem}>
              <div style={styles.flightDetails}>
                <div style={styles.flightAirline}>{train.train}</div>
                <div style={styles.flightTimings}>
                  {train.departure} <span style={styles.arrow}>&#8594;</span> {train.arrival}
                </div>
                <div style={styles.flightPrice}>${train.price}</div>
              </div>
              <p>Stops: {train.stops}</p>
            </div>
          ))
        ) : (
          <p>No trains available with the selected filters.</p>
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

export default ShowTrain;
