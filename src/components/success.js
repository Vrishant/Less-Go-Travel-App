// src/components/PaymentSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e9f5e9',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '2em',
      color: '#4CAF50',
      marginBottom: '20px',
    },
    message: {
      fontSize: '1.2em',
      marginBottom: '30px',
    },
    amount: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payment Successful!</h1>
      <p style={styles.message}>Thank you for your payment.</p>
      <p style={styles.amount}>₹9,905 has been charged to your account.</p>
      <button style={styles.button} onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default PaymentSuccess;