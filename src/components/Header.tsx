import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/20 blur-lg rounded-full"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Vobil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm xl:text-base">
              Products
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm xl:text-base">
              Pricing
            </a>
            <a href="#documentation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm xl:text-base">
              Documentation
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm xl:text-base">
              Use Cases
            </a>
            <a href="#company" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm xl:text-base">
              Company
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button className="relative px-4 xl:px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-50"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/98 backdrop-blur-md border-t border-purple-500/20 absolute left-0 right-0 top-16">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#products" 
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#pricing" 
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#documentation" 
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </a>
              <a 
                href="#use-cases" 
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a 
                href="#company" 
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </a>
              <div className="pt-4">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white text-lg">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;