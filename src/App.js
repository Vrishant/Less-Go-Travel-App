import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar.js';
import SecondaryNavbar from './components/SecondaryNavbar.js';
import FindFlight from './components/findFlight.js';
import FindBus from './components/findBus.js';
import FindTrain from './components/findTrain.js';
import About from './components/about.js';
import Signup from './components/signin.js';
import Login from './components/login.js';
import Home from './components/home.js';
import Footer from './components/Footer.js';
import Flights from './components/showFlight.js';
import Trains from './components/showTrain.js';
import Buses from './components/showBus.js';
import Payment from './components/payment.js';
import PaymentSuccess from './components/success.js';
import './App.css';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || 'User  ');

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem('username') || 'User  ');
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar username={username} />
        <SecondaryNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setUsername={setUsername} />} /> {/* Pass setUsername here */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/find-flight" element={<FindFlight />} />
            <Route path="/find-train" element={<FindTrain />} />
            <Route path="/find-bus" element={<FindBus />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/trains" element={<Trains />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;