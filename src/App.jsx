import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhySpeedcodx from './components/WhySpeedcodx';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import LoadingWrapper from './components/LoadingWrapper';

function App() {
  return (
    <LoadingWrapper>
      <div className="relative min-h-screen">
        <BackgroundGrid />
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhySpeedcodx />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </LoadingWrapper>
  );
}

export default App;
