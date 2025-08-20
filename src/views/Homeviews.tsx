import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fitur from '../components/Fitur';
import Footer from '../components/Footer';
import About from '../components/About';

const HomeViews: React.FC = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Fitur />
    <Footer />
    </div>
  );
};

export default HomeViews;
