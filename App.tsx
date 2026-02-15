import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import AdvisorSection from './components/AdvisorSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="font-sans text-nepal-dark antialiased">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection />
        <AdvisorSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;