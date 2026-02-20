'use client';

import { useState, useEffect } from 'react';

const Navbar = ({ options = [] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Lumixcore" 
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-2 text-white font-bold text-xl">Lumixcore</span>
            </div>

            {/* Navigation Options - Middle (Desktop only) */}
            <div className="hidden md:flex items-center space-x-8">
              {options.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {option.name}
                </a>
              ))}
            </div>

            {/* Sign Up Button - Right (Desktop only) */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium flex items-center space-x-2">
                <span>Sign Up</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button - Right (Mobile only) */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  ) : (
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />
        
        {/* Menu Content */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-4 opacity-0'
        }`}>
          <div className="text-center">
            <div className="flex flex-col space-y-8">
              {options.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  onClick={closeMobileMenu}
                  className="text-white text-2xl font-medium hover:text-purple-400 transition-colors"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {option.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
