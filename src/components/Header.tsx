import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Phone className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 blur-lg rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Vobil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Products
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Pricing
            </a>
            <a href="#documentation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Documentation
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Use Cases
            </a>
            <a href="#company" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Company
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 hover:scale-105">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-50"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Products
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Pricing
              </a>
              <a href="#documentation" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Documentation
              </a>
              <a href="#use-cases" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Use Cases
              </a>
              <a href="#company" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Company
              </a>
              <div className="px-3 py-2">
                <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white">
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