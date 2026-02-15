import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Himalayan Mountains" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-nepal-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="block text-nepal-gold tracking-[0.4em] text-sm uppercase mb-6 animate-fade-in-up">
          From the Heart of Nepal
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-fade-in-up delay-100">
          Ancient Wisdom <br /> 
          <span className="italic text-gray-300">Modern Wellness</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Thapaliya Export & Import brings you the purest Ayurvedic treasures, sourced directly from the pristine altitudes of the Himalayas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a 
            href="#collection" 
            className="px-8 py-4 bg-white text-nepal-dark hover:bg-nepal-gold hover:text-white transition-all duration-300 font-medium tracking-wider min-w-[180px]"
          >
            EXPLORE
          </a>
          <a 
            href="#advisor" 
            className="group px-8 py-4 border border-white text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
          >
            ASK AI ADVISOR <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;