import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import FindFlight from './components/findFlight';
import FindBus from './components/findBus'
import FindTrain from './components/findTrain'
import About from './components/about';
import Signup from './components/signin';
import Login from './components/login';
import Home from './components/home';
import Footer from './components/Footer';
import Flights from './components/showFlight';
import Trains from './components/showTrain';
import Buses from './components/showBus';
import Payment from './components/payment'
import PaymentSuccess from './components/success';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar username={'Bhalla'}/>
        <SecondaryNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
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