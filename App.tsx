import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Tariff from './pages/Tariff';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <SmoothScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tariff" element={<Tariff />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </Router>
  );
};

export default App;