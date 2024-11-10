import React, { useState } from 'react';

const busesData = [
  { id: 1, bus: 'Bus A', stops: 'Non-Stop', price: 50, departure: '7:00 AM', arrival: '9:00 AM' },
  { id: 2, bus: 'Bus B', stops: '1 Stop', price: 40, departure: '10:00 AM', arrival: '12:00 PM' },
  { id: 3, bus: 'Bus C', stops: 'Non-Stop', price: 55, departure: '8:00 AM', arrival: '10:00 AM' },
  { id: 4, bus: 'Bus D', stops: '1 Stop', price: 45, departure: '11:00 AM', arrival: '1:00 PM' },
  { id: 5, bus: 'Bus E', stops: 'Non-Stop', price: 60, departure: '6:00 AM', arrival: '8:00 AM' },
];

function ShowBus() {
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedBuses, setSelectedBuses] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  const handleStopChange = (stop) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((s) => s !== stop) : [...prev, stop]
    );
  };

  const handleBusChange = (bus) => {
    setSelectedBuses((prev) =>
      prev.includes(bus) ? prev.filter((b) => b !== bus) : [...prev, bus]
    );
  };

  const sortBuses = (buses) => {
    if (sortBy === 'price') {
      return [...buses].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'time') {
      return [...buses].sort((a, b) => {
        const timeA = new Date(`1970/01/01 ${a.departure}`);
        const timeB = new Date(`1970/01/01 ${b.departure}`);
        return timeA - timeB;
      });
    }
    return buses;
  };

  const filteredBuses = sortBuses(
    busesData.filter((bus) => {
      const stopFilter = selectedStops.length === 0 || selectedStops.includes(bus.stops);
      const busFilter = selectedBuses.length === 0 || selectedBuses.includes(bus.bus);
      return stopFilter && busFilter;
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
          <h4 style={styles.filterTitle}>Buses</h4>
          {Array.from(new Set(busesData.map((bus) => bus.bus))).map((bus) => (
            <label key={bus} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                onChange={() => handleBusChange(bus)}
                style={styles.checkbox}
              />
              {bus}
            </label>
          ))}
        </div>
      </div>
      <div style={styles.flightList}>
        <h2>Available Buses</h2>
        <div style={styles.sortButtons}>
          <button onClick={() => setSortBy('price')} style={styles.sortButton}>
            Sort by Price
          </button>
          <button onClick={() => setSortBy('time')} style={styles.sortButton}>
            Sort by Departure Time
          </button>
        </div>
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => (
            <div key={bus.id} style={styles.flightItem}>
              <div style={styles.flightDetails}>
                <div style={styles.flightAirline}>{bus.bus}</div>
                <div style={styles.flightTimings}>
                  {bus.departure} <span style={styles.arrow}>&#8594;</span> {bus.arrival}
                </div>
                <div style={styles.flightPrice}>${bus.price}</div>
              </div>
              <p>Stops: {bus.stops}</p>
            </div>
          ))
        ) : (
          <p>No buses available with the selected filters.</p>
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
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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


export default ShowBus;
