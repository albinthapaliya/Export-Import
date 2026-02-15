import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-nepal-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold tracking-wider mb-6">THAPALIYA</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Exporting the finest Himalayan ayurvedic products to the world. 
              Authenticity, purity, and tradition in every package.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nepal-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nepal-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nepal-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-nepal-gold transition-colors">Home</a></li>
              <li><a href="#heritage" className="hover:text-nepal-gold transition-colors">Our Heritage</a></li>
              <li><a href="#collection" className="hover:text-nepal-gold transition-colors">Collection</a></li>
              <li><a href="#advisor" className="hover:text-nepal-gold transition-colors">Ayurveda AI</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nepal-gold shrink-0" />
                <span>Kathmandu, Nepal <br/> & Global Distribution Centers</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nepal-gold shrink-0" />
                <a href="mailto:info@thapaliya-export.com">info@thapaliya-export.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nepal-gold shrink-0" />
                <span>+977 9800000000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Business Inquiries</h3>
            <p className="text-gray-400 text-xs mb-4">Interested in bulk imports? Leave your email.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Business Email"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-nepal-gold transition-colors"
              />
              <button className="bg-nepal-gold text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-amber-600 transition-colors">
                Request Catalog
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Thapaliya Export & Import. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;