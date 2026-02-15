import React from 'react';
import { Mountain, Sun, Sprout, Users, Globe, Map } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="heritage" className="py-0 bg-white relative">
      {/* Hero Banner for Heritage */}
      <div className="relative h-[70vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
          alt="Himalayan Peaks"
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50"></div>
        <div className="relative z-10 text-center text-white px-6 mt-12 max-w-4xl">
          <span className="text-nepal-gold uppercase tracking-[0.4em] text-sm font-bold mb-6 block animate-fade-in-up">The Thapaliya Legacy</span>
          <h2 className="font-serif text-5xl md:text-8xl mb-8 animate-fade-in-up delay-100 drop-shadow-lg">
            Himalayan Heritage
          </h2>
          <p className="font-light text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 animate-fade-in-up delay-200 leading-relaxed">
            Rooted in the sacred valleys of Nepal, we bring you wellness secrets preserved for millennia.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        {/* Section 1: The Land & Spirituality */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-4 -left-4 w-full h-full border-2 border-nepal-gold/30 rounded-sm z-0"></div>
             <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1582650803863-1e84b4a94bca?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-sm shadow-xl" 
                alt="Kathmandu Temple" 
              />
              <img 
                src="https://images.unsplash.com/photo-1526716173434-a1b560f2065d?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-sm shadow-xl translate-y-12" 
                alt="Prayer Flags" 
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-nepal-sage uppercase tracking-widest text-sm font-bold mb-4 flex items-center gap-2">
              <Map className="w-4 h-4" /> Origin Story
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-nepal-dark mb-8 leading-tight">
              Where the Earth <br/> Touches the Sky
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
              Nepal is not just a country; it is a sanctuary. Home to eight of the world's highest peaks, its unique geography creates potent microclimates found nowhere else.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
               Our ancestors understood that the herbs growing in these extreme altitudes—struggling against the wind, snow, and sun—develop extraordinary resilience. This resilience is captured in our Shilajit, Cordyceps, and Ashwagandha. When you consume Thapaliya products, you consume the vitality of the Himalayas.
            </p>
            <div className="flex gap-4">
               <div className="bg-nepal-light px-6 py-4 rounded-sm border-l-4 border-nepal-gold">
                  <span className="block text-2xl font-serif text-nepal-dark mb-1">8000m+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Sourcing Altitude</span>
               </div>
               <div className="bg-nepal-light px-6 py-4 rounded-sm border-l-4 border-nepal-sage">
                  <span className="block text-2xl font-serif text-nepal-dark mb-1">100%</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Ayurvedic Purity</span>
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: Values */}
        <div className="mb-32 text-center max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl text-nepal-dark mb-4">Our Guiding Pillars</h2>
            <div className="w-24 h-1 bg-nepal-gold mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="group p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="w-20 h-20 bg-nepal-light rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-nepal-gold transition-colors duration-500">
                        <Sprout className="w-10 h-10 text-nepal-sage group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-serif text-2xl text-nepal-dark mb-4">Wild Harvested</h4>
                    <p className="text-gray-600 leading-relaxed font-light">We forage, we don't farm. Our botanicals grow wild in their natural habitat, ensuring they are free from human interference and chemicals.</p>
                </div>
                <div className="group p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="w-20 h-20 bg-nepal-light rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-nepal-gold transition-colors duration-500">
                        <Sun className="w-10 h-10 text-nepal-gold group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-serif text-2xl text-nepal-dark mb-4">Vedic Processing</h4>
                    <p className="text-gray-600 leading-relaxed font-light">Following the ancient <em>Surya Tapi</em> method, our extracts are solar-cured for weeks, preserving their primal energy.</p>
                </div>
                <div className="group p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="w-20 h-20 bg-nepal-light rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-nepal-blue transition-colors duration-500">
                        <Users className="w-10 h-10 text-nepal-blue group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-serif text-2xl text-nepal-dark mb-4">Sherpa Community</h4>
                    <p className="text-gray-600 leading-relaxed font-light">We partner directly with mountain communities. Every purchase supports the education of children in remote Dolpa and Mustang regions.</p>
                </div>
            </div>
        </div>

        {/* Section 3: Visual Journey */}
        <div className="mb-24">
            <div className="flex justify-between items-end mb-12">
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl text-nepal-dark">Visual Journey</h3>
                  <p className="text-gray-500 mt-2">Glimpses of the land we call home.</p>
                </div>
                <button className="hidden md:block px-6 py-2 border border-nepal-dark text-nepal-dark hover:bg-nepal-dark hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">
                  View Full Gallery
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
                <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-sm h-80 md:h-full">
                     <img 
                        src="https://images.unsplash.com/photo-1540397106260-e24a5953b075?q=80&w=1200&auto=format&fit=crop" 
                        alt="The Great Himalayas" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                     <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Mountain className="text-nepal-gold w-8 h-8 mb-3" />
                        <span className="font-serif text-3xl block mb-2">Annapurna Range</span>
                        <span className="text-gray-200 text-sm tracking-wide">The sanctuary of peace</span>
                     </div>
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=600&auto=format&fit=crop" 
                      alt="Traditional Spices" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <span className="text-white font-serif text-lg">Himalayan Spices</span>
                     </div>
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1589802057393-4a18cd7c093a?q=80&w=600&auto=format&fit=crop" 
                      alt="Monk" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <span className="text-white font-serif text-lg">Spiritual Roots</span>
                     </div>
                </div>
                <div className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-sm h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200&auto=format&fit=crop" 
                      alt="Yak Caravan" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <span className="text-white font-serif text-xl">The Old Silk Route</span>
                     </div>
                </div>
            </div>
        </div>

        {/* Global Standards Banner */}
        <div className="bg-stone-900 text-white p-12 md:p-20 text-center rounded-sm relative overflow-hidden">
             {/* Abstract blobs */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-nepal-gold rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-nepal-blue rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
             
             <Globe className="w-12 h-12 text-nepal-gold mx-auto mb-8 animate-pulse" />
             <h2 className="font-serif text-3xl md:text-5xl mb-8">From Nepal to the World</h2>
             <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 text-lg font-light">
                We bridge the gap between ancient Ayurvedic wisdom and modern safety standards. Every product is rigorously tested for purity, potency, and safety in ISO-certified laboratories before it leaves Kathmandu.
             </p>
             <button className="bg-transparent border border-nepal-gold text-nepal-gold px-8 py-3 uppercase tracking-widest font-bold text-sm hover:bg-nepal-gold hover:text-stone-900 transition-all duration-300">
                View Our Certifications
             </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;