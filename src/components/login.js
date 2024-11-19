import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUsername }) { // Accept setUsername as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const result = await response.json();
      console.log("Login response: ", result);
      if (response.ok) {
        localStorage.setItem('username', result.data.user.username); // Set username in local storage
        setUsername(result.data.user.username); // Update username in App.js
        navigate('/'); // Navigate to home after login
      } else {
        alert(result.message || 'Login failed. Please check your response');
      }
    } catch (error) {
      console.error("Error during login :", error);
      alert("An error occurred. Please try again later");
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '500px', // Increased width
      margin: 'auto',
      padding: '30px', // Increased padding
      backgroundColor: 'rgb(27, 20, 30)', // Adhering to the theme
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      color: 'white', // Text color to match the theme
      marginTop: "15vh"
    },
    formGroup: {
      marginBottom: '20px', // Increased margin for spacing
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '16px', // Increased font size
    },
    input: {
      width: '100%',
      padding: '12px', // Increased padding for input
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px', // Increased font size for input
    },
    button: {
      width: '100%',
      padding: '12px', // Increased padding for button
      backgroundColor: 'rgb(34, 150, 99)', // Button color to match the theme
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px', // Increased font size for button
    },
    newUser:   {
      marginTop: '15px',
      textAlign: 'center',
      fontSize: '14px', // Font size for the new user message
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <div style={styles.newUser }>
        <p>New user? <Link to="/signup" style={{ color: 'rgb(34, 150, 99)' }}>Sign up here</Link></p>
      </div>
    </div>
  );
}

export default Login;