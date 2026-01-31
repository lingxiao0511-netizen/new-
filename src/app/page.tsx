import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FreeReading from './components/FreeReading';
import Cases from './components/Cases';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FreeReading />
        <Cases />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
