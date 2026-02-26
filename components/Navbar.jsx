'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navOptions = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Pricing', link: '/#pricing-section' },
    { name: 'Sign In', link: 'https://panel.lumixcore.com/auth/login' }
  ];

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
        isScrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-16 grid grid-cols-3 items-center">
            {/* Logo - Left */}
            <div className="flex items-center">
              <Link href="/" aria-label="Lumixcore">
                <img 
                  src="/images/logo.png" 
                  alt="Lumixcore" 
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </Link>
            </div>

            {/* Navigation Options - Center (Desktop only) */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {navOptions.slice(0, 3).map((option, index) => (
                option.link.startsWith('http') ? (
                  <a
                    key={index}
                    href={option.link}
                    className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 cursor-pointer font-semibold"
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={option.link}
                    className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 cursor-pointer font-semibold"
                  >
                    {option.name}
                  </Link>
                )
              ))}
            </div>

            {/* Right actions (Desktop only) */}
            <div className="hidden md:flex items-center justify-end gap-3">
              <a
                href={navOptions[3].link}
                className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 font-medium"
              >
                Sign In
              </a>
              <button 
                onClick={() => window.location.href = 'https://panel.lumixcore.com'}
                className="px-4 py-2 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer text-sm font-medium flex items-center gap-2 border border-white/10"
              >
                <span>Dashboard</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button - Right (Mobile only) */}
            <div className="md:hidden col-start-3 justify-self-end">
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
          className={`absolute inset-0 bg-[#00041a] transition-opacity duration-300 ${
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
              {navOptions.map((option, index) => (
                option.link.startsWith('http') ? (
                  <a
                    key={index}
                    href={option.link}
                    onClick={closeMobileMenu}
                    className={`text-white text-2xl font-medium hover:text-purple-400 transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={option.link}
                    onClick={closeMobileMenu}
                    className={`text-white text-2xl font-medium hover:text-purple-400 transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {option.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
