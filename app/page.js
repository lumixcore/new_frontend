'use client';

import ClickSpark from '../components/ClickSpark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { LogoMarquee3D } from '../components/LogoMarquee3D';
import PricingCard from '../components/PricingCard';
import Navbar from '../components/Navbar';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pricingRef = useRef(null);
  const pricingCarouselRef = useRef(null);

  const navOptions = [
    { name: 'Home', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Docs', link: '#' },
    { name: 'Sign In', link: 'https://panel.lumixcore.com/auth/login' }
  ];

  // Scroll animations for different sections
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  const [marqueeRef, marqueeVisible] = useScrollAnimation(0.3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollPricingCarousel = (direction) => {
    const el = pricingCarouselRef.current;
    if (!el) return;

    const firstCard = el.querySelector('.snap-start');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24; // 24px gap
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <ClickSpark sparkColor='#b1afb7' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>

      {/* Navigation Bar */}
      <Navbar options={navOptions} />

      <div className="relative min-h-screen bg-[#000313] overflow-hidden flex flex-col items-center justify-center">

        {/* Half Purple Circle Shade in Center-Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
          {/* Graph Texture Box with Sparse Random Dots */}
          <div className="absolute top-0 z-0 w-full h-120" style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(255,255,255,0.25) 1.5px, transparent 1.5px),
              radial-gradient(circle at 65% 15%, rgba(255,255,255,0.15) 1px, transparent 1px),
              radial-gradient(circle at 40% 45%, rgba(255,255,255,0.2) 1.2px, transparent 1.2px),
              radial-gradient(circle at 85% 35%, rgba(255,255,255,0.18) 1px, transparent 1px),
              radial-gradient(circle at 25% 65%, rgba(255,255,255,0.22) 1.3px, transparent 1.3px),
              radial-gradient(circle at 75% 55%, rgba(255,255,255,0.16) 1px, transparent 1px),
              radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2) 1.2px, transparent 1.2px),
              radial-gradient(circle at 10% 90%, rgba(255,255,255,0.14) 1px, transparent 1px),
              radial-gradient(circle at 90% 70%, rgba(255,255,255,0.19) 1.1px, transparent 1.1px),
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '300px 300px, 280px 280px, 320px 320px, 290px 290px, 310px 310px, 285px 285px, 305px 305px, 295px 295px, 315px 315px, 30px 30px, 30px 30px',
            maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            animation: 'smoothFloat 20s ease-in-out infinite'
          }}></div>

          <style jsx>{`
            @keyframes smoothFloat {
              0%, 100% {
                background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
              }
              50% {
                background-position: 0 150px, 0 140px, 0 160px, 0 145px, 0 155px, 0 142px, 0 152px, 0 147px, 0 157px, 0 0, 0 0;
              }
            }
            @keyframes floatDots {
              from {
                background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
              }
              to {
                background-position: 0 200px, 0 180px, 0 220px, 0 190px, 0 210px, 0 195px, 0 185px, 0 205px, 0 0;
              }
            }
          `}</style>

        {/* Hero Section */}
        <div ref={heroRef} className="flex flex-col items-center justify-center mt-20 sm:mt-0 min-h-screen">
          <div className={`flex flex-col items-center justify-center text-center px-8 z-10 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-cyan-500 text-sm p-2 rounded-full bg-linear-to-t from-transparent to-purple-500/20 relative font-semibold mb-2"
              style={{
                background: 'linear-gradient(#150C59, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              Simple, fast, non of the hassle.
            </span>
            <h1 className={`text-4xl md:text-8xl lg:text-9xl text-white mb-6 max-w-4xl tracking-wider transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ fontFamily: 'Copperplate Gothic, serif', fontWeight: '400' }}>
              Lumixcore
            </h1>
            <p className={`text-lg text-gray-400 mb-8 max-w-3xl text-left sm:text-center transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{marginTop: '-10px'}}>
              A platform build to make hosting <span className="text-cyan-500">simpler</span> than ever. You don't have to purchase an entire VPS to host a project. Lumixcore allows you to host your projects in a simpler way, fast, non of the drama.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 w-full sm:min-w-[200px] justify-center transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="px-8 py-3 bg-linear-to-b from-purple-500 to-purple-900 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-800/50 flex items-center justify-center group" onClick={() => window.location.href = 'https://panel.lumixcore.com/auth/register'}>
                Let's start
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="px-8 py-3 text-white bg-gray-900 rounded-full hover:opacity-90 transition-opacity shadow-lg border border-gray-700 hover:border-gray-600 flex items-center justify-center group" onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Pricing
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Stats Section */}
          <div ref={statsRef} className={`mt-20 sm:mt-30 flex flex-wrap justify-center items-center gap-5 mr-5 ml-5 mb-5 flex-col sm:flex-row transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all duration-700 delay-200 hover:scale-105 hover:border-purple-500/30">
              <div className="text-sm text-gray-400">Used by</div>
              <div className="text-6xl text-white">500+</div>
              <div className="text-lg text-gray-300">Developers</div>
              <div className="text-sm text-gray-500">Building with lumixcore</div>
            </div>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all duration-700 delay-400 hover:scale-105 hover:border-purple-500/30">
              <div className="text-sm text-gray-400">Available in</div>
              <div className="text-6xl text-white">2</div>
              <div className="text-lg text-gray-300">Locations</div>
              <div className="text-sm text-gray-500">Always closer to you</div>
            </div>
          </div>
        </div>

        {/* 3D Logo Marquee Section */}
        <div ref={marqueeRef} className={`w-full mt-20 relative transition-all duration-1200 ${
          marqueeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            marqueeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl text-white mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>Whatever stack you choose.</h2>
            <p className="text-gray-400 text-[15px]">Absolutely any stack for your poject.</p>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${
            marqueeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <LogoMarquee3D />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative w-full mt-20 transition-all duration-1000 overflow-hidden rounded-t-[40px]" ref={pricingRef} id="pricing-section">
          {/* Top-Left Corner Glow */}
          <div className="absolute top-0 left-0 w-[800px] h-[400px] pointer-events-none transition-opacity duration-1000 z-0"
            style={{
              background: 'radial-gradient(circle at 0% 0%, rgba(0, 40, 255, 0.9) 0%, rgba(0, 40, 255, 0.4) 30%, rgba(0, 40, 255, 0.1) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>
          
          {/* Top-Right Corner Glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[400px] pointer-events-none transition-opacity duration-1000 z-0"
            style={{
              background: 'radial-gradient(circle at 100% 0%, rgba(0, 40, 255, 0.9) 0%, rgba(0, 40, 255, 0.4) 30%, rgba(0, 40, 255, 0.1) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>

          {/* Top Center Glow (Horizontal Flood) */}
          <div className="absolute inset-x-0 top-0 h-[300px] pointer-events-none transition-opacity duration-1000 z-0"
            style={{
              background: 'radial-gradient(ellipse 160% 100% at 50% 0%, rgba(0, 40, 255, 0.6) 0%, rgba(0, 40, 255, 0.25) 40%, transparent 80%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>

          {/* Grid + stars overlay */}
          <div className="absolute inset-x-0 top-0 z-0 h-120 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 18% 28%, rgba(255,255,255,0.25) 1.2px, transparent 1.2px),
                radial-gradient(circle at 62% 18%, rgba(255,255,255,0.18) 1px, transparent 1px),
                radial-gradient(circle at 44% 62%, rgba(255,255,255,0.2) 1.1px, transparent 1.1px),
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '260px 260px, 340px 340px, 420px 420px, 64px 64px, 64px 64px',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 82%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 82%)',
              opacity: 0.95
            }}></div>

          <div className="relative z-10 text-center mb-12 mt-5">
            <span className={`text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
              style={{
                background: 'linear-gradient(#00051b, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              <FontAwesomeIcon icon={faWandSparkles} className="text-cyan-500 mr-1" />
              Pricing
            </span>
            <h2 className={`text-3xl md:text-5xl text-white mb-4 mt-5 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{fontFamily: 'Manrope, sans-serif'}}>Choose Your Plan</h2>
            <p className={`text-gray-400 text-[15px] transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>Select the perfect plan for your project needs.</p>
          </div>
          <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div
              ref={pricingCarouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Free"
                  price="0"
                  originalPrice="$0"
                  features={[
                    "1GB RAM (fair use)",
                    "100% CPU (fair use)",
                    "1GB NVMe (fair use)",
                    "0 server backup",
                    "0 databases",
                    "2 ports",
                    "No subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Micro"
                  price="0.40"
                  originalPrice="$0.50"
                  features={[
                    "512MB RAM",
                    "40% CPU",
                    "1GB NVMe Storage",
                    "0 Backups",
                    "0 Databases",
                    "1 Port",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Small"
                  price="0.80"
                  originalPrice="$1.00"
                  features={[
                    "1GB RAM",
                    "75% CPU",
                    "2GB NVMe Storage",
                    "1 Backup",
                    "0 Database",
                    "1 Port",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Medium"
                  price="1.40"
                  originalPrice="$2.00"
                  features={[
                    "1.5GB RAM",
                    "100% CPU",
                    "4GB NVMe Storage",
                    "1 Backup",
                    "1 Database",
                    "2 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Large"
                  price="2.00"
                  originalPrice="$3.00"
                  features={[
                    "2GB RAM",
                    "125% CPU",
                    "8GB NVMe Storage",
                    "1 Backup",
                    "2 Databases",
                    "3 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="XL"
                  price="3.00"
                  originalPrice="$5.00"
                  features={[
                    "4GB RAM",
                    "175% CPU",
                    "16GB NVMe Storage",
                    "2 Backups",
                    "2 Databases",
                    "3 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="2XL"
                  price="5.00"
                  originalPrice="$7.00"
                  features={[
                    "6GB RAM",
                    "200% CPU",
                    "32GB Storage",
                    "3 Backups",
                    "3 Databases",
                    "4 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                aria-label="Previous plans"
                onClick={() => scrollPricingCarousel(-1)}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-[#00051b]/60 backdrop-blur hover:bg-[#00051b]/80 transition"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next plans"
                onClick={() => scrollPricingCarousel(1)}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-[#00051b]/60 backdrop-blur hover:bg-[#00051b]/80 transition"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <footer className="relative w-full mt-20 overflow-hidden border-t border-white/10 bg-[#00051b]">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(1000px 400px at 20% 0%, rgba(99,102,241,0.20) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 350px at 80% 0%, rgba(168,85,247,0.14) 0%, rgba(0,0,0,0) 60%)',
            }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-purple-500/10 border border-purple-400/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                  </div>
                  <span className="text-white font-semibold text-lg">Lumixcore</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400 max-w-md">
                  Build fast, deploy faster. Lumixcore makes hosting simpler without the hassle.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a href="mailto:hi@lumixcore.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="https://github.com/lumixcore" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.64.75 12c0 5.08 3.2 9.38 7.64 10.9.56.1.77-.25.77-.55v-2.02c-3.11.69-3.77-1.52-3.77-1.52-.51-1.34-1.24-1.69-1.24-1.69-1.01-.71.08-.7.08-.7 1.12.08 1.71 1.19 1.71 1.19.99 1.74 2.6 1.24 3.23.95.1-.74.39-1.24.7-1.52-2.48-.29-5.09-1.28-5.09-5.71 0-1.26.44-2.29 1.17-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.32 3.14 1.18.91-.26 1.89-.39 2.86-.4.97.01 1.95.14 2.86.4 2.18-1.5 3.14-1.18 3.14-1.18.62 1.58.23 2.74.11 3.03.73.81 1.17 1.84 1.17 3.1 0 4.44-2.62 5.42-5.11 5.71.4.36.76 1.06.76 2.14v3.18c0 .3.2.66.78.55 4.43-1.52 7.63-5.82 7.63-10.9C23.25 5.64 18.27.5 12 .5Z"/>
                    </svg>
                  </a>
                  <a href="https://discord.gg/2h8hBx8A52" aria-label="Discord" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.487 0-.164-.393-.409-.874-.617-1.249a.077.077 0 0 0-.078-.037c-1.695.29-3.335.803-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c1.993 1.474 3.923 2.37 5.819 2.963a.078.078 0 0 0 .084-.028c.447-.61.844-1.256 1.215-1.923a.076.076 0 0 0-.041-.106c-.652-.248-1.274-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.095.252-.194.371-.291a.074.074 0 0 1 .077-.01c3.927 1.84 8.18 1.84 12.061 0a.074.074 0 0 1 .078.01c.12.097.246.196.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.892.076.076 0 0 0-.04.106c.372.667.768 1.313 1.215 1.923a.077.077 0 0 0 .084.028c1.905-.593 3.836-1.489 5.83-2.963a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.673-3.548-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.184 0-2.156-1.104-2.156-2.464 0-1.36.955-2.464 2.156-2.464 1.21 0 2.175 1.113 2.156 2.464 0 1.36-.955 2.464-2.156 2.464Zm7.975 0c-1.184 0-2.156-1.104-2.156-2.464 0-1.36.955-2.464 2.156-2.464 1.21 0 2.175 1.113 2.156 2.464 0 1.36-.946 2.464-2.156 2.464Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Products</h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">Rules</h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                      <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                      <a href="/tos#refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
                      <a href="/tos#fair-use-policy" className="text-gray-400 hover:text-white transition-colors">Fair Use Policy</a>
                      <a href="/tos" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">Support</h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                      <a href="mailto:hi@lumixcore.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                      <a href="https://github.com/lumixcore" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                      <a href="https://discord.gg/2h8hBx8A52" className="text-gray-400 hover:text-white transition-colors">Discord</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); const pricingSection = document.getElementById('pricing-section'); if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                      <a href="/tos" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-xs text-gray-500">Lumixcore, All rights reserved.</p>
              <div className="h-px w-full md:w-80 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-70"
            style={{
              background:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 10px, rgba(255,255,255,0) 18px)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)',
            }}
          ></div>
        </footer>

      </div>
    </ClickSpark>
  );
}
