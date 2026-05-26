'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const styleTagRef = useRef(null);

  const productsOptions = [
    { name: 'Cloud containers', link: '/containers', delay: 100 },
    { name: 'Web Hosting', link: '/webhosting', delay: 150 },
    { name: 'Game Hosting', link: '/gameserver', delay: 200 },
    { name: 'KVM Servers (US)', link: '/kvmservers-us', delay: 250 },
    { name: 'KVM Servers (Germany)', link: '/kvmservers-de', delay: 300 },
    { name: 'IPv6 KVM Servers (Germany)', link: '/kvmservers-ipv6-de', delay: 350 },
  ];

  const navOptions = [
    { name: 'Locations', link: '#locations-section' },
    { name: 'Blog', link: '/blogs' },
  ];

  const mobileNavOptions = [
    { name: 'Home', link: '/#', delay: 0 },
    { name: 'Products', link: '#', isDropdown: true, delay: 100 },
    { name: 'Locations', link: '#locations-section', needsOffset: true, delay: 200 },
    { name: 'Blogs', link: '/blogs', delay: 300 },
  ];

  useEffect(() => {
    if (!styleTagRef.current && typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.setAttribute('data-navbar-animations', '');
      style.textContent = `
        /* Mobile / general keyframe animations */
        .base-fade-up    { opacity: 0; transform: translateY(-10px); }
        .base-fade-right { opacity: 0; transform: translateX(-20px); }
        .base-fade-left  { opacity: 0; transform: translateX(20px); }
        .base-fade       { opacity: 0; }

        .anim-fade-up    { animation: fadeUp    300ms ease forwards; will-change: transform, opacity; }
        .anim-fade-right { animation: fadeRight 400ms ease forwards; will-change: transform, opacity; }
        .anim-fade-left  { animation: fadeLeft  500ms ease forwards; will-change: transform, opacity; }
        .anim-fade       { animation: fadeIn    300ms ease forwards; will-change: opacity; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Desktop dropdown – transitions for butter-smooth entrance */
        .dt-enter {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .dt-enter.show {
          opacity: 1;
          transform: translateY(0);
        }

        .dt-item {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 400ms ease, transform 400ms ease;
        }
        .dt-item.show {
          opacity: 1;
          transform: translateX(0);
        }
      `;
      document.head.appendChild(style);
      styleTagRef.current = style;
    }

    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Handle initial hash navigation with offset
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashNavigation);
      if (styleTagRef.current && document.head.contains(styleTagRef.current)) {
        document.head.removeChild(styleTagRef.current);
        styleTagRef.current = null;
      }
    };
  }, []);

  const handleProductsMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (!isMobileMenuOpen) setIsMobileProductsOpen(false);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(prev => !prev);
  };

  const handleMobileNavClick = (option) => {
    if (option.isDropdown) {
      toggleMobileProducts();
      return;
    }
    closeMobileMenu();
    if (option.needsOffset && option.link.includes('#')) {
      setTimeout(() => {
        const hash = option.link.split('#')[1];
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleDesktopNavClick = (link, isHashLink = false) => {
    const currentPath = window.location.pathname;

    if (isHashLink) {
      const hash = link.split('#')[1];
      if (currentPath !== '/') {
        window.location.href = `/#${hash}`;
        return;
      }
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else if (link === '#') {
      if (currentPath !== '/') {
        window.location.href = '/';
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
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
              <button onClick={() => handleDesktopNavClick('#')} className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 cursor-pointer font-semibold bg-transparent border-none">
                Home
              </button>
              {/* Products Dropdown */}
              <div className="relative" onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
                <button className="flex items-center gap-1 text-gray-300 hover:text-white text-[14px] transition-all duration-200 cursor-pointer font-semibold group">
                  <span>Products</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 transition-all duration-200 ${isProductsDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <div className={`bg-[#0b1025] py-[9px] rounded-lg border border-white/5 shadow-xl min-w-[220px] dt-enter ${isProductsDropdownOpen ? 'show' : ''}`}>
                    {productsOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.link}
                        style={{ transitionDelay: isProductsDropdownOpen ? `${option.delay}ms` : '0ms' }}
                        className={`flex items-center px-4 py-[11px] text-gray-300 font-semibold hover:text-white hover:bg-white/5 transition-all duration-300 text-[13px] dt-item ${isProductsDropdownOpen ? 'show' : ''}`}
                      >
                        {option.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {navOptions.slice(0, 3).map((option, index) => (
                option.link.startsWith('http') ? (
                  <a
                    key={index}
                    href={option.link}
                    className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 cursor-pointer font-semibold"
                  >
                    {option.name}
                  </a>
                ) : option.link.startsWith('#') ? (
                  <button
                    key={index}
                    onClick={() => handleDesktopNavClick(option.link, true)}
                    className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 cursor-pointer font-semibold bg-transparent border-none"
                  >
                    {option.name}
                  </button>
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
                href="https://panel.lumixcore.com/auth/login"
                className="text-gray-300 hover:text-white text-[14px] transition-colors duration-200 font-medium"
              >
                Sign In
              </a>
              <button onClick={() => window.location.href = 'https://panel.lumixcore.com/auth/register'}
                className="px-4 py-2 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer text-sm font-medium flex items-center gap-2 border border-white/10"
              >
                <span>Register</span>
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
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#00041a]" 
          onClick={closeMobileMenu}
        />
        {/* Menu Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-300/95 text-2xl" style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '400'}}>
            {!isMobileProductsOpen ? (
              <div key="mobile-main" className="flex flex-col space-y-4">
                {mobileNavOptions.map((option, index) => (
                  option.isDropdown ? (
                    <button 
                      key={index}
                      onClick={() => handleMobileNavClick(option)}
                      style={{ animationDelay: `${option.delay}ms` }}
                      className={`flex items-center justify-center gap-2 group cursor-pointer ${isMobileMenuOpen ? 'base-fade-right anim-fade-right' : ''}`}
                    >
                      <span>{option.name}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-1">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : option.link.startsWith('http') ? (
                    <a 
                      key={index} 
                      href={option.link} 
                      onClick={() => handleMobileNavClick(option)}
                      style={{ animationDelay: `${option.delay}ms` }}
                      className={`block ${isMobileMenuOpen ? 'base-fade-right anim-fade-right' : ''}`}
                    >
                      {option.name}
                    </a>
                  ) : (
                    <Link 
                      key={index} 
                      href={option.link} 
                      onClick={() => handleMobileNavClick(option)}
                      style={{ animationDelay: `${option.delay}ms` }}
                      className={`block ${isMobileMenuOpen ? 'base-fade-right anim-fade-right' : ''}`}
                    >
                      {option.name}
                    </Link>
                  )
                ))}
                <div className="mt-20 flex flex-col gap-3 text-sm">
                  <a
                    href="https://panel.lumixcore.com/auth/login"
                    style={{ animationDelay: `500ms` }}
                    className={`text-2xl text-gray-300 block ${isMobileMenuOpen ? 'base-fade-right anim-fade-right' : ''}`}
                  >
                    Sign In
                  </a>
                  <button
                    href="https://panel.lumixcore.com/auth/register"
                    style={{ animationDelay: `550ms` }}
                    className={`text-2xl p-3 text-grey-300 rounded-lg bg-cyan-500/10 border border-cyan-500/20 block ${isMobileMenuOpen ? 'base-fade-right anim-fade-right' : ''}`}
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : (
              <div key="mobile-products" className="flex flex-col justify-left items-left space-y-4">
                {/* Back Button */}
                <button 
                  onClick={toggleMobileProducts}
                  className="flex items-center justify-center gap-2 group base-fade-left anim-fade-left"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] transition-transform duration-200 group-hover:-translate-x-1">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Back</span>
                </button>
                
                {/* Products Submenu */}
                <div className="space-y-4">
                  {productsOptions.map((option, index) => (
                    <a 
                      key={index} 
                      href={option.link} 
                      onClick={closeMobileMenu}
                      style={{ animationDelay: `${option.delay}ms` }}
                      className="block base-fade-left anim-fade-left"
                    >
                      {option.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;