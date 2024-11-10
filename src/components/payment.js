// src/components/Payment.js
import React, { useState } from 'react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Payment method selected: ${selectedMethod}`);
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '10vh',
    },
    sidebar: {
      flex: 1,
      marginRight: '20px',
      borderRight: '1px solid #ccc',
    },
    sidebarTitle: {
      marginBottom: '15px',
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
    },
    sidebarItem: {
      padding: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    sidebarItemHover: {
      backgroundColor: '#e6e6e6',
    },
    sidebarItemActive: {
      backgroundColor: '#d1e7dd',
    },
    plusIcon: {
      float: 'right',
      fontWeight: 'bold',
    },
    paymentForm: {
      flex: 2,
    },
    paymentFormTitle: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
    },
    paymentSummary: {
      margin: '20px 0',
      fontSize: '1.2em',
    },
    payButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      float: 'right',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    payButtonHover: {

    },
  };

  // Define content for each payment method
  const renderPaymentContent = () => {
    switch (selectedMethod) {
      case 'Credit/Debit/ATM Card':
        return (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Card Number" style={styles.input} required />
            <input type="text" placeholder="Name on Card" style={styles.input} required />
            <input type="text" placeholder="Expiry" style={styles.input} required />
            <input type="text" placeholder="CVV" style={styles.input} required />
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      case 'Net Banking':
        return (
          <form onSubmit={handleSubmit}>
            <select style={styles.input} required>
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      case 'UPI':
        return (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter UPI ID" style={styles.input} required />
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      case 'Pay Later':
        return (
          <form onSubmit={handleSubmit}>
            <p>Choose a Pay Later provider:</p>
            <select style={styles.input} required>
              <option value="">Select Provider</option>
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
            </select>
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      case 'Gift cards & e-wallets':
        return (
          <form onSubmit={handleSubmit}>
            <p>Choose your e-wallet or enter gift card details:</p>
            <input type="text" placeholder="Wallet or Gift Card Number" style={styles.input} required />
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      case 'EMI':
        return (
          <form onSubmit={handleSubmit}>
            <p>Select EMI plan:</p>
            <select style={styles.input} required>
              <option value="">3 months - ₹3,302/month</option>
              <option value="">6 months - ₹1,651/month</option>
              <option value="">12 months - ₹826/month</option>
            </select>
            <div style={styles.paymentSummary}>
              <p><strong>₹9,905</strong> due now</p>
            </div>
            <button type="submit" style={styles.payButton}>PAY NOW</button>
          </form>
        );
      default:
        return <p>Please select a payment method to proceed.</p>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Payment Methods</h2>
        <ul style={styles.sidebarList}>
          {['Credit/Debit/ATM Card', 'Net Banking', 'UPI', 'Pay Later', 'Gift cards & e-wallets', 'EMI'].map((method) => (
            <li
              key={method}
              style={{
                ...styles.sidebarItem,
                ...(selectedMethod === method ? styles.sidebarItemActive : {}),
              }}
              onClick={() => handleMethodChange(method)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedMethod === method ? styles.sidebarItemActive.backgroundColor : 'transparent'}
            >
              {method} <span style={styles.plusIcon}>+</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.paymentForm}>
        <h2 style={styles.paymentFormTitle}>{selectedMethod || 'Select a payment method'}</h2>
        {renderPaymentContent()}
      </div>
    </div>
  );
};

export default Payment;
