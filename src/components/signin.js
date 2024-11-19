// src/components/signin.js

import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const navigate=useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          username: `${firstName} ${lastName}`,
          email,
          password
        })
      });
      const data = await response.json();
      console.log("Data after registeration is: ",data);
      if(response.ok){
        //<a href ='/login'/>
        navigate('/login');
      }else{
        alert(data.message || 'Error occurred while registering');
      }
    } catch ( error) {
      console.log('Error ',error);
      alert("Error in registeration. Please try again.");
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '70vw',
      margin: 'auto',
      padding: '30px',
      backgroundColor: 'rgb(27, 20, 30)',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      color: 'white',
      marginTop: "15vh",
      marginBottom: "15vh"
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '16px',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: 'rgb(34, 150, 99)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    newUser:  {
      marginTop: '15px',
      textAlign: 'center',
      fontSize: '14px',
    },
    inlineFields: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    inlineInput: {
      width: '48%', // Adjust width to fit inline
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ ...styles.formGroup, ...styles.inlineFields }}>
          <div style={styles.inlineInput}>
            <label htmlFor="firstName" style={styles.label}>First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inlineInput}>
            <label htmlFor="lastName" style={styles.label}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        </div>
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
        <div style={styles.formGroup}>
          <label htmlFor="gender" style={styles.label}>Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</ option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <div style={styles.newUser }>
        Already have an account? <a href="/login" style={{ color: 'rgb(34, 150, 99)' }}>Login here</a>
      </div>
    </div>
  );
}

export default SignIn;