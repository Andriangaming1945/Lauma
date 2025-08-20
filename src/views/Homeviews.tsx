import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fitur from '../components/Fitur';
import Interaktif from '../components/Interaktif';
import Komunitas from '../components/Komunitas';
import Footer from '../components/Footer';
import About from '../components/About';

const HomeViews: React.FC = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Fitur />
    <Interaktif />
    <Komunitas />
    <Footer />
    </div>
  );
};

export default HomeViews;
