import React from 'react';
import { PRODUCTS, FUTURE_EXPANSIONS } from '../constants';

const ProductSection: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-nepal-dark mb-4">Curated Wellness</h2>
          <div className="w-24 h-1 bg-nepal-gold mx-auto mb-6"></div>
          <p className="text-gray-600 font-light text-lg">
            Discover our initial collection of premium Ayurvedic staples. <br className="hidden md:block"/>
            Each jar is a testament to the purity of the Himalayas.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-nepal-dark px-6 py-2 uppercase tracking-wider text-xs font-bold">
                    View Details
                  </span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-nepal-sage uppercase tracking-widest font-bold">{product.category}</span>
                <h3 className="font-serif text-xl text-nepal-dark mt-2 mb-1 group-hover:text-nepal-gold transition-colors">{product.name}</h3>
                <p className="text-gray-500 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expansions Preview */}
        <div className="bg-nepal-light p-12 md:p-16 rounded-sm">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h3 className="font-serif text-3xl text-nepal-dark mb-2">Coming Soon</h3>
              <p className="text-gray-500">Expanding our horizons to bring you more of Nepal.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FUTURE_EXPANSIONS.map((item, idx) => (
              <div key={idx} className="border-l-2 border-nepal-gold/30 pl-6">
                <h4 className="font-serif text-xl text-nepal-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;